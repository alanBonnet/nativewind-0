import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';
import { Text, View, ImageBackground, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import diccionario from '../diccionario/diccionario';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../styles';
import { styleScaled } from '../assets/styles/styleScaled';
const Styled_Text = styled(Text);
const Styled_View = styled(View)
const Styled_ImageBackground = styled(ImageBackground);
const Styled_FlatList = styled(FlatList);
const Styled_TouchableOpacity = styled(TouchableOpacity);
// const Styled_ = styled()
const Styled_TextInput = styled(TextInput);
const Background__Image = require('../assets/rick-and-morty.jpg');

const RickyMartin = () => {
    const [blurVal, setBlurVal] = useState(0)
    const [listita, setListita] = useState([])
    const [limite, setLimite] = useState({
        inicio: 1,
        fin: 10
    })
    const [buscarPjs, setBuscarPjs] = useState("")
    const [showContent, setShowContent] = useState(false)
    const urlBase = 'https://rickandmortyapi.com/api/character';
    const mostrarPjs = ({ item }) => (
        <Card item={item} personajes={listita} setPersonajes={setListita} />
    );

    const reiniciarLista = () => {
        setLimite({ ...limite, inicio: 1, fin: 10 });
        traerPjs()
    }
    const traerPjs = async () => {
        const request = await diccionario.getAllPjs(urlBase)
        setListita(request)
    }
    const traerNuevosPjs = async (limite = undefined, hasta = undefined) => {
        const request = await diccionario.getAllPjs(urlBase, limite, hasta)
        setListita([...listita, ...request])
    }

    const cargarMasPjs = () => {
        if (listita.length < 821) {
            const limiteFin = limite.fin + 10;
            const limiteDesde = limite.inicio + 10
            setLimite({ ...limite, fin: limiteFin, inicio: limiteDesde })
            traerNuevosPjs(limite.fin, limiteDesde)
        }
    }
    useEffect(() => {
        traerPjs()
        setLimite({ ...limite, inicio: 1, fin: 10 });
        setShowContent(!showContent)
    }, [])
    useEffect(() => {
        if (listita.length > 0) {
            setBlurVal(1.7)
        } else {
            setBlurVal(0)
        }
    }, [listita])
    return (
        <Styled_View className={`container justify-center bg-violet-400 items-center`}>
            <Styled_ImageBackground className='h-full w-full' source={Background__Image} resizeMode='cover' blurRadius={blurVal}>
                <Styled_View className={blurVal > 0 ? "bg-gray-100/10" : ""}>
                    <Styled_View className="">
                        <Styled_View className='bg-violet-500/80'>
                            <Styled_Text style={[styles.text, styleScaled['py-4']]} className='text-center text-4xl text-green-500'>
                                Rick y Morty
                            </Styled_Text>
                            {/* <Styled_View className='flex flex-row self-center' >
                                <Styled_TextInput
                                    className='basis-1/2 bg-violet-100/50 py-2 px-3 w-1/2 rounded-lg ml-2 mb-2 border-2 border-green-500 text-green-900 text-lg'
                                    onTextInput={({ nativeEvent }) => { setBuscarPjs(nativeEvent.text) }}
                                />
                                <Styled_TouchableOpacity className='basis-1/4 bg-violet-100/20 rounded-lg border-gray-200 justify-self-center pt-3 mb-2' onPress={() => {
                                    setListita([... listita.filter(e => e.name.includes(buscarPjs))])
                                }}>
                                    <Styled_Text className='text-center text-green-300'>
                                        <Icon name='search' solid size={22} />
                                    </Styled_Text>
                                </Styled_TouchableOpacity>
                            </Styled_View> */}
                        </Styled_View>
                        {listita.length != 10 && <Styled_TouchableOpacity style={styleScaled['py-2']} onPress={reiniciarLista} className='bg-violet-200/20'>
                            <Styled_Text className='text-white text-center'>
                                <Icon name='redo' size={20} />
                            </Styled_Text>
                        </Styled_TouchableOpacity>}
                    </Styled_View>
                    {showContent && <Styled_View style={styleScaled['mb-flatlist']}>
                        <FlatList data={listita} renderItem={mostrarPjs} onEndReached={cargarMasPjs} keyExtractor={(item) => item.id} />
                    </Styled_View>}
                </Styled_View>
            </Styled_ImageBackground>
            <StatusBar style="auto" />
        </Styled_View>
    )
}

export default RickyMartin