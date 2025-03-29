//importação
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/main'

//definição
const Button1 = (props) => {
 
  return (

    <TouchableOpacity style={styles.button1} onPress={props.event}>
        <Text style={styles.textButton1}>{props.title}</Text>
    </TouchableOpacity>

  )
}

//exportação
export default Button1