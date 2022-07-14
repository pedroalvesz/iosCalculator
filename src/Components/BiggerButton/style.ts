import styled, { css } from 'styled-components';


interface ButtonProps {
  buttoncolor: 'gray' | 'dark-gray' | 'yellow'
}

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 35px;
`;

export const TouchableOpacityButton = styled.TouchableOpacity<ButtonProps>`
  width: 155px;
  height: 75px;
  border-radius: 40px;
  padding-left: 30px;
  align-items: left;
  justify-content: center;
  margin-right: 5px;

  ${({buttoncolor}) => buttoncolor === 'gray' && css`
  background-color: #A5A5A5`};

  ${({buttoncolor}) => buttoncolor === 'dark-gray' && css`
    background-color: #333333`};

  ${({buttoncolor}) => buttoncolor === 'yellow' && css`
    background-color: #FE9E0B`};
`;