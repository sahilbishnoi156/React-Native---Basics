/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Atif aslam',
      status: 'Singer of the history',
      imageUrl:
        'https://imgs.search.brave.com/IT2yWKwTOg0m4MCR8n4OKKqw7VO3TwAJoffeyTpmU10/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZm90b3IuY29t/L2FwcC9mZWF0dXJl/cy9pbWcvY29tcGFy/ZV9uZXcvZnRfYmdf/Q29tcGFyZWQxLmpw/Zw',
    },
    {
      uid: 2,
      name: 'Selena',
      status: 'Fudu singer hai ye',
      imageUrl:
        'https://images.unsplash.com/photo-1709651483125-dfa559cd920d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    },
    {
      uid: 3,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl:
        'https://imgs.search.brave.com/jLU239DhVrbDeT7KJzj0jCbBv_Lw5MtwNwkTVTkLN5g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wcm90/b3R5cHJpby5ndW1s/ZXQuaW8vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMTIvMWM3/M2ZjNmEtZGVjYy00/MTYwLTk1NzAtMjlj/NzFhZmVlNDQ4LTc2/OHg1MDguanBlZz93/PTM4NDAmcT03NSZm/b3JtYXQ9YXV0byZj/b21wcmVzcz10cnVl/JmRwcj0y',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map((contact, index: number) => {
          return (
            <View key={index} style={styles.contactBody}>
              <Image
                source={{uri: contact?.imageUrl}}
                style={styles.contactImage}
              />
              <View>
                <Text>{contact.name}</Text>
                <Text>{contact.status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 10,
    display: 'flex',
    gap: 10,
  },
  contactBody:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 10,
    backgroundColor: '#A8ACAE',
    borderRadius: 6,
    padding: 6,
  },
  contactImage: {
    height: 64,
    width: 64,
    borderRadius: 100,
  },
});
