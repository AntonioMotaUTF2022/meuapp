//importação
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/main'
import Icon from 'react-native-vector-icons/MaterialIcons'

//definição
const Header = (props) => {

  const screenTitle = props.screenTitle;
  const icon = props.icon;

  return (

    <View style={styles.headerView2}>
      <TouchableOpacity onPress={() => props.navigation.navigate.goBack()} style={{padding:15}}>
        <Icon name={icon} size={40} color={'white'}></Icon>
      </TouchableOpacity>
      <Text style={styles.titleText}>{screenTitle}</Text>
    </View>

  )
}

//exportação
export default Header