import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
} from 'react-native';

const BoxHeader=({data, setData})=>{
  const add=()=>{
    setData([...data,''])
  }
  return(
    <View styles={styles.boxHead}>
      <Button title="Ekle" onPress={add}/>
    </View>
  )
}

const Box =({id}) =>{
  return(
    <View style={styles.box}>
      <Text>List  {id + 1}</Text>
    </View>
  )
}

export default function App() {
  const[data, setData]=useState([''])
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
      <ScrollView>
      <View style={styles.content}>
        <TouchableHighlight onPress={() => console.log('Buraya Tıkladınız...')}>
          <View style={styles.button}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                Buraya Tıklayınız...
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.boxHead}>
        <BoxHeader {...{data, setData}}/>
        {data.map((d,i)=>(
          <Box id={i}/>
        ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    marginTop:10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 70,
    borderColor: 'red',
    borderRadius: 40,
    backgroundColor: '#269',
  },
  boxHead:{
    padding:20, 
    marginBottom:20,
    marginTop:20,
  },
  box:{
    backgroundColor:'#d9edf7', 
    padding:20, 
    marginBottom:10,
    marginTop:10,
  },
});