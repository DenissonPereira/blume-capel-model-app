import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import { TabRoutes } from './tab.routes'
import { ComoUsar, GitHub } from '../screens';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
                title: 'Blume-Capel Model APP',
                drawerContentStyle: {
                    backgroundColor: '#fff',
                },
                headerStyle: {
                    backgroundColor: '#ECEFF4'
                },
            }}
        >
            <Drawer.Screen
                name='homeDrawer'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />

            <Drawer.Screen
                name='comoUsarDrawer'
                component={ComoUsar}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='box' color={color} size={size} />,
                    drawerLabel: 'Como Usar'
                }}
            />

            <Drawer.Screen
                name='githubDrawer'
                component={GitHub}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='github' color={color} size={size} />,
                    drawerLabel: 'Acessar documentação'
                }}
            />
        </Drawer.Navigator>
    )
}