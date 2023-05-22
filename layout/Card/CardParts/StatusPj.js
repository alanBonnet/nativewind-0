import { styled } from 'nativewind';
import { Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Styled_Text = styled(Text);

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

export default StatusPj