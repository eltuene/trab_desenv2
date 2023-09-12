import { View, Text, Button } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'


function UserCard({ user }) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <Button title='Details' onPress={() => navigation.navigate("UserDetails", { user })} />
    </View>
  )
}

export default UserCard;