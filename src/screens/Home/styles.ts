import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 759,
    height: 759,
    marginTop: 129,
    marginLeft: -29,
    position: 'absolute',
    zIndex: -1,
  },
  text: {
    marginLeft: 43,
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    marginTop: 100, 
    textTransform: 'uppercase', 
    fontSize: 48,
    lineHeight: 55,
  },
  textAction: {
    marginTop: 0, 
    lineHeight: 55, 
    marginLeft: 40, 
    fontWeight: 'bold', 
    fontSize: 48, 
    color: '#FFFFFF', 
    textTransform: 'uppercase'
  },
  button: {
    marginLeft: 40,
    marginTop: 347,
    backgroundColor: '#BF4A45',
    width: 300,
    height: 65,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles