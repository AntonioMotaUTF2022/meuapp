//importação
import { View, Text, Image } from 'react-native'
import { styles } from '../styles/main'

//definição
const Card = (props) => {

  return (

    <View style={styles.card}>
      <Image source={{uri: props.image}} style={{width:150, height:150}} ></Image>
      <Text style={styles.cardText1}>{props.title}</Text>
      <Text style={styles.cardText2}>{props.date}</Text>
    </View>

  )
}

//exportação
export default Card