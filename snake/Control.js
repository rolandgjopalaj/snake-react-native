import React from 'react'

import {View, 
    Button, 
    StyleSheet, 
    TouchableHighlight,
    Dimensions,
} from 'react-native'

const window = Dimensions.get("window")

const Control = (props) =>{
    return(
        <>
        <View style={styles.control}>
            <TouchableHighlight style={[styles.button, styles.up]}>
                <Button title="^" color="white" onPress={props.up}/>
            </TouchableHighlight>
            
            <View style={styles.row}>
            <TouchableHighlight style={[styles.button, styles.left]}>
                <Button title="<" color="white" onPress={props.left}/>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.button, styles.right]}>
                <Button title=">" color="white" onPress={props.right}/>
            </TouchableHighlight>
            </View>

            <TouchableHighlight style={[styles.button, styles.down]}>
                <Button title="\/" color="white" onPress={props.down}/>
            </TouchableHighlight>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    control:{
        backgroundColor:"grey",
        height: window.height/5.6
    },
    up:{
        top: window.height/84.4,
        left: window.width/2.6,
    },
    left:{
        top: window.height/84.4,
        left: window.width/7.9,
    },
    down:{
        top: window.height/84.4,
        left: window.width/2.6,
    },
    right:{
        top: window.height/84.4,
        left: window.width/2.6,
    },
    button:{
        backgroundColor:"black", 
        borderRadius:50,
        height: window.height/21,
        width: window.width/3.9,
    },
    row:{
        flexDirection: "row"
    }
})

export default Control