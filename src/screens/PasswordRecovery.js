//importação
import { View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import { styles } from '../styles/main'
import Button1 from '../components/Button1'
import Header from '../components/Header'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth_module } from '../firebase/config'

//definição
const PasswordRecovery = (props) => {
  
  const [email, setEmail] = useState('')

  const recovery = () => {
    sendPasswordResetEmail(auth_module, email)
    .then(console.log("E-mail de redefinição de senha enviado com sucesso."))
  }

  return (
    <View style={styles.mainView}>

      <Header screenTitle="Recuperação de senha"></Header>

      <View style={styles.bodyView}>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>E-mail:</Text>
          <TextInput style={styles.textInput} value={email} onChangeText={setEmail} />
          <Text style={styles.subText2}>E-mail parece ser inválido.</Text>

        </View>

      </View>

      <View style={styles.footerView}>

        <View style={styles.subView1}>

          <Button1 title='Recuperar' event={recovery}/>

        </View>

      </View>

    </View>

  )
}

//exportação
export default PasswordRecovery