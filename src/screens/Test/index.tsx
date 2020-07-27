import React, { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';

const Test = () => {
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (  
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', flexDirection: 'row', backgroundColor: '#010101' }}>
        <TouchableOpacity style={{ marginRight: 20, }} onPress={handleNavigateBack}>
           <Image source={require('../../images/back.png')}/>
          </TouchableOpacity> 
        <TouchableOpacity style={{ width: 200, height: 300, backgroundColor: '#B4A5DD' }} onPress={onOpen}>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>Open the modal</Text>
        </TouchableOpacity>

        <Modalize ref={modalizeRef} snapPoint={180}>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', height: 150,  flex: 1,}}>
                <TouchableOpacity style={{ marginTop: 20, width: 150, borderRadius: 50, height: 100, backgroundColor: '#29ae19', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>EDITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, width: 150, borderRadius: 50, height: 100, backgroundColor: '#FF0000', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>EXCLUIR</Text>
                </TouchableOpacity>
            </View>
            
        </Modalize>
    </View>
  );
};

export default Test