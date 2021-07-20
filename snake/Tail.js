import React, { PureComponent } from 'react'
import {View, StyleSheet, Text} from 'react-native'

class Tail extends PureComponent{
    render(){

        let tail = this.props.elements.map((el, index)=>{
            return <View key={index} style={{
                height: 10,
                width: 10,
                borderRadius: 0,
                backgroundColor: "green",
                left: el[0], 
                top: el[1],
                position: "absolute"
              }} />
        })

       return(
           <View>
               {tail}
           </View>
        );
    }
}

export {Tail}