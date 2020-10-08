import styled from 'styled-components/native';
import color from "../../styles/colors";

export const Container = styled.SafeAreaView`
  background: #FFF;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 24px;
`;

export const CalculatorContainer = styled.View`
  background: ${color.background};
  width: 100%;
  border-radius: 15px;
`;

export const TopBar = styled.View`
  flex-direction: row;
`;

export const Bullet = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${props => props.color};
  margin: 10px 10px 0 10px;
`;

export const ResultContainer = styled.View`
  align-items: flex-end;
`;

export const ResultText = styled.Text`
  color: #fff;
  font-family: Poppins-Thin;
  font-size: 60px;
  margin-right: 15px;
  margin-bottom: 5px;
`;

export const Wrapper = styled.View`
`;

export const Row = styled.View` 
  width: 100%;
  flex-direction: row;
`;