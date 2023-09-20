import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import JavascriptIcon from '../assets/Icons/javascript.svg'
import ReacrIcon from '../assets/Icons/react.svg'
import { useColorScheme } from 'react-native';
import TopBarNavigator from './TopBarNavigator';

const Tab = createBottomTabNavigator();

const ButtomTabNavigation = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16, fontWeight: '400' },
                headerTitle: 'React Interview ',
                headerTintColor: isDarkMode ? 'white' : 'black',
                headerStyle: {
                    backgroundColor: isDarkMode ? 'black' : 'white'
                },
                tabBarActiveTintColor:  'black',
                tabBarStyle: { height:50, justifyContent:'center', alignContent:'center' }
            }}>
            <Tab.Screen
                name="React"
                component={TopBarNavigator}
                options={{
                    tabBarLabel: 'React',
                    tabBarIcon: () => <ReacrIcon height={24} width={24} />,

                }}
            />
            <Tab.Screen
                name="HCJS"
                component={TopBarNavigator}
                options={{
                    tabBarLabel: 'HCJS',
                    tabBarIcon: () => <JavascriptIcon height={24} width={24} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default ButtomTabNavigation;