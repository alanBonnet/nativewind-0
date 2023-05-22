import { styled } from 'nativewind';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Styled_Text = styled(Text);

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

export default GenderPj