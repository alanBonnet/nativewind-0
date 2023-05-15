import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { Text, View, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
import diccionario from './diccionario/diccionario';
const Styled_View = styled(View)
const Styled_ImageBackground = styled(ImageBackground);
const Styled_Text = styled(Text);
const Styled_FlatList = styled(FlatList);
const Styled_Image = styled(Image);


const Background__Image = require('./assets/rick-and-morty.jpg');
const App = () => {
  const [blurVal, setBlurVal] = useState(0)
  const [listita, setListita] = useState([])
  const urlBase = 'https://rickandmortyapi.com/api/character';

  const mostrarPjs = ({ item }) => {
    const img = {
      size: {
        width: 150,
        height: 150
      }
    }
    const imgPj = { uri: item.image };
    return (
      <Styled_View className='container items-center bg-violet-200/20 mb-8 pb-2 py-2 mt-2'>

        <TouchableOpacity >
          <Styled_Image source={imgPj} resizeMode='cover' style={{ width: img.size.width, height: img.size.height}} className='rounded-full' />
        </TouchableOpacity>
      </Styled_View>
    )
  }
  const traerPjs = async () => {
    const request = await diccionario.getAllPjs(urlBase, 10)
    setListita(request)
  }

  useEffect(() => {
    traerPjs()
  })
  useEffect(() => {
    if (listita.length > 0) {
      setBlurVal(1.7)
    } else {
      setBlurVal(0)
    }
  }, [listita])
  return (
    <Styled_View className="container pt-9 justify-center bg-violet-400 items-center">
      <Styled_ImageBackground className='w-full h-full' source={Background__Image} resizeMode='cover' blurRadius={blurVal}>
        <Styled_View>
          <Styled_Text className='text-2xl text-white text-center bg-violet-300'>
            Rick y Morty
          </Styled_Text>
          <FlatList data={listita} renderItem={mostrarPjs} />
        </Styled_View>
      </Styled_ImageBackground>
      <StatusBar style="auto" />
    </Styled_View>
  );
}

export default withExpoSnack(App);
