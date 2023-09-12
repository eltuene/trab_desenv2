import { View, Text, Button, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import styles from "./styles"

function UserDetails({ route }) {
  const { user } = route.params;
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <LinearGradient
        colors={["#444444", "#252525"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.detailsContainer}
      >
        <Image src={user.image} style={{width: 130, height: 130}}/>
        <Text>Name</Text>
        <Text>{user.name}</Text>
        <Text>Email</Text>
        <Text>{user.email}</Text>
        <Text>CPF</Text>
        <Text>{user.cpf}</Text>
        <Text>DOB</Text>
        <Text>{user.birth_date}</Text>
        <Text>Gender</Text>
        <Text>{user.name}</Text>
        <Text>City</Text>
        <Text>{user.city}</Text>
        <Text>Salary</Text>
        <Text>{user.salary}</Text>
      </LinearGradient>
      <Button title='Return' onPress={() => navigation.navigate("Home")} />
    </LinearGradient>
  )
}

export default UserDetails
