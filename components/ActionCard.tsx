/* eslint-disable prettier/prettier */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.headingBanner}>
          What's new in javascript 21 - ES12
        </Text>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/sU6w5Uqa0tD_4B_oJWgG4V-JEP0KXirPr09AH-fREfU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZm90b3IuY29t/L2FwcC9mZWF0dXJl/cy9pbWcvc3RlcF9u/ZXcvcHJvZHVjdC9m/dF9iZ19zdGVwX3By/b2R1Y3QxLmpwZw',
          }}
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDescription} numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            temporibus nemo iure quidem quis. Ipsa iusto ab earum sit quo? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nesciunt
            magni a commodi officia enim sapiente dicta. Distinctio corrupti
            laboriosam fuga pariatur, minima quis officiis accusamus sequi. Hic,
            repellendus quas?
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={()=>openWebsite('https://sufferer.vercel.app')}>
              <Text style={styles.button}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 16,
    overflow: 'hidden',
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'black',
  },
  headingBanner: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
  },
  image: {
    height: 200,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 12,
  },
  cardDescription: {
    color: 'black',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  button: {
    color: 'white',
    backgroundColor: '#0596E2',
    padding: 6,
    borderRadius: 5,
  },
});
