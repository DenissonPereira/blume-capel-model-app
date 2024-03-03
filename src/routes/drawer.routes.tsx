import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import { TabRoutes } from './tab.routes'
import StackRoutes from './stack.routes';
import { GitHub } from '../screens';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
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
                component={StackRoutes}
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