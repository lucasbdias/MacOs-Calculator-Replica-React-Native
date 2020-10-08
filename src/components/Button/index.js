import React, { useState } from 'react';

import { Container, ButtonText } from './styles';

const Button = ({
  type,
  color, 
  flex, 
  character,
  handleDisplay,
  handleClear
}) => {
  return (
    <Container color={color} flex={flex} onPress={() => handleDisplay(character, type)}>
      <ButtonText>{character}</ButtonText>
    </Container>
  );
};

export default Button;
