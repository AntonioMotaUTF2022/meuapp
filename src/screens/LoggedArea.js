import { createDrawerNavigator } from "@react-navigation/drawer"
import Acknowledgement from "./drawerScreens/Acknowledgement"
import ChangeResearch from "./drawerScreens/ChangeResearch"
import NewResearch from "./drawerScreens/NewResearch"
import Home from "./drawerScreens/Home"
import ResearchPage from "./drawerScreens/ResearchPage"
import DataCollection from "./drawerScreens/DataCollection"
import Report from "./drawerScreens/Report"
import Drawer from "../components/Drawer"

const drawerNavigator = createDrawerNavigator()

const LoggedArea = (props) => {
    return (

        <drawerNavigator.Navigator useLegacyImplementation={true} initialRouteName="Home" screenOptions={{drawerStyle:{backgroundColor:'#2B1F5C'}, headerShown: false}}
            drawerContent={(props) => <Drawer {...props}/>}>
            <drawerNavigator.Screen name="Acknowledgement" component={Acknowledgement} />
            <drawerNavigator.Screen name="ChangeResearch" component={ChangeResearch} />
            <drawerNavigator.Screen name="NewResearch" component={NewResearch} />
            <drawerNavigator.Screen name="Home" component={Home} />
            <drawerNavigator.Screen name="ResearchPage" component={ResearchPage} />
            <drawerNavigator.Screen name="DataCollection" component={DataCollection} />
            <drawerNavigator.Screen name="Report" component={Report} />
        </drawerNavigator.Navigator>

    )
}

export default LoggedArea