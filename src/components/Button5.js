//importação
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles/main'
import Icon from 'react-native-vector-icons/MaterialIcons'

//definição
const Button5 = (props) => {
  
  return (

    <TouchableOpacity style={styles.button9} onPress={props.event}>
      <Icon name={props.icon} size={40} color={'white'}></Icon>
      <Text style={styles.textButton1}>{props.title}</Text>
    </TouchableOpacity>

  )
}

//exportação
export default Button5