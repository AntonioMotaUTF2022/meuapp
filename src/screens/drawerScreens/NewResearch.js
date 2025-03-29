//importação
import { View, Text, TextInput, TouchableOpacity, Pressable, Image } from 'react-native'
import  Modal from 'react-native-modal'
import { useState } from 'react'
import { styles } from '../../styles/main'
import Button1 from '../../components/Button1'
import { collection, initializeFirestore, addDoc } from "firebase/firestore";
import { app } from "../../firebase/config"
import Icon from 'react-native-vector-icons/MaterialIcons'
import MsgBox from '../../components/MsgBox'
import moment from 'moment'
import { launchImageLibrary } from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer'

//definição
const NewResearch = (props) => {
  
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [modalComponent, setModalComponent] = useState({isVisible: false, title: '', message: ''})
  const [errorMsg, setErrorMsg] = useState('')

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const researchesCollection = collection(db, "researches")
  
  const addResearch = () => {
    if(title=='') {
      setErrorMsg('Defina um nome para a pesquisa.')
    } else {
      setErrorMsg('')
      const docResearch = {
        title: title,
        date: moment().format('DD/MM/YYYY'),
        remarks1: 0,
        remarks2: 0,
        remarks3: 0,
        remarks4: 0,
        remarks5: 0,
        image: image
      }
      addDoc(researchesCollection, docResearch)
      msgBox('Sucesso', 'Nova pesquisa cadastrada com sucesso.')
    }
  }

  const msgBox = (title, message) => {
    setModalComponent({isVisible: true, title: title, message: message})
    setTimeout(() => {
      setModalComponent({isVisible: false, title: '', message: ''})
      props.navigation.navigate("Home")
    }, 3000)
  }

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, async (result) => {
      const resizedImage = await ImageResizer.createResizedImage(result.assets[0].uri, 300, 300, 'JPEG', 100)
      const imageUri = await fetch(resizedImage.uri)
      const imageBlob = await imageUri.blob()
      console.log(image)
  
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
        console.log(image)
      }
      reader.readAsDataURL(imageBlob)
    })
  }

  return (
    <View style={styles.mainView}>

      <Modal isVisible={modalComponent.isVisible}>
        <MsgBox title={modalComponent.title} message={modalComponent.message}/>
      </Modal>

      <View style={styles.headerView2}>
        <TouchableOpacity onPress={() => {props.navigation.navigate("Home")}} style={{padding:15}}>
          <Icon name="arrow-back" size={40} color={'white'}></Icon>
        </TouchableOpacity>
        <Text style={styles.titleText}>Nova pesquisa</Text>
      </View>

      <View style={styles.bodyView}>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>Nome:</Text>
          <TextInput style={styles.textInput} value={title} onChangeText={setTitle} />

        </View>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>Imagem:</Text>
          <Button1 title='Selecione uma imagem' event={()=>{pickImage()}}/>
          <Image source={{uri: image}} style={{width:100, height:100}}></Image>
          <Text style={styles.subText2}>{errorMsg}</Text>

        </View>

      </View>

      <View style={styles.footerView}>

        <View style={styles.subView1}>

          <Button1 title='Cadastrar' event={()=>addResearch()}/>

        </View>

      </View>

    </View>

  )
}

//exportação
export default NewResearch