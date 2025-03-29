//importação
import { View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import { styles } from '../styles/main'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth_module } from '../firebase/config'
import Button1 from '../components/Button1'
import Header from '../components/Header'

//definição
const NewAccount = (props) => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const newUser = () => {
    if (name == '') {
      setErrorMsg("Digite seu nome")
    } else if (email == '') {
      setErrorMsg("Digite seu e-mail")
    } else if (password == '') {
      setErrorMsg("Defina uma senha")
    } else if (password != password2) {
      setErrorMsg("Senhas não conferem")
    } else {
      createUserWithEmailAndPassword(auth_module, email, password)
      .catch((error) => {
        switch(error.code) {
          case "auth/missing-email": 
            setErrorMsg('Insira um e-mail')
            break
          case "auth/invalid-email": 
            setErrorMsg('Email inválido')
            break
          case "auth/missing-password": 
            setErrorMsg('Insira uma senha')
            break
          case "auth/weak-password": 
            setErrorMsg('Senha muito fraca')
            break
          case "auth/email-already-in-use": 
            setErrorMsg('Já existe uma conta com este e-mail')
            break
        }
      }
    ).then(props.navigation.navigate("Login"))
    }

  }

  return (
    <View style={styles.mainView}>

      <Header screenTitle="Nova conta"></Header>

      <View style={styles.bodyView}>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>Nome:</Text>
          <TextInput style={styles.textInput} value={name} onChangeText={setName} />

        </View>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>E-mail:</Text>
          <TextInput style={styles.textInput} value={email} onChangeText={setEmail} />

        </View>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>Senha:</Text>
          <TextInput style={styles.textInput} value={password} secureTextEntry={true} onChangeText={setPassword} />

        </View>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>Repetir senha:</Text>
          <TextInput style={styles.textInput} value={password2} secureTextEntry={true} onChangeText={setPassword2} />
          <Text style={styles.subText2}>{errorMsg}</Text>

        </View>

      </View>

      <View style={styles.footerView}>

        <View style={styles.subView1}>

          <Button1 title='Cadastrar' event={() => newUser()} />

        </View>

      </View>

    </View>

  )
}

//exportação
export default NewAccount