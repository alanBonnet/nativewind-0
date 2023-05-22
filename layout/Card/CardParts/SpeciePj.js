import { styled } from 'nativewind';
import { Text } from 'react-native';

const Styled_Text = styled(Text);

const SpeciePj = ({ specie }) => (
    <Styled_Text className="text-white text-xl">
        {`Specie: ${specie}`}
    </Styled_Text>
);

export default SpeciePj