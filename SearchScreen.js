import React from 'react';
import {Image, Text, View } from 'react-native';
export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Instagram</Text>
                <Image 
style={styles.imageIcon}
source={require('./ig.jpg')}
/>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    imageIcon:{
        width:150,
        height:150,
        marginLeft:85,
        marginTop:40
      },
    
    });
    