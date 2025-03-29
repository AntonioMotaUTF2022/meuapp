//importação
import { View, Text } from 'react-native'
import { styles } from '../styles/main'

//definição
const MsgBox = (props) => {
  
  const title = props.title
  const message = props.message

  return (

    <View style={styles.modal}>
        <View style={{paddingBottom:20}}>
            <Text style={styles.subText1}>{title}</Text>
        </View>
        <View>
            <Text style={styles.textButton2}>{message}</Text>
        </View>
    </View>

  )
}

//exportação
export default MsgBox