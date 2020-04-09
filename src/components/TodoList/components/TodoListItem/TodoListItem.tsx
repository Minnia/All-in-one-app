import React, {FunctionComponent, useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';

interface TodoListItemProps {
  todo: {
    text: string;
    complete: boolean;
  };
}

const TodoListItem: FunctionComponent<TodoListItemProps> = ({todo}) => {
  const [value, setValue] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoListItemProps[]>([]);
  const [error, showError] = useState<boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim()) {
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your todo here"
            value={value}
            onChange={e => {}}
            style={styles.inputBox}
          />
          <Button title="Add task" onPress={() => {}} />
        </View>
        {error && <Text style={styles.error}>Error: Input field is empty</Text>}
        <Text style={styles.subtitle}>Your tasks: </Text>
        {todoList.length === 0 && <Text>No todos available</Text>}
        {todoList.map((todo: TodoListItemProps, index: number) => (
          <View style={styles.listItem} key={`${index}_${todo.todo.text}`}>
            <Text
              style={[
                styles.task,
                {
                  textDecorationLine: todo.todo.complete
                    ? 'line-through'
                    : 'none',
                },
              ]}>
              {todo.todo.text}
            </Text>
            <Button
              title={todo.todo.complete ? 'Completed' : 'Complete'}
              onPress={() => {}}
            />
            <Button title="X" color="crimson" onPress={() => {}} />
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    width: 200,
    borderColor: 'purple',
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'purple',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  addButton: {
    alignItems: 'flex-end',
  },
  task: {
    width: 200,
  },
  error: {
    color: 'red',
  },
});

export default TodoListItem;
