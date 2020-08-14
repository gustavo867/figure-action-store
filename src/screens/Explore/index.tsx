import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getProducts, getCategories } from '../../utils';
import { RectButton } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

interface Props {
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

const Explore: React.FC = () => {
  const [heightValue, setHeightValue] = useState(new Animated.Value(0));
  const [widthValue, setWidthValue] = useState(new Animated.Value(200));

  const [selectedCategory, setSelectedCategory] = useState('All');

  // const [isAddToCart] = useState(true);

  const products = getProducts();
  const categories = getCategories();

  const route = useRoute();

  const routeParams = route.params

  let isAddToCart = routeParams

  const navigation = useNavigation();

  const changeCategory = (category: string) => {
    setSelectedCategory(category);
  }

  function onProductClicked(product: Props) {
    navigation.navigate('Product', { product })
  }
  
  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateCart() {
    navigation.navigate('Test')
  }

  useEffect(() => {
    Animated.parallel([
      Animated.timing(
        widthValue,
        {
          toValue: width,
          duration: 100,
          useNativeDriver: false,
        },
      ),
      Animated.timing(
        heightValue,
        {
          toValue: height,
          duration: 100,
          useNativeDriver: false,
        }
      )    
    ]).start()
  },[])

  const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 20,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
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
      borderRadius: 18,
      alignContent: 'center',
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
       zIndex: 2, 
       marginTop: -90,
       flexDirection: 'row', 
       resizeMode: 'contain',
    },
    exploreText: {
      fontSize: 30, 
      lineHeight: 28, 
      fontWeight: 'bold',
      color: '#FFFFFF', 
      marginTop: 60, 
      marginLeft: 30,
    },
    productsContainer: {
       backgroundColor: '#2E2F33', 
       marginTop: 60, 
       borderTopRightRadius: 40, 
       borderTopLeftRadius: 40, 
    },
  })

  const ProductItem = (product: Props) => {
    return (     
        <RectButton 
          onPress={() => onProductClicked(product)} 
          activeOpacity={0.7} 
          key={product.id} 
          style={[styles.productContainer, { marginLeft: product.id == '2' ? 39 : 36, marginTop: 150}]}
        >
          <Image style={styles.image} source={product.image}/> 
          <Text style={styles.textProduct}>{product.title}</Text>
          <Text style={styles.subText}>{product.subtitle}</Text>
          <Text style={styles.priceText}>{product.price}</Text>
        </RectButton> 
    )
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#010101', }}>
        <View style={{ paddingTop: 20, marginTop: 30, marginLeft: 40, flexDirection: 'row', justifyContent: 'space-between' }}>

          <TouchableOpacity onPress={handleNavigateBack}>
           <Image source={require('../../images/back.png')}/>
          </TouchableOpacity> 

          <TouchableOpacity onPress={handleNavigateCart}>
            <MaterialCommunityIcons 
              style={{ marginRight: 50 }} 
              name={ isAddToCart ? 'cart' : 'cart-outline'} 
              size={20} 
              color={isAddToCart ? '#7159c1' : '#FFFFFF'} 
            />
          </TouchableOpacity>
         
        </View>  

        <Text style={styles.exploreText}>Explore</Text>
        <Text style={[ styles.exploreText, { marginTop: 0 } ]}>Figure Actions</Text>

        <Animated.View style={[styles.productsContainer, { width: widthValue, height: heightValue }]}>
        
          <View style={{ marginTop: 22, flexDirection: 'row', justifyContent: 'space-around' }}>
            {categories.map((category, index) => {
              return (
                <TouchableOpacity onPress={() => changeCategory(category)} key={index} style={[styles.button, {
                  backgroundColor: selectedCategory === category ? '#BF4A45' : '#2E2F33',
                }]}>
                  <Text style={[styles.textButton, {
                    fontWeight: selectedCategory === category ? '700' : '500',
                  }]}>{category}</Text>
                </TouchableOpacity>
              )
            })}
          </View>

          <ScrollView> 
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                alwaysBounceVertical={false}
                data={products.filter(product => {
                  return (                    
                    product.category.includes(selectedCategory) || selectedCategory === "All"                   
                    )
                  })}
                keyExtractor={(item)=> String(item.id)} 
                renderItem={({item}) => <ProductItem {...item}/>}
                horizontal={true}
              />
            </View>
          </ScrollView>
                 
          <View style={{ width: 11, flexDirection: 'row', marginTop: 116, marginLeft: 160, }}>
            <View style={{ width: 11, height: 11, backgroundColor: '#FFFFFF', borderRadius: 5, }}></View> 
            <View style={{ width: 9, height: 9, backgroundColor: '#FFFFFF', borderRadius: 4, marginLeft: 14, }}></View>  
            <View style={{ width: 9, height: 9, backgroundColor: '#FFFFFF', borderRadius: 4, marginLeft: 14, }}></View>  
            <View style={{ width: 9, height: 9, backgroundColor: '#FFFFFF', borderRadius: 4, marginLeft: 14, }}></View>  
          </View>
         
        </Animated.View>
    </SafeAreaView>
  );
}

export default Explore;
