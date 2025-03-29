//importação
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { styles } from '../../styles/main'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'

//definição
const ResearchPage = (props) => {

  return (
    <View style={styles.mainView}>

      <View style={styles.headerView2}>
        <TouchableOpacity onPress={() => {props.navigation.navigate("Home")}} style={{padding:15}}>
          <Icon name="arrow-back" size={40} color={'white'}></Icon>
        </TouchableOpacity>
        <Text style={styles.titleText}>{useSelector((state) => state.activeResearch.item.title)}</Text>
      </View>

      <View style={styles.bodyView2}>

        <ScrollView horizontal={true} style={styles.subView3}>

          <TouchableOpacity style={styles.button5} onPress={() => {props.navigation.navigate("ChangeResearch")}}>
            <Image source={require('../../../images/modificar.png')} style={{width:150, height:150}} ></Image>
            <Text style={styles.textButton2}>Modificar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button5} onPress={() => {props.navigation.navigate("DataCollection")}}>
            <Image source={require('../../../images/coletarDados.png')} style={{width:150, height:150}} ></Image>
            <Text style={styles.textButton2}>Coletar dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button5} onPress={() => {props.navigation.navigate("Report")}}>
            <Image source={require('../../../images/relatorio.png')} style={{width:150, height:150}} ></Image>
            <Text style={styles.textButton2}>Relatório</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

      <View style={styles.footerView2}>

      </View>

    </View>

  )
}

//exportação
export default ResearchPage