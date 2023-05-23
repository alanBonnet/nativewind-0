import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { Text, View, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
const Styled_View = styled(View)
const Styled_ImageBackground = styled(ImageBackground);
const Styled_Text = styled(Text);
const Background__Image = require('../assets/rick-and-morty.jpg');
const Styled_TouchableOpacity = styled(TouchableOpacity);
const Home = ({navigation}) => {
    return (
        <Styled_View className={`container pt-9 justify-center bg-violet-400 items-center`}>
            <Styled_ImageBackground className='w-full h-full' source={Background__Image} resizeMode='cover'>
                <Styled_View>
                    <Styled_View className="">
                        <Styled_View className='bg-violet-500/80'>
                            <Styled_Text style={styles.text} className='text-center text-4xl text-green-500 py-4'>
                                Rick y Morty
                            </Styled_Text>
                        </Styled_View>
                        <Styled_View className='relative h-full w-screen'>
                            <Styled_TouchableOpacity className='absolute bottom-[250] inset-x-4 bg-violet-500/50 rounded-lg border-gray-200 border-4 py-6' onPress={() => {
                                navigation.navigate('Rick & Morty')
                            }}>
                                <Styled_Text style={styles.text2} className='text-center text-green-200 text-xl'>
                                    Mostrar Personajes
                                </Styled_Text>
                            </Styled_TouchableOpacity>
                        </Styled_View>
                    </Styled_View>
                </Styled_View>

            </Styled_ImageBackground>
            <StatusBar style="auto" />
        </Styled_View>
    )
}

export default Home