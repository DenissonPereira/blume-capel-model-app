import { createStackNavigator } from '@react-navigation/stack'
import { ComoUsar, GitHub } from '../screens';

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ title: '' }}>
            <Stack.Screen
                name='comousar'
                component={ComoUsar}
            />
        </Stack.Navigator>
    )
}