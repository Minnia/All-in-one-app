import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All in one</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="white"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="white"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    height: 100,
    color: '#fb5b5a',
    fontSize: 40,
    fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  login: {
    width: 200,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});

export default LoginScreen;
