//importação
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/main'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PieChart from 'react-native-pie-chart'
import { useSelector } from 'react-redux'

//definição
const Report = (props) => {

  return (
    <View style={styles.mainView}>

      <View style={styles.headerView2}>
        <TouchableOpacity onPress={() => props.navigation.navigate("ResearchPage")} style={{padding:15}}>
          <Icon name="arrow-back" size={40} color={'white'}></Icon>
        </TouchableOpacity>
        <Text style={styles.titleText}>Relatório</Text>
      </View>

      <View style={styles.bodyView3}>

        <PieChart widthAndHeight={300} series={[
          {value: useSelector((state) => state.activeResearch.item.remarks1), color:'#D71616'},
          {value: useSelector((state) => state.activeResearch.item.remarks2), color:'#FF360A'},
          {value: useSelector((state) => state.activeResearch.item.remarks3), color:'#FFC632'},
          {value: useSelector((state) => state.activeResearch.item.remarks4), color:'#37BD6D'},
          {value: useSelector((state) => state.activeResearch.item.remarks5), color:'#25BC22'},
          ]}></PieChart>

        <View style={styles.subView1}>
          
          <View style={styles.subView3}>
            <View style={[styles.captionColor, {backgroundColor:'#D71616'}]}></View>
            <Text style={styles.subText1}>Péssimo</Text>
          </View>

          <View style={styles.subView3}>
            <View style={[styles.captionColor, {backgroundColor:'#FF360A'}]}></View>
            <Text style={styles.subText1}>Ruim</Text>
          </View>

          <View style={styles.subView3}>
            <View style={[styles.captionColor, {backgroundColor:'#FFC632'}]}></View>
            <Text style={styles.subText1}>Neutro</Text>
          </View>

          <View style={styles.subView3}>
            <View style={[styles.captionColor, {backgroundColor:'#37BD6D'}]}></View>
            <Text style={styles.subText1}>Bom</Text>
          </View>

          <View style={styles.subView3}>
            <View style={[styles.captionColor, {backgroundColor:'#25BC22'}]}></View>
            <Text style={styles.subText1}>Ótimo</Text>
          </View>

        </View>

      </View>

    </View>

  )
}

//exportação
export default Report