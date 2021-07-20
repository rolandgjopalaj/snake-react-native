//default direction
var x=1;
var y=0;
const GameLoop = (entities, {touches, dispatch, events}) =>{
    
    let head = entities["head"]
    let fruit = entities["fruit"]
    let tail = entities["tail"]
    let control = entities["control"]

    if(events.length)
        {
            for(let i=0; i<events.length;i++)
            {
                if(events[i].type=="up" && y!==1)
                {
                    x=0;
                    y=-1;
                }else if(events[i].type=="down" && y!==-1)
                {
                    x=0;
                    y=1;
                }else if(events[i].type=="right" )
                {
                    x=1;
                    y=0;
                }else if(events[i].type=="left" )
                {
                    x=-1;
                    y=0;
                }
            }
        }
     
        //GAME
        if(!control.gameOver)
        {
            if(head.position[0]===fruit.position[0] && head.position[1]===fruit.position[1])
            {
                tail.elements= [[fruit.position[0], fruit.position[1]]].concat(tail.elements)
                fruit.position= [
                    parseInt((Math.random()*33)+1)*10,
                    (parseInt((Math.random()*33)+1)*10)+50
                ]
                control.score += 1;
            }
            
            //slow down 
            head.update -=1;
            if(head.update===0)
            {
                //tail move
                tail.elements= [[head.position[0], head.position[1]]].concat(tail.elements).slice(0,-1)

                //head move
                head.position = [
                    head.position[0] + x*10,
                    head.position[1] + y*10
                ];
                
                head.update = 5
            }
        }

        //control
        if(head.position[0]>=(control.width-10) 
            || head.position[0]<=0
            || head.position[1]>=(control.height-10)
            || head.position[1]<=0)
        {
            control.gameOver=true
        }

    return entities
}

export default GameLoop