import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Text, Alert, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../navigation/navigationConstants';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ref = firestore().collection('users');
  const login = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await ref.add({
        email: email,
      });

      navigation.navigate(screens.CAROUSEL);

      if (email === '' || password === '') {
        Alert.alert('Enter details to sign up!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All in one</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="black"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="black"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.login} onPress={login}>
        <Text style={styles.loginText}>Done!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00390c',
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
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
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

export default SignUpScreen;
