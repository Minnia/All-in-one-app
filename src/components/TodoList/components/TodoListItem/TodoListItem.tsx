import React, {FunctionComponent, useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';

interface TodoListItemProps {
  todo: {
    text: string;
    complete: boolean;
  };
}

const TodoListItem: FunctionComponent<TodoListItemProps> = ({todo}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CheckBox
          onClick={() => setSelection(!isSelected)}
          isChecked={isSelected}
        />
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16}}>{todo.text}</Text>
        </View>
      </View>
    </>
  );
};

export default TodoListItem;
