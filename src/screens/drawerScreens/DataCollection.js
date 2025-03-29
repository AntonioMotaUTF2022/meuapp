//importação
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/main'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'
import { initializeFirestore, collection, doc, updateDoc, query, where, onSnapshot } from 'firebase/firestore'
import { app } from '../../firebase/config'
import { useDispatch } from 'react-redux'
import { reducerSetActiveResearch } from '../../../redux/activeResearchSlice'

//definição
const DataCollection = (props) => {

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const item = useSelector((state) => state.activeResearch.item)
  const researchesCollection = collection(db, "researches")

  const dispatch = useDispatch()
  const updateGrade = (remark) => {
    switch(remark) {
      case 1:
        updateDoc(doc(db, "researches", item.id), {remarks1: item.remarks1 + 1})
        break
      case 2:
        updateDoc(doc(db, "researches", item.id), {remarks2: item.remarks2 + 1})
        break
      case 3:
        updateDoc(doc(db, "researches", item.id), {remarks3: item.remarks3 + 1})
        break
      case 4:
        updateDoc(doc(db, "researches", item.id), {remarks4: item.remarks4 + 1})
        break
      case 5:
        updateDoc(doc(db, "researches", item.id), {remarks5: item.remarks5 + 1})
        break
    }
    const q = query(researchesCollection, where('title', '==', item.title))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach( (doc) => {
        dispatch(reducerSetActiveResearch({item: {id: doc.id, ...doc.data()}}))
      })
    })
    props.navigation.navigate("Acknowledgement")
    setTimeout(() => {props.navigation.navigate("DataCollection")}, 3000)
  }

  return (
    <View style={styles.mainView}>

      <Text style={styles.titleText}>{useSelector((state) => state.activeResearch.item.title)}</Text>

      <View style={styles.bodyView2}>

        <ScrollView horizontal={true}>

          <TouchableOpacity style={styles.button6} onPress={() => updateGrade(1)}>
            <Icon name='sentiment-very-dissatisfied' size={100} color={'#D71616'}></Icon>
            <Text style={styles.textButton2}>Péssimo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6} onPress={() => updateGrade(2)}>
            <Icon name='sentiment-dissatisfied' size={100} color={'#FF360A'}></Icon>
            <Text style={styles.textButton2}>Ruim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6} onPress={() => updateGrade(3)}>
            <Icon name='sentiment-neutral' size={100} color={'#FFC632'}></Icon>  
            <Text style={styles.textButton2}>Neutro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6} onPress={() => updateGrade(4)}>
            <Icon name='sentiment-satisfied' size={100} color={'#37BD6D'}></Icon>
            <Text style={styles.textButton2}>Bom</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6} onPress={() => updateGrade(5)}>
            <Icon name='sentiment-very-satisfied' size={100} color={'#25BC22'}></Icon>
            <Text style={styles.textButton2}>Excelente</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

      <View style={styles.footerView2}></View>

    </View>

  )
}

//exportação
export default DataCollection