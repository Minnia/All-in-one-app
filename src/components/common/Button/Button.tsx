import React, {FunctionComponent} from 'react';
import {Button} from 'react-native';

type OwnProps = {
  title: string;
  onPress?: () => void;
};
type Props = OwnProps;

export const CommonButton: FunctionComponent<Props> = ({onPress, title}) => {
  return <Button title={title} onPress={onPress} />;
};

export default CommonButton;
