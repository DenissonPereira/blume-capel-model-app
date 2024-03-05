import { createStackNavigator } from '@react-navigation/stack'
import { ComoUsar, Home, Spin1, Spin2, Spin3 } from '../screens';

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name='home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='comousar'
                component={ComoUsar}
            />
            <Stack.Screen
                name='Spin1'
                component={Spin1}
            />
            <Stack.Screen
                name='Spin2'
                component={Spin2}
            />
            <Stack.Screen
                name='Spin3'
                component={Spin3}
            />
        </Stack.Navigator>
    )
}