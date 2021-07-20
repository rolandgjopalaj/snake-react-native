import React, { PureComponent} from "react";
import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { GameEngine} from "react-native-game-engine";
import {Point} from "./snake/Point"
import {Tail} from "./snake/Tail"
import {Head} from "./snake/Head"
import {Border} from "./snake/Border"
import Control from "./snake/Control"
import GameLoop from "./snake/GameLoop"
import Footer from "./Footer"
import Header from "./Header"


export default class Snake extends PureComponent {
  constructor() {
    super();
    this.engine=null;
  }
 
  render() {
    const window = Dimensions.get("window")
    //snake game map dimensions without the control and header area
    const height = window.height-(window.height/3)
    const width = window.width

    return (
      <>
      <Header title="Snake Game" />
      <GameEngine
        ref={(ref)=>{this.engine = ref}}
        style={styles.container}
        systems={[GameLoop]}
        entities={{
          fruit : { position: [150,  200], renderer: <Point />},
          head : { position: [40,  200], update: 10, renderer: <Head />},
          tail : { elements: [], renderer: <Tail />},
          control : {score: 0, gameOver : false, height: height, width: width, renderer: <Border />},
        }}/>
 
      <StatusBar hidden={true} />

      <Control up={()=>{this.engine.dispatch({type: "up"})}} 
               down={()=>{this.engine.dispatch({type: "down"})}} 
               right={()=>{this.engine.dispatch({type: "right"})}} 
               left={()=>{this.engine.dispatch({type: "left"})}}/>

      <Footer title="back" to="/About"/>
      </>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
