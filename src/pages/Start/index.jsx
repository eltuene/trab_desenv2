//HOME/index.jsx

import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'

function Start() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>
        Manage Your Employees.{"\n"}
        All in One Place
      </Text>
      <Button title='Get Started' onPress={() => navigation.navigate("Home")} />
    </LinearGradient>
  )
}

export default Start;