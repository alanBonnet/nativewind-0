import React, { Component, useState } from 'react'
import { styled } from 'nativewind';
import { Text, View, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
// Partes de la Tarjeta Inicio
import BasicInfo from './CardParts/BasicInfo';
import StatusPj from './CardParts/StatusPj';
import SpeciePj from './CardParts/SpeciePj';
import GenderPj from './CardParts/GenderPj';
const Styled_View = styled(View);
const Styled_Text = styled(Text);
// const Styled_ = styled()

const BodyCard = ({ item, children }) => {
    if (!children) {
        return (<Styled_View className="bg-violet-800/60 p-2 rounded w-screen text-center my-2 px-5">
            <Styled_Text className="text-white text-2xl text-center">{item.name}</Styled_Text>
            <StatusPj status={item.status} />
            <SpeciePj specie={item.species} />
            <GenderPj gender={item.gender} />
            <BasicInfo text="Origin" info={item.origin.name} />
            <BasicInfo text="Last known location" info={item.location.name} />
            {/* <PruebaPj item={item} ></PruebaPj> */}
        </Styled_View>)
    }
    return (
        <Styled_View className="bg-violet-800/60 p-2 rounded w-screen text-center my-2 px-5">
            <Styled_Text className="text-white text-2xl text-center">{item.name}</Styled_Text>
            {children}
            {/* <PruebaPj item={item} ></PruebaPj> */}
        </Styled_View>)
}


export default BodyCard