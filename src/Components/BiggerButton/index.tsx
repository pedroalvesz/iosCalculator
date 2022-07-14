import React from "react";
import {
  TouchableOpacityButton,
  ButtonText,
} from './style'


interface ButtonProps {
  buttoncolor: 'gray' | 'dark-gray' | 'yellow'
  value: string;
}

export function BiggerButton({buttoncolor, value} : ButtonProps) {
  return (
    <TouchableOpacityButton buttoncolor={buttoncolor}>
      <ButtonText>{value}</ButtonText>
    </TouchableOpacityButton>
  )
}
