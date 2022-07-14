import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
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

const calculatedValue = 123123
//ToLocalestring formata o texto / numero recebido pra uma formatação predefinida, se for undefined () ele retorna o que achar melhor.
  return(
    <>
    <Container>
      <Display>
        <DisplayText>{calculatedValue.toLocaleString()}</DisplayText>
      </Display>
      <FirstLine>
        <Button value="AC" buttoncolor= 'gray'/>
        <Button value="+/-" buttoncolor= 'gray'/>
        <Button value="<-" buttoncolor= 'gray'/>
        <Button value="/" buttoncolor= 'yellow'/>
      </FirstLine>
      <SecondLine>
        <Button value="7" buttoncolor= 'dark-gray'/>
        <Button value="8" buttoncolor= 'dark-gray'/>
        <Button value="9" buttoncolor= 'dark-gray'/>
        <Button value="x" buttoncolor= 'yellow'/>
      </SecondLine>
      <ThirdLine>
        <Button value="4" buttoncolor= 'dark-gray'/>
        <Button value="5" buttoncolor= 'dark-gray'/>
        <Button value="6" buttoncolor= 'dark-gray'/>
        <Button value="-" buttoncolor= 'yellow'/>
      </ThirdLine>
      <FourthLine>
        <Button value="1" buttoncolor= 'dark-gray'/>
        <Button value="2" buttoncolor= 'dark-gray'/>
        <Button value="3" buttoncolor= 'dark-gray'/>
        <Button value="+" buttoncolor= 'yellow'/>
      </FourthLine>
      <FifthLine>
        <BiggerButton value="0" buttoncolor ='dark-gray'/>
        <Button value="." buttoncolor= 'dark-gray'/>
        <Button value="=" buttoncolor= 'yellow'/>
      </FifthLine>
    </Container>
    </>
  )
}
