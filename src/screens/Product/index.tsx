import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

interface Props {
    product: Object
    id: string;
    image: any;
    width: number;
    height: number;
    other_images: any[];
    title: string;
    subtitle: string;
    price: string;
    about: string;
}

const styles = StyleSheet.create({
  image: {
    marginTop: 0,
    marginLeft: 20,
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    marginTop: height  - height / 2,
    width: width,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: height * 3 ,
    zIndex: -2,
    backgroundColor: '#2E2F33',
  },
  button: {
     marginTop: height,  
     width: 115,
     height: 46, 
     borderWidth: 1,
     borderRadius: 36, 
     position: 'absolute', 
     zIndex: 1, 
     marginLeft: 250, 
     justifyContent: 'center',
     alignItems: 'center',
  },
  aboutText: {
    textAlign: 'left', 
    fontWeight: '300', 
    color: '#FFFFFF', 
    fontSize: 14, 
    lineHeight: 14, 
    marginTop: 12, 
    marginLeft: 29,
  },
})

const Product: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [isTouched, setIsTouched] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(true);

  const { product } = route.params

  function handleTouchedHeart() {
    setIsTouched((prevState) => !prevState)
  }

  function handleAddProductToCart() {
    setIsAddToCart((prevState) => !prevState)
  }

  function handleAddToCart() {
    handleAddProductToCart();
    showMessage({
      message: isAddToCart ? product.title + ' added to cart' : product.title + ' Removed from cart',
      type: isAddToCart ? 'success' : 'danger',
    });
  }

  function handleNavigateBack() {
    navigation.navigate('Explore')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#010101' }}>
       <FlashMessage style={{ alignItems: 'center', justifyContent: 'center' }} animationDuration={200} position='top' icon={isAddToCart ? 'danger' : 'success'}/>

      <View style={{ paddingTop: 20, marginTop: 30, flexDirection: 'row', marginLeft: 40, justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Image source={require('../../images/back.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTouchedHeart} style={{ marginRight: 50, }}>
         <AntDesign name={isTouched ? 'heart' : 'hearto'} size={20} color={isTouched ? '#DE7672' : '#FFF'} />
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: 'bold', fontSize: 24, lineHeight: 28, color: '#FFFFFF', marginTop: 40, marginLeft: 33, }}>{product.title}</Text>
      
      <View style={{ marginTop: 32, flexDirection: 'column', borderRadius: 10, marginLeft: 30,  }}>
        {product.other_images.map((item: any[], index: number) => {
            return (
              <TouchableOpacity activeOpacity={0.7} key={index} style={{ width: 70, height: 70, borderRadius: 25, backgroundColor: '#FFF', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 50, height: 50, }} source={item}/>
              </TouchableOpacity>
            )
          })}
      </View>

        <Image source={product.image} style={[styles.image, { 
          marginLeft: product.id === '3' ? -150 : -20, 
          marginTop: product.id === '3' ? 50 : 60,
          marginRight: 300,
          width: product.width - width / 3,
          height: product.height - height / 3,  
          }]}/>  

        <View style={styles.textContainer}>
          <Text style={{ fontWeight: '700', color: '#FFFFFF', fontSize: 18, lineHeight: 21, marginTop: height  / 7, marginLeft: 29, }}>About</Text>
          <Text style={{ fontWeight: '500', color: '#FFFFFF', fontSize: 14, lineHeight: 16, marginTop: 12, marginLeft: 29, }}>{product.subtitle}</Text>

          <View style={{ width: width / 2, height: height / 2, }}>
            <Text style={styles.aboutText}>{product.about}</Text>
            <Text style={styles.aboutText}>{product.especification}</Text>

            
            <Text style={{ 
              fontWeight: '700', 
              color: '#FFFFFF', 
              fontSize: 18, 
              lineHeight: 21, 
              marginTop: product.id === '3' ? height / 15 : height / 15, 
              marginLeft: width / 7, }}>{product.price}</Text>
          </View>
          
        </View>

        <TouchableOpacity 
        onPress={handleAddToCart}
        style={[styles.button, { borderColor: isAddToCart ? '#FFFFFF' : '#BF4A45' }]}
        >
          <Text style={{ color: isAddToCart ? '#FFFFFF' : '#FFFFFF', fontSize: isAddToCart ? 14 : 11, lineHeight: 15 }}>{isAddToCart ? 'Add to cart' : 'Remove from cart'}</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Product;