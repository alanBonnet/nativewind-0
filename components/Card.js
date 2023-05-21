import React, { Component, useState } from 'react'
import { styled } from 'nativewind';
import { Text, View, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Styled_View = styled(View)
const Styled_Text = styled(Text);
// const Styled_ = styled()
const Styled_Image = styled(Image);

const StatusPj = ({ status }) => {
    const ifUnknow = status === 'unknown' ? '' : status;
    const Icons = status.toLowerCase() === 'alive' ? (
        <Icon name='heart' solid size={22} ></Icon>
    ) :
        status.toLowerCase() === 'dead' ? (<Icon name='heart' size={22}></Icon>)
            :
            (<Icon name='question' size={22}></Icon>)

    const colorStatus = status.toLowerCase().includes("alive") ?
        "green-300" :
        status.toLowerCase().includes("dead") ?
            "red-400" :
            "gray-400"
        ;
    return (
        <Styled_Text className="text-white text-xl">
            {"Status: "}
            <Styled_Text className={`text-${colorStatus}`}>
                {ifUnknow} {Icons}
            </Styled_Text>
        </Styled_Text>
    );
}
const GenderPj = ({ gender }) => {
    const ifUnknow = gender === 'unknown' ? '' : gender;
    const Icons = gender.toLowerCase() === 'male' ? (
        <Icon name='mars' solid size={22} ></Icon>
    ) :
        gender.toLowerCase() === 'female' ?
            (<Icon name='venus' size={22}></Icon>) :
            gender.toLowerCase() === 'genderless' ?
                (<Icon name='genderless' size={22}></Icon>) :
                (<Icon name='question' size={22}></Icon>)
    const colorGender = gender.toLowerCase() == "male" ?
        "blue-300" :
        gender.toLowerCase() == "female" ?
            "red-200" :
            "gray-400"
        ;
    return (
        <Styled_Text className="text-white text-xl">
            {"Gender: "}
            <Styled_Text className={`text-${colorGender}`}>
                {ifUnknow} {Icons}
            </Styled_Text>
        </Styled_Text>
    );
}
const SpeciePj = ({ specie }) => (
    <Styled_Text className="text-white text-xl">
        {`Specie: ${specie}`}
    </Styled_Text>
);

const PruebaPj = ({ item }) => (
    <Styled_Text className="text-white text-xl">
        {JSON.stringify(item)}
    </Styled_Text>
);
const BasicInfo = ({ text, info }) => {
    const ifUnknow = info === "unknown" ? "" : info;
    const ifUnknowIcon = info === "unknown" ? (
        <Styled_Text className="text-gray-400">
            <Icon name='question' size={22}></Icon>
        </Styled_Text>
    ) : "";
    return (
        <Styled_Text className="text-white text-xl">
            {`${text}: ${ifUnknow}`} {ifUnknowIcon}
        </Styled_Text>
    );
}
// Partes de la Tarjeta Inicio
const ImgCard = ({ uri, img, mostrarInfo, setMostrarInfo }) => (
    <TouchableOpacity onPress={() => {
        setMostrarInfo(!mostrarInfo)
    }}>
        <Styled_Image source={uri} resizeMode='cover' style={{ width: img.size.width, height: img.size.height }} className='rounded-full' />
    </TouchableOpacity>
)

const BodyCard = ({ item }) => (
    <Styled_View className="bg-violet-800/60 p-2 rounded w-screen text-center my-2 px-5">
        <Styled_Text className="text-white text-2xl text-center">{item.name}</Styled_Text>
        <StatusPj status={item.status} />
        <SpeciePj specie={item.species} />
        <GenderPj gender={item.gender} />
        <BasicInfo text="Origin" info={item.origin.name} />
        <BasicInfo text="Last known location" info={item.location.name} />
        {/* <PruebaPj item={item} ></PruebaPj> */}
    </Styled_View>
)


const Styled_TouchableOpacity = styled(TouchableOpacity)
const BotonEliminar = ({ item, personajes, setPersonajes }) => (
    <Styled_TouchableOpacity className="bg-red-500 p-2 rounded my-2"
        onPress={() => { setPersonajes(personajes.filter(pj => !pj.name.includes(item.name))) }}>
        <Styled_Text className="text-white text-lg">
            Borrar {item.name}
        </Styled_Text>
    </Styled_TouchableOpacity>
);
// Partes de la Tarjeta Fin




const Card = ({ item, personajes, setPersonajes }) => {
    const [mostrarBody, setMostrarBody] = useState(false)
    const img = {
        size: {
            width: 150,
            height: 150
        }
    }
    const imgPj = { uri: item.image };
    return (
        <Styled_View className='container items-center bg-violet-400/40 mb-12 py-2 mt-6'>
            <ImgCard uri={imgPj} img={img} mostrarInfo={mostrarBody} setMostrarInfo={setMostrarBody} />
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