import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable,KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      {/* <TextInput
      placeholder="Email"
      style={styles.input} 
      autoFocus={true}
      autoCapitalize='none'
      keyboardType='email-address'
      autoComplete='email'
      />
      <TextInput
      placeholder="Password"
      secureTextEntry
      style={styles.input} /> */}

    <CustomInput
      placeholder='Email'
      autoFocus={true}
      autoCapitalize='none'
      keyboardType='email-address'
      autoComplete='email'
    />
    <CustomInput
      placeholder='Password'
      secureTextEntry
    />
    <CustomButton
      onPress={() => {
      console.log('Pressed');
      }}
    text="Sign in"
    />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  }

});
