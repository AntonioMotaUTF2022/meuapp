//importação
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { styles } from '../../styles/main'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { initializeFirestore, collection, updateDoc, doc, onSnapshot, query, where, deleteDoc } from 'firebase/firestore'
import { app } from '../../firebase/config'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { reducerSetActiveResearch } from '../../../redux/activeResearchSlice'
import  Modal from 'react-native-modal'
import MsgBox from '../../components/MsgBox'
import MsgBoxDelete from '../../components/MsgBoxDelete'
import { launchImageLibrary } from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer'
import Button1 from '../../components/Button1'

//definição
const ChangeResearch = (props) => {
  
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [modalComponent, setModalComponent] = useState({isVisible: false, title: '', message: ''})
  const [modalAskDeleteIsVisible, setModalAskDeleteIsVisible] = useState(false)

  const dispatch = useDispatch()

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const item = useSelector((state) => state.activeResearch.item)
  const researchesCollection = collection(db, "researches")

  const updateResearch = () => {
    if(title=='') {
      setErrorMsg('Defina um nome para a pesquisa.')
    } else {
      setErrorMsg('')
      updateDoc(
        doc(db, "researches", item.id), 
        {title: title,
          image: image
          
        }
      )
      const q = query(researchesCollection, where('title', '==', title))
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.forEach( (doc) => {
          dispatch(reducerSetActiveResearch({item: {id: doc.id, ...doc.data()}}))
        })
      })
      msgBox('Sucesso', 'Dados alterados com sucesso.', 'ResearchPage')
    }
  }

  const deleteResearch = () => {
    deleteDoc(doc(db, "researches", item.id))
    setModalAskDeleteIsVisible(false)
    msgBox('Sucesso', 'Pesquisa apagada com sucesso.', 'Home')
  }

  const msgBox = (title, message, redirectPage) => {
    setModalComponent({isVisible: true, title: title, message: message})
    setTimeout(() => {
      setModalComponent({isVisible: false, title: '', message: ''})
      props.navigation.navigate(redirectPage)
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

      <Modal isVisible={modalAskDeleteIsVisible}>
        <MsgBoxDelete yesEvent={() => deleteResearch()} cancelEvent={() => setModalAskDeleteIsVisible(false)}/>
      </Modal>

      <View style={styles.headerView2}>
        <TouchableOpacity onPress={() => {props.navigation.navigate("ResearchPage")}} style={{padding:15}}>
          <Icon name="arrow-back" size={40} color={'white'}></Icon>
        </TouchableOpacity>
        <Text style={styles.titleText}>Modificar pesquisa</Text>
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

        <View style={styles.subView2}>

          <TouchableOpacity style={styles.button8} onPress={() => {updateResearch()}}>
              <Text style={styles.textButton1}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button7} onPress={() => {setModalAskDeleteIsVisible(true)}}>
              <Icon name="delete" size={40} color={'white'}></Icon>
              <Text style={styles.textButton1}>Apagar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>

  )
}

//exportação
export default ChangeResearch