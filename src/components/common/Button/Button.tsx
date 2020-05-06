import React, {FunctionComponent} from 'react';
import {StyledButton} from './styled';
import layout from '../../../theme/layout';
import {View} from 'react-native';

type OwnProps = {
  title: string;
  onPress?: () => void;
  backgroundColor: string;
  largeButton?: boolean;
};
type Props = OwnProps;

export const CommonButton: FunctionComponent<Props> = ({
  onPress,
  title,
  backgroundColor,
  largeButton,
}) => {
  const buttonWidth = largeButton ? layout.width * 0.5 : layout.width * 0.35;
  const buttonHeight = layout.height * 0.05;
  return (
    <View
      style={{
        height: buttonHeight,
        width: buttonWidth,
        backgroundColor,
        borderRadius: 25,
        marginBottom: layout.height * 0.02,
      }}>
      <StyledButton
        title={title}
        color="white"
        onPress={onPress}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

export default CommonButton;
