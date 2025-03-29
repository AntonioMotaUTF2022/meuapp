//importação
import { View, Text } from 'react-native'
import { styles } from '../styles/main'
import { TouchableOpacity } from 'react-native'

//definição
const MsgBoxDelete = (props) => {

  return (

    <View style={styles.modal}>
        <View>
            <Text style={styles.textButton2}>Tem certeza de apagar essa pesquisa?</Text>
            <View style={{flexDirection: 'row'}}>

              <TouchableOpacity style={[styles.button2, {flex:0.5, backgroundColor: '#FF8383'}]} onPress={props.yesEvent}>
                  <Text style={styles.textButton2}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button2, {flex:0.5}]} onPress={props.cancelEvent}>
                  <Text style={styles.textButton2}>Cancelar</Text>
              </TouchableOpacity>

            </View>
        </View>
    </View>

  )
}

//exportação
export default MsgBoxDelete