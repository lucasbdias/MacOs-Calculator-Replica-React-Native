import React, { useEffect, useState } from 'react';

import {
  Container,
  CalculatorContainer,
  TopBar, 
  Bullet,
  ResultContainer,
  ResultText,
  Wrapper,
  Row
} from './styles';

import color from '../../styles/colors';

import Button from "../../components/Button";

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operationValues, setOperationValues] = useState([]);
  const [clear, setClear] = useState('AC');
  const [resultFontSize, setResultFontSize] = useState(60);
  
  const handleDisplay = (character, action) => {
    if (action === 'digit') {
      setDisplay(oldValue => {
        if (oldValue !== 0) {
          setClear('C');
        } 

        if (operationValues.length === 2) {
          setDisplay(character);
          setOperationValues([...operationValues, character])
        }
        if (oldValue === '0') {
          return character;
        }
        if(operationValues[0] === display) {
          setDisplay(character);
          if (character !== ',') {
            setOperationValues([...operationValues, character])
          }
        }
        if (character === ',') {
          if (!oldValue.includes('.')) {
            return `${oldValue}.`;
          } else {
            return oldValue;
          }
        } else {
          return `${oldValue}${character}`;
        }
      })
    }
    else if (action === 'clear') {
      setDisplay('0');
      setOperationValues([]);
    }
    else if (action === 'denial') {
      setDisplay(oldValue => {
        if(Number(oldValue) > 0) {
          return `-${oldValue}`
        }
        else if (Number(oldValue) < 0) {
          return oldValue.replace('-', '');
        }
        else {
          return '0';
        }
      })
    }
    else if (action === 'operator') {
      if (operationValues.length === 0 || operationValues.length === 1) {
        setOperationValues([display, character]);
      }
            
      if (operationValues.length === 3) {
        let operation;
        switch (operationValues[1]) {
          case '+':
            operation = Number(operationValues[0]) + Number(operationValues[2]);
            setDisplay(String(operation));
            setOperationValues([String(operation), operationValues[1]]);
          break;
          case '-':
            operation = Number(operationValues[0]) - Number(operationValues[2]);
            setDisplay(String(operation));
            setOperationValues([String(operation), operationValues[1]]);
          break;
          case 'x':
            operation = Number(operationValues[0]) * Number(operationValues[2]);
            setDisplay(String(operation));
            setOperationValues([String(operation), operationValues[1]]);
          break;
          case '÷':
            if (Number(operationValues[2]) === 0) {
              setDisplay('Not a number');
            } else {
              operation = Number(operationValues[0]) / Number(operationValues[2]);
              setDisplay(String(operation));
              setOperationValues([String(operation), operationValues[1]]);
            }
          break;
          case '%':
            let operation = Number(operationValues[0]) / 100 * operationValues[2];
            setDisplay(String(operation));
            setOperationValues([String(operation), operationValues[1]]);
          break;
        }
      }
      if (character === '=' && operationValues.length === 3) {
        let operation;
        setClear('AC');
        switch (operationValues[1]) {
          case '+':
            operation = Number(operationValues[0]) + Number(operationValues[2]);
            setDisplay(String(operation));
            setOperationValues([String(operation)]);
          break;
          case '-':
            operation = Number(operationValues[0]) - Number(operationValues[2]);
            setDisplay(String(operation));
            setOperationValues([String(operation)]);
          break;
          case 'x':
            operation = Number(operationValues[0]) * Number(operationValues[2]);
            setDisplay(String(operation));
            setOperationValues([String(operation)]);
          break;
          case '÷':
            if (Number(operationValues[2]) === 0) {
              setDisplay('Not a number');
            } else {
              operation = Number(operationValues[0]) / Number(operationValues[2]);
              setDisplay(String(operation));
              setOperationValues([String(operation)]);
            }
          break;
          case '%':
            let operation = Number(operationValues[0]) / 100 * operationValues[2];
            setDisplay(String(operation));
            setOperationValues([String(operation)]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    if (display.length > 8) {
      setResultFontSize(oldFontSize => oldFontSize - (display.length - 8) * 5)
    } else {
      setResultFontSize(60);
    }
  }, [display]);

  return (
    <Container>
      <CalculatorContainer style={{
        elevation: 10,
      }}>
        <TopBar>
          <Bullet color={color.red} />
          <Bullet color={color.yellow} />
          <Bullet color={color.green} />
        </TopBar>
        <ResultContainer>
          <ResultText fontSize={resultFontSize} numberOfLines={1} ellipsizeMode='head'>{display}</ResultText>
        </ResultContainer>
        <Wrapper>
            <Row>
              <Button
                type={'clear'}
                color={color.dark_gray}
                flex={1}
                character={clear}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'denial'}
                color={color.dark_gray}
                flex={1}
                character={'+/-'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'operator'}
                color={color.dark_gray}
                flex={1}
                character={'%'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'operator'}
                color={color.orange}
                flex={1}
                character={'÷'}
                handleDisplay={handleDisplay}
                display={display}
                setOperationValues={setOperationValues}
                operationValues={operationValues}
              />
            </Row>
            <Row>
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'7'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'8'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'9'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'operator'}
                color={color.orange}
                flex={1}
                character={'x'}
                handleDisplay={handleDisplay}
                display={display}
              />
            </Row>
            <Row>
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'4'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'5'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'6'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'operator'}
                color={color.orange}
                flex={1}
                character={'-'}
                handleDisplay={handleDisplay}
                display={display}
              />
            </Row>
            <Row>
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'1'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'2'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={'3'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'operator'}
                color={color.orange}
                flex={1}
                character={'+'}
                handleDisplay={handleDisplay}
                display={display}
              />
            </Row>
            <Row>
              <Button
                type={'digit'}
                color={color.gray}
                flex={2.93}
                character={'0'}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'digit'}
                color={color.gray}
                flex={1}
                character={','}
                handleDisplay={handleDisplay}
              />
              <Button
                type={'operator'}
                color={color.orange}
                flex={1}
                character={'='}
                handleDisplay={handleDisplay}
                display={display}
              />
            </Row>
        </Wrapper>
      </CalculatorContainer>
    </Container>
  );
};

export default Calculator;
