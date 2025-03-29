//importação
import { View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import { styles } from '../styles/main'
import Button1 from '../components/Button1'
import Button2 from '../components/Button2'
import Button3 from '../components/Button3'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { auth_module } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { reducerSetActiveUser } from '../../redux/activeUserSlice'
import { useDispatch } from 'react-redux'


//definição
const Login = (props) => {
  
  const [txtEmail, setEmail] = useState('')
  const [txtPassword, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const dispatch = useDispatch()

  const authUser = () => {
    signInWithEmailAndPassword(auth_module, txtEmail, txtPassword)
      .then((user) => {
        dispatch(reducerSetActiveUser({user: {email: user.user.email}})),
        props.navigation.navigate("LoggedArea")
      })
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
          case "auth/too-many-requests": 
            setErrorMsg('Você tentou fazer login muitas vezes')
            break
          case "auth/invalid-credential": 
            setErrorMsg('Senha incorreta')
            break
        }
      })
  }

  return (
    <View style={styles.mainView}>

      <View style={styles.headerView1}>
        <Text style={styles.titleText}>Satisfying.you</Text>
        <Icon name='sentiment-satisfied' size={50} color={'white'}></Icon>
      </View>

      <View style={styles.bodyView}>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>E-mail:</Text>
          <TextInput style={styles.textInput} value={txtEmail} onChangeText={setEmail} />

        </View>

        <View style={styles.subView1}>

          <Text style={styles.subText1}>Senha:</Text>
          <TextInput style={styles.textInput} value={txtPassword} secureTextEntry={true} onChangeText={setPassword} />
          <Text style={styles.subText2}>{errorMsg}</Text>

        </View>

        <View style={styles.subView1}>

          <Button1 title='Entrar' event={() => authUser()}/>

        </View>

      </View>

      <View style={styles.footerView}>

        <Button2 title='Criar minha conta' event={() => props.navigation.navigate('NewAccount')} />
        <Button3 title='Esqueci minha senha' event={() => props.navigation.navigate('PasswordRecovery')} />

      </View>

    </View>

  )
}

//exportação
export default Login