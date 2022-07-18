import React from "react";
import {
  TouchableOpacityButton,
  ButtonText,
} from './style'

interface ButtonColor {
  buttoncolor: 'gray' | 'dark-gray' | 'yellow'
  value: number | string;
  onPress?: () => void;
}


export function Button({buttoncolor, value, onPress} : ButtonColor) {
  return (
    <TouchableOpacityButton onPress={onPress} buttoncolor={buttoncolor}>
      <ButtonText buttoncolor={buttoncolor}>{value}</ButtonText>
    </TouchableOpacityButton>
  )
}