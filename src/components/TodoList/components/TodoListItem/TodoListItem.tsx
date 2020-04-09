import React, {FunctionComponent, useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';

interface TodoListItemProps {
  text: string;
  complete: boolean;
}

const TodoListItem: FunctionComponent<TodoListItemProps> = () => {
  const [value, setValue] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoListItemProps[]>([]);
  const [error, showError] = useState<boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim()) {
      setTodoList([...todoList, {text: value, complete: false}]);
      setValue('');
    } else {
      showError(true);
      setValue('');
    }
  };

  const removeItem = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const toggleComplete = (index: number): void => {
    const newTodoList = [...todoList];
    newTodoList[index].complete = !newTodoList[index].complete;
    setTodoList(newTodoList);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your todo here"
            value={value}
            onChangeText={e => {
              setValue(e), showError(false);
            }}
            style={styles.inputBox}
          />
          <Button title="Add task" color="blue" onPress={handleSubmit} />
        </View>
        {error && <Text style={styles.error}>Error: Input field is empty</Text>}
        <Text style={styles.subtitle}>Your tasks: </Text>
        {todoList.length === 0 && <Text>No todos available</Text>}
        {todoList.map((todo: TodoListItemProps, index: number) => (
          <View style={styles.listItem} key={`${index}_${todo.text}`}>
            <Text
              style={[
                styles.task,
                {
                  textDecorationLine: todo.complete ? 'line-through' : 'none',
                },
              ]}>
              {todo.text}
            </Text>
            <Button
              title={todo.complete ? 'Completed' : 'Complete'}
              onPress={() => toggleComplete(index)}
            />
            <Button
              title="X"
              color="crimson"
              onPress={() => removeItem(index)}
            />
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
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBox: {
    width: 200,
    borderBottomColor: 'blue',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 2,
    paddingLeft: 8,
    color: 'black',
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'blue',
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
