import React, { useState } from 'react'
import { styled } from 'nativewind';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// Partes de la Tarjeta Inicio
import ImgCard from '../layout/Card/CardParts/ImgCard';
import BodyCard from '../layout/Card/BodyCard';
import diccionario from '../diccionario/diccionario'
import { styleScaled } from '../assets/styles/styleScaled';
import { scale, verticalScale } from 'react-native-size-matters'
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
    <Styled_TouchableOpacity className="bg-red-500 rounded" style={[styleScaled['my-2'],styleScaled['p-2']]}
        onPress={() => { setPersonajes(personajes.filter(pj => !pj.name.includes(item.name))) }}
    >
        <Styled_Text className="text-white text-lg">
            Borrar {item.name}
        </Styled_Text>
    </Styled_TouchableOpacity>
);
// Partes de la Tarjeta Fin



const villanos = [
    "toxic", 
    "fascist",
    "miles knightly", 
    "evil", 
    "mytho",
    "hepatitis", 
    "coli",
    "creepy",
    "gibble",
    "tuberculosis",
    "gonorrhea",
    "bubonic plague",
    "concerto",
    "unknown rick",
    

]

const Card = ({ item, personajes, setPersonajes }) => {
    const [mostrarBody, setMostrarBody] = useState(false)
    const img = {
        size: {
            width: scale(150),
            height: verticalScale(150)
        }
    }
    const ifVillano = diccionario['marcarComoVillano'](item.name,villanos);
    const colorIfVillano = ifVillano ? 'bg-red-500/60' : 'bg-violet-400/40'
    const ifDeadStatus = item.status === "Dead";
    const ifUnkownStatus = item.status === "unknown";
    const colorIfDead = ifDeadStatus?'border-r-red-500':ifUnkownStatus? "border-r-gray-300":'border-r-green-500'
    const imgPj = { uri: item.image };
    return (
        <Styled_View className={`container items-center ${colorIfVillano} border-8 border-indigo-300/20 ${colorIfDead}`} style={[styleScaled['mt-6'], styleScaled['py-2'], styleScaled['mb-12']]}>
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