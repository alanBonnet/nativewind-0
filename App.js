import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { Text, View, ImageBackground, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
// import diccionario from './diccionario/diccionario';
import { NavigationContainer } from '@react-navigation/native';
// const Styled_View = styled(View)
// const Styled_ImageBackground = styled(ImageBackground);
// const Styled_Text = styled(Text);
// const Styled_FlatList = styled(FlatList);
// const Styled_Image = styled(Image);
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './views/Home';
import RickyMartin from './views/RickyMartin';
import { loadCustomFonts } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5'

// const Background__Image = require('./assets/rick-and-morty.jpg');

const Tab = createMaterialBottomTabNavigator()
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
