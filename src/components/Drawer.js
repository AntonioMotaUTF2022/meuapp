//importação
import { View, Text } from 'react-native'
import { styles } from '../styles/main'
import { useSelector } from 'react-redux'
import Button5 from './Button5'

//definição
const Drawer = (props) => {
  
  const title = props.title
  const message = props.message
  return (

    <View style={styles.drawer}>
        <View style={{paddingBottom:20}}>
          <Text style={styles.subText1}>{useSelector((state) => state.activeUser.user.email)}</Text>
        </View>
        <View style={{ backgroundColor:'white', height: 1, width: 300, marginBottom:50}}/>
        <View style={styles.drawerButtons}>
          <Button5 icon="description" title="Pesquisas" event={() => props.navigation.navigate('Home')}></Button5>
          <Button5 icon="logout" title="Sair" event={() => props.navigation.navigate('Home')}></Button5>
        </View>
    </View>

  )
}

//exportação
export default Drawer