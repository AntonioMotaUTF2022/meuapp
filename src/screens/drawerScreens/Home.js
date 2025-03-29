//importação
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { styles } from '../../styles/main'
import Card from '../../components/Card'
import Button1 from '../../components/Button1'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { collection, initializeFirestore, onSnapshot, query } from 'firebase/firestore'
import { app } from '../../firebase/config'
import { useDispatch } from 'react-redux'
import { reducerSetActiveResearch } from '../../../redux/activeResearchSlice'

//definição
const Home = (props) => {
  
  const [txtSearch, setSearch] = useState('Insira o termo de busca...')
  const [listaResearches, setListaResearches] = useState()

  const dispatch = useDispatch()

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const researchesCollection = collection(db, "researches")

  useEffect(() => {
    const q = query(researchesCollection)
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const researches = []
      snapshot.forEach( (doc) => {
        researches.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setListaResearches(researches) 
    })
  }, [])

  const itemResearch = ({item}) => {
    return (
      <TouchableOpacity style={{justifyContent: "center"}} onPress={() => {
        dispatch(reducerSetActiveResearch({item: item})),
        props.navigation.navigate("ResearchPage")
      }}>
        <Card image={item.image} title={item.title} date={item.date}/>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.mainView}>

      <View style={styles.headerView2}>
        <TouchableOpacity onPress={() => {props.navigation.openDrawer()}} style={{padding:15}}>
          <Icon name="menu" size={40} color={'white'}></Icon>
        </TouchableOpacity>
        <Text style={styles.titleText}>Homepage</Text>
      </View>

      <View style={styles.bodyView}>

        <View style={styles.subView1}>

          <TextInput style={styles.textInput} value={txtSearch} onChangeText={setSearch} />

        </View>

        <FlatList data={listaResearches} renderItem={itemResearch} keyExtractor={research => research.id} horizontal={true} />

      </View>

      <View style={styles.footerView}>

        <View style={styles.subView1}>

          <Button1 title='Nova Pesquisa' event={() => {props.navigation.navigate('NewResearch')}}/>

        </View>

      </View>

    </View>

  )
}

//exportação
export default Home