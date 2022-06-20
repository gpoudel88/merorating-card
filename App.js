import React from 'react';

import axios from 'axios';

import { View, StyleSheet, FlatList } from 'react-native';

import Card from './components/card';

export default function App() {
  const [review, setReview] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://api.merorating.com/api/recentReview')
      .then((res) => setReview(res.data.latestReview))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={review} renderItem={({ item }) => <Card data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
