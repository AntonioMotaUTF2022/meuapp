//importação
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/main'

//definição
const Button3 = (props) => {

  return (

    <TouchableOpacity style={styles.button3} onPress={props.event}>
        <Text style={styles.textButton2}>{props.title}</Text>
    </TouchableOpacity>

  )
}

//exportação
export default Button3