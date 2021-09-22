import { DarumaCanvas } from "../daruma-canvas"
import { drawBlankDaruma } from "../draw/draw-blank-daruma"
import { drawEyes } from "../draw/draw-eyes"
import { drawMouth } from "../draw/draw-mouth"

const talkingHappy = (encoder: any, canvas: DarumaCanvas)=>{
    encoder.setDelay(50)
    encoder.start()
    let goingUp = false
    for(let ind = 0; ind < 60; ind++){
        let fr = 10
        if(ind%fr == 0) goingUp = !goingUp
        let openness = goingUp ? ind%fr/fr : (fr-ind%fr)/fr
        drawBlankDaruma(canvas)
        drawMouth(canvas.colors, canvas.context, 1, openness)
        let closedness = ind < 40 ? 0 : ind <= 50 ? (ind-40)/10 : (60-ind)/10
        drawEyes(canvas, undefined, closedness)
        encoder.addFrame(canvas.context)
    }
    encoder.finish()
    return encoder.out.getData()
}

export { talkingHappy }