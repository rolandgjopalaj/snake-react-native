import React, { PureComponent } from 'react'
import {View, StyleSheet} from 'react-native'

class Head extends PureComponent{
    render(){

    const x = this.props.position[0];
    const y = this.props.position[1];
        return(
            <View  style={{
                height: 10,
                width: 10,
                borderRadius: 0,
                backgroundColor: "red",
                left: x, 
                top: y,
                position: "absolute"
              }}></View>
        )
    }
}

export {Head}