import React, { PureComponent } from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'

class Border extends PureComponent{
    render(){

        const h = this.props.height;
        const w = this.props.width;
        const flag = this.props.gameOver;
        const score = this.props.score;

        return(
            <View>
                <View style={styles.top} />
                <View style={{flexDirection: "row"}}>
                    <View style={[styles.left,{height:h-13}]} />
                    <View style={[styles.right,{left: w-20}]} />
                </View>

                <View style={styles.bottom} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top:{
        backgroundColor: "brown",
        height: 10,
    },
    left:{
        backgroundColor: "brown",
        width:10,
    },
    right:{
        backgroundColor: "brown",
        width:10,
    },
    bottom:{
        backgroundColor: "brown",
        height: 10,
    },
    score:{
        color:"black",
        fontSize: 20,
    },
})

export {Border}