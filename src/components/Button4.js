//importação
import { View, Text, Image } from 'react-native'
import { styles } from '../styles/main'

//definição
const Button4 = (props) => {
  
  return (

    <TouchableOpacity style={styles.button5}>
      <Image source={props.imageSrc} style={{width:150, height:150}} ></Image>
      <Text style={styles.textButton2}>{props.title}</Text>
    </TouchableOpacity>

  )
}

//exportação
export default Button4