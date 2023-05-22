import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styled } from 'nativewind'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Styled_Text = styled(Text);
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
export default BasicInfo