import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Screens/Home/Home';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Home} />
        </Tab.Navigator>
    );
}

export default TopBarNavigator
