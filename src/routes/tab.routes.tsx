import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { Home, Sobre, Modelo, Grid } from '../screens';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator 
        screenOptions={{ 
            headerShown: false, 
            tabBarLabel: () => null,
            tabBarStyle: {
                alignItems: 'center',
                justifyContent: 'center',
            }, 
        }} 
    >
        <Tab.Screen
            name='home'
            component={Home}
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
            }}
        />

        <Tab.Screen
            name='grid'
            component={Grid}
            options={{
                tabBarIcon: ({ color, size}) => <Feather name='grid' color={color} size={size} />,
            }}
        />

        <Tab.Screen
            name='modelo'
            component={Modelo}
            options={{
                tabBarIcon: ({ color, size}) => <Feather name='book-open' color={color} size={size} />
            }}
        />

        <Tab.Screen
            name='sobre'
            component={Sobre}
            options={{
                tabBarIcon: ({ color, size }) => <Feather name='help-circle' color={color} size={size} />
            }}
        />
    </Tab.Navigator>
  )
}
