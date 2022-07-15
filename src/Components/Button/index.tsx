import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  TouchableOpacityButton,
  ButtonText,
} from './style'

interface ButtonColor extends TouchableOpacityProps {
  buttoncolor: 'gray' | 'dark-gray' | 'yellow'
  value: number | string;
}


export function Button({buttoncolor, value} : ButtonColor) {
  return (
    <TouchableOpacityButton buttoncolor={buttoncolor}>
      <ButtonText>{value}</ButtonText>
    </TouchableOpacityButton>
  )
}