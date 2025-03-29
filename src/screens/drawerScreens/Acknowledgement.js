//importação
import { View, Text } from 'react-native'
import { styles } from '../../styles/main'

//definição
const Acknowledgement = (props) => {

  
  setTimeout(() => {props.navigation.navigate("DataCollection")}, 3000)

  return (
    <View style={styles.mainView}>

      <View style={styles.headerView1}>
      </View>

      <View style={styles.bodyView}>

        <Text style={styles.text1}>
          
          Obrigado por participar da pesquisa!
          {'\n\n'}
          Aguardamos você no próximo ano!
          
        </Text>

      </View>

      <View style={styles.footerView}>
      </View>

    </View>

  )
}

//exportação
export default Acknowledgement