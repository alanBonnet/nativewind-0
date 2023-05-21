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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import RickyMartin from './views/RickyMartin';
import RickyMartin2 from './views/RickyMartin2';
// const Background__Image = require('./assets/rick-and-morty.jpg');

const Tab = createMaterialBottomTabNavigator()

const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='RickyMartin' component={RickyMartin} />
        <Tab.Screen  name='RickyMartin2' component={RickyMartin2} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default withExpoSnack(App);
