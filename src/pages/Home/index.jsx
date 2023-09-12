//HOME/index.jsx

import { View, Text, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient'
import UserCard from '../../components/UserCard';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');
      setUsers(response.data);
      setFilteredUsers(response.data);
      setLoading(false);
    }

    loadUsers();

  }, []);


  const handleFilterChange = filterText => {
    setFilter(filterText);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    setFilteredUsers(filtered);
  };

  if (loading) {
    return (
      <LinearGradient
        colors={["#111017", "#090320"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        <ActivityIndicator color="#121212" size={45} />
      </LinearGradient>
    )
  } else {
    return (
      <LinearGradient
        colors={["#111017", "#090320"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <TextInput
          style={styles.input}
          placeholder="Filtrar por nome"
          value={filter}
          onChangeText={handleFilterChange}
        />
        <Text>Your Employees</Text>
        <FlatList
          data={filteredUsers}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <UserCard user={item} />}
        />
      </LinearGradient>
    );
  }
}

export default Home;