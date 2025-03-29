import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import newAccount from './src/screens/NewAccount';
import passwordRecovery from './src/screens/PasswordRecovery';
import LoggedArea from "./src/screens/LoggedArea";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import './gesture-handler'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NewAccount" component={newAccount} />
          <Stack.Screen name="PasswordRecovery" component={passwordRecovery} />
          <Stack.Screen name="LoggedArea" component={LoggedArea} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default App;