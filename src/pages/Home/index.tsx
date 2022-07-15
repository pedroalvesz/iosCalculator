import React, { useState } from "react";
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

const [number, setNumber] = useState(0)


function handleAddNumber (value: number) {
  setNumber(value);
}
  return(
    <>
    <Container>
      <Display>
        <DisplayText>{number}</DisplayText>
      </Display>
      <FirstLine>
        <Button value="AC" buttoncolor= 'gray'/>
        <Button value="+/-" buttoncolor= 'gray'/>
        <Button value="<-" buttoncolor= 'gray'/>
        <Button value="/" buttoncolor= 'yellow'/>
      </FirstLine>
      <SecondLine>
        <Button onPress={() => handleAddNumber(7)} value={7} buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber(8)} value={8} buttoncolor= 'dark-gray'/>
        <Button onPress={() => handleAddNumber(9)} value={9} buttoncolor= 'dark-gray'/>
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
