import React, { useState } from 'react';

import { Container, ButtonText } from './styles';

const Button = ({
  type,
  color, 
  flex, 
  character,
  display,
  setDisplay,
  setOperationValues,
  operationValues,
  handleDisplay,
}) => {
  // const handleDisplay = () => {
  //   if (type == 'digit') {
  //     setDisplay(oldValue => {
  //       if (oldValue === '0') {
  //         return character;
  //       } else {
  //         return `${oldValue}${character}`
  //       }
  //     })
  //   }
  //   else if (type == 'clear') {
  //     setDisplay('0');
  //     //setOperationValues([]);
  //   }
  //   else if (type == 'denial') {
  //     setDisplay(oldValue => {
  //       if(Number(oldValue) > 0) {
  //         return `-${oldValue}`
  //       }
  //       else if(Number(oldValue) < 0) {
  //         return oldValue.replace('-', '');
  //       }
  //       else {
  //         return '0';
  //       }
  //     })
  //   }
  //   else if (type == 'operator') {
  //     setOperationValues([display, character]);
  //   }
  // }



  return (
    <Container color={color} flex={flex} onPress={() => handleDisplay(character, type)}>
      <ButtonText>{character}</ButtonText>
    </Container>
  );
};

export default Button;
