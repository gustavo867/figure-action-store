import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getProducts } from '../../utils';

const Explore: React.FC = () => {
  const products = getProducts();

  const styles = StyleSheet.create({
    button: {
      width: 71,
      height: 24,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.8
    },
    text: {
      fontWeight: '600',
      color: '#FFFFFF',
      fontSize: 14,
      lineHeight: 16,
    },
    textProduct: {
      color: '#2E2F33',
      fontSize: 14,
      lineHeight: 16,
      marginTop: 61,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    productContainer: {
      width: 138,
      height: 155,
      backgroundColor: '#FFFFFF',
      marginTop: 160,
      marginLeft: 57,
      borderRadius: 18,
      opacity: 1,
    },
    subText: {
      fontSize: 11,
      color: '#2E2F33',
      lineHeight: 11,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    priceText: {
      marginTop: 28,
      color: '#010101',
      fontSize: 16,
      lineHeight: 18,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    image: {
       width: 112, 
       height: 147, 
       position: 'absolute', 
       zIndex: -1, 
       marginTop: -90,
       flexDirection: 'row', 
    },
  })

  return (
    <View style={{ flex: 1, backgroundColor: '#010101' }}>
        <View style={{ marginTop: 100, marginLeft: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={require('../../images/back.png')}/>
          <Image style={{ marginRight: 50, }} source={require('../../images/cart.png')}/>
        </View>     
        <Text style={{ fontSize: 30, lineHeight: 28, fontWeight: 'bold' ,color: '#FFFFFF', marginTop: 60, marginLeft: 30, }}>Explore</Text>
        <Text style={{ fontSize: 30, lineHeight: 28, fontWeight: 'bold' ,color: '#FFFFFF', marginTop: 0, marginLeft: 30, }}>Figure Actions</Text>
        <View style={{ backgroundColor: '#2E2F33', marginTop: 60, flex: 1, borderTopRightRadius: 40, borderTopLeftRadius: 40, }}>
          <View style={{ marginTop: 22, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#BF4A45' }]}>
              <Text style={styles.text}>Games</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Animes</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Others</Text>  
            </TouchableOpacity>
          </View>
            {products.map((product) => {
              return (
                <TouchableOpacity activeOpacity={0.7} key={product.id} style={styles.productContainer}>
                  <Image style={styles.image} source={product.image}/> 
                  <Text style={styles.textProduct}>{product.title}</Text>
                  <Text style={styles.subText}>{product.subtitle}</Text>
                  <Text style={styles.priceText}>{product.price}</Text>
                </TouchableOpacity>
              )      
            })}
        </View>
    </View>
  );
}

export default Explore;