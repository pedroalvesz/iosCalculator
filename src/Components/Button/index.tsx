import React from "react";
import {
  TouchableOpacityButton,
  ButtonText,
} from './style'

interface ButtonColor {
  buttoncolor: 'gray' | 'dark-gray' | 'yellow'
  value: string;
}


export function Button({buttoncolor, value} : ButtonColor) {
  return (
    <TouchableOpacityButton buttoncolor={buttoncolor}>
      <ButtonText>{value}</ButtonText>
    </TouchableOpacityButton>
  )
}