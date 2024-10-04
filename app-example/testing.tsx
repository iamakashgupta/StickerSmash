import {Text, View, StyleSheet } from 'react-native';

export default function TestingScreen(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Welcome to the testing page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
    },
  });
