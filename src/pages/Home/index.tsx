import React, { useState } from "react";
import {
  Container,
  DisplayKeptNumber,
  KeptNumber,
  Display,
  DisplayText,
  FirstLine,
  SecondLine,
  ThirdLine,
  FourthLine,
  FifthLine,
} from './style'

import { Button } from "../../Components/Button";
import { BiggerButton } from "../../Components/BiggerButton";


export function Home() {

const [number, setNumber] = useState('0')
const [operation, setOperation] = useState(null)
const [secondNumber, setSecondNumber] = useState('')


function handleAddNumber (value: string) {
  if (number === '0') {
    setNumber(value)
  }else
  setNumber(number + value)
}

function handleSetOperation (operationtype : string) {
  setOperation(operationtype);
  setSecondNumber(number);
  setNumber('');
}

function handleClearNumber () {
  setNumber('0');
  setOperation(null)
  setSecondNumber('')

}

function handlePorcentage () {
  var resultPorcentage = Number(number) / 100
  setNumber(resultPorcentage.toString())
}

function handleResult () {
  if(operation === 'x') {
    let resultX = Number(number) * Number(secondNumber)
    setNumber(resultX.toString())
    setOperation(null)
    setSecondNumber('')
  }else if (operation === '/') {
    let resultDivider = Number(secondNumber) / Number(number)
    setNumber(resultDivider.toString())
    setOperation(null)
    setSecondNumber('')
  }

}

//Lógica result
//pega primeiro e segundo numb
// e faz uma lógica para cada possibilidade de sinal
//uma pra vezes, uma pra divisão...
//as principais que vou ter que alterar são as de mais e de menos (provavelmente alterar a ordem do primeiro e segundo number)
  return(
    <>
    <Container>
      <DisplayKeptNumber>
      <KeptNumber>{secondNumber}</KeptNumber>
      </DisplayKeptNumber>
      <Display>
        <DisplayText>{number}</DisplayText>
      </Display>
      <FirstLine>
        <Button onPress={handleClearNumber} value="AC" buttoncolor= 'gray'/>
        <Button value="+/-" buttoncolor= 'gray'/>
        <Button onPress={handlePorcentage} value="%" buttoncolor= 'gray'/>
        <Button onPress={() => handleSetOperation('/')} value="/" buttoncolor= 'yellow'/>
      </FirstLine>
      <SecondLine>
        <Button onPress={() => handleAddNumber('7')} value={7} buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber('8')} value={8} buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber('9')} value={9} buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleSetOperation('x')}value="x" buttoncolor= 'yellow'/>
      </SecondLine>
      <ThirdLine>
        <Button onPress={() => handleAddNumber('4')} value="4" buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber('5')} value="5" buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber('6')} value="6" buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleSetOperation('-')} value="-" buttoncolor= 'yellow'/>
      </ThirdLine>
      <FourthLine>
        <Button onPress={() => handleAddNumber('1')} value="1" buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber('2')} value="2" buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber('3')} value="3" buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleSetOperation('+')} value="+" buttoncolor= 'yellow'/>
      </FourthLine>
      <FifthLine>
        <BiggerButton onPress={() => handleAddNumber('0')} value="0" buttoncolor ='dark-gray'/>
        <Button onPress={() => handleAddNumber('')} value="." buttoncolor= 'dark-gray'/>
        <Button onPress={handleResult} value="=" buttoncolor= 'yellow'/>
      </FifthLine>
    </Container>
    </>
  )
}
