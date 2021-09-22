import { NodeCanvasRenderingContext2D } from "canvas";
import { DarumaColors } from "../color-calculator";
import { CANVASSIZE } from "../daruma-canvas";

const drawMouth = (colors: DarumaColors, context: NodeCanvasRenderingContext2D, curve: number = 0, open: number = 0) => {
    context.fillStyle = colors.outlineColor
    let qpi = Math.PI/4
    if(curve === 0 || curve < -1 || curve > 1) curve = .1
    if(open < 0 || open > 1) open = 0
    let fullHeight = CANVASSIZE*.07
    let height = Math.abs(curve*fullHeight)
    let startR = 0
    let endR = 4*qpi
    let startRSpeak = 2*qpi - open*4*qpi 
    let endRSpeak = 2*qpi + open*4*qpi
    let speakHeight = open*fullHeight
    if(speakHeight > height) height = speakHeight
    if(curve < 0){
        endR = [startR, startR=endR][0]
        endRSpeak = [-startRSpeak, startRSpeak=-endRSpeak][0]
    }
    context.beginPath()
    context.ellipse(CANVASSIZE*.5, CANVASSIZE*.53, CANVASSIZE*.1, height, 0, startR, endR)
    context.stroke()
    context.beginPath()
    context.ellipse(CANVASSIZE*.5, CANVASSIZE*.53, CANVASSIZE*.1, height, 0, startRSpeak, endRSpeak)
    context.fill()
    context.stroke()
}

export { drawMouth }