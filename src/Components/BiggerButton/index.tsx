import React from "react";
import {
  TouchableOpacityButton,
  ButtonText,
} from './style'


interface ButtonProps {
  buttoncolor: 'gray' | 'dark-gray' | 'yellow'
  value: string;
  onPress?: () => void;
}

export function BiggerButton({buttoncolor, value, onPress} : ButtonProps) {
  return (
    <TouchableOpacityButton onPress={onPress} buttoncolor={buttoncolor}>
      <ButtonText>{value}</ButtonText>
    </TouchableOpacityButton>
  )
}
