import styled from 'styled-components/native';
import color from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  background: ${props => props.color};
  align-items: center;
  justify-content: center;
  flex: ${props => props.flex};
  border: 0.7px solid ${color.background};
  padding: 20px;
`;

export const ButtonText = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 24px;
  color: #fff;
`;