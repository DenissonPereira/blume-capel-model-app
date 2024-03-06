import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { Sobre, Modelo, Grid, Plus } from '../screens';
import StackRoutes from './stack.routes';
import { View } from 'react-native';

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
                name='homeTab'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                }}
            />

            <Tab.Screen
                name='grid'
                component={Grid}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='grid' color={color} size={size} />,
                }}
            />

            <Tab.Screen
                name='plusTab'
                component={Plus}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            backgroundColor: '#2F26D9',
                            borderRadius: 50,
                            padding: 10,
                            overflow: 'hidden',
                        }}>
                            <Feather name="plus" color={'white'} size={size} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name='modelo'
                component={Modelo}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='book-open' color={color} size={size} />
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
