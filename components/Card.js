import React, { useState } from 'react'
import { styled } from 'nativewind';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// Partes de la Tarjeta Inicio
import ImgCard from '../layout/Card/CardParts/ImgCard';
import BodyCard from '../layout/Card/BodyCard';

const Styled_View = styled(View);
const Styled_Text = styled(Text);
// const Styled_ = styled()
const Styled_Image = styled(Image);



// const PruebaPj = ({ item }) => (
//     <Styled_Text className="text-white text-xl">
//         {JSON.stringify(item)}
//     </Styled_Text>
// );
const Styled_TouchableOpacity = styled(TouchableOpacity);
const BotonEliminar = ({ item, personajes, setPersonajes }) => (
    <Styled_TouchableOpacity className="bg-red-500 p-2 rounded my-2"
        onPress={() => { setPersonajes(personajes.filter(pj => !pj.name.includes(item.name))) }}
    >
        <Styled_Text className="text-white text-lg">
            Borrar {item.name}
        </Styled_Text>
    </Styled_TouchableOpacity>
);
// Partes de la Tarjeta Fin

const esVillano = (nombre, siEs) => {
    return nombre?.toLowerCase()?.includes(siEs.toLowerCase())??false;
}
const detectarMultiplesVillanos = (nombre,ees) => {
    const villaneitor = [];
        for(let esVillanoxd of ees){
            if(esVillano(nombre,esVillanoxd)){
                villaneitor.push(nombre)
            }
        }
    return villaneitor.length > 0
}

const villanos = [
    "toxic", 
    "fascist",
    "miles knightly", 
    "evil", 
    "mytho",
    "hepatitis", 
    "coli"
]

const Card = ({ item, personajes, setPersonajes }) => {
    const [mostrarBody, setMostrarBody] = useState(false)
    const img = {
        size: {
            width: 150,
            height: 150
        }
    }
    const ifVillano = detectarMultiplesVillanos(item.name,villanos);
    const imgPj = { uri: item.image };
    return (
        <Styled_View className={`container items-center ${ifVillano ? 'bg-red-500/60' : 'bg-violet-400/40'} mb-12 py-2 mt-6`}>
            <ImgCard uri={imgPj} img={img} mostrarInfo={mostrarBody} setMostrarInfo={setMostrarBody} personajes={personajes} setPersonajes={setPersonajes} item={item} />
            {mostrarBody && (
                <>
                    <BodyCard item={item} />
                    <BotonEliminar item={item} personajes={personajes} setPersonajes={setPersonajes} />
                </>
            )}
        </Styled_View>
    )
}




export default Card