import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>TanerCulha</Text>
        <View style={styles.menu}>
          <TouchableHighlight onPress={() => console.log('Menüye Tıkladınız...')} activeOpacity={0.9} underlayColor={'black'}>
            <Text style={styles.menuIcon}>
              <Image source={require('./assets/menu.png')} />
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableHighlight onPress={() => console.log('Buraya Tıkladınız...')}>
          <View style={styles.button}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                Buraya Tıklayınız...
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    height:'auto',
    alignItems:'center',
    justifyContent:'center', 
  },
  menuIcon:{
    alignItems:'center',
    justifyContent:'center',  
    flex:1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 70,
    borderColor: '',
    borderRadius: 40,
    backgroundColor: '#269',
  },
});