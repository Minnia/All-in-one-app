import styled from 'styled-components';
import {Button} from 'react-native';

export const StyledButton = styled<{backgroundColor: string}>(Button)`
  color: white;
  background-color: ${props => props.backgroundColor};
`;
