import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';

const Home: React.FC = () => {
  const [ offset ] = useState(new Animated.ValueXY({ x: 0, y: 80 })); 
  const [ opacity ] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 2,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      })
    ]).start() 
  },[])

  const navigation = useNavigation();

  function handleNavigateToExplore() {
    navigation.navigate('Explore')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#010101' }}>
      <Animated.View style={{ 
        opacity: opacity,
        transform: [
          { translateY: offset.y }
        ]
      }}>
        <StatusBar style="light"/>
          <Text style={styles.text}>
          Figure 
          </Text>
          <Text style={styles.textAction}>
            Action
          </Text>
          <Text style={styles.textAction}>
            Store
          </Text>
          <Image style={styles.image} source={require('../../images/godofwar.png')}/>
          <TouchableOpacity onPress={handleNavigateToExplore} activeOpacity={0.7} style={styles.button}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', fontSize: 20, }}>Go Store</Text>
          </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default Home;