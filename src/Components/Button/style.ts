import styled, { css } from 'styled-components';


interface ButtonColor {
  buttoncolor: 'gray' | 'dark-gray' | 'yellow'
}

export const TouchableOpacityButton = styled.TouchableOpacity<ButtonColor>`
  width: 75px;
  height: 75px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;

  ${({buttoncolor}) => buttoncolor === 'gray' && css`
  background-color: #A5A5A5`};

  ${({buttoncolor}) => buttoncolor === 'dark-gray' && css`
    background-color: #333333`};

  ${({buttoncolor}) => buttoncolor === 'yellow' && css`
    background-color: #FE9E0B`};
`;
export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 30px;
`;