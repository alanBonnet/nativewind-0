import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import RickyMartin from './views/RickyMartin';
import { loadCustomFonts } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator()

const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        const loadFont = async () => {
            await loadCustomFonts();
            setFontLoaded(true);
        };

        loadFont();
    }, [])

    if (!fontLoaded) {
        return null; // Otra vista de carga o indicador de carga
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name='Rick & Morty' component={RickyMartin} options={{
                    headerStyle: {
                        backgroundColor: "#c4b5fd",
                    },
                    headerTitle:()=><Icon name='home' size={24} />
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default withExpoSnack(App);
