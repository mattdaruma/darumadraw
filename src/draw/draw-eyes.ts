import { NodeCanvasRenderingContext2D } from "canvas";
import { DarumaColors } from "../color-calculator";
import { CANVASSIZE } from "../daruma-canvas";
const qpi = Math.PI / 4
const applyClose = (pole: number, closed: number)=>{
    return pole - pole*closed + 2*qpi*closed
}
const drawEyes = (colors: DarumaColors, context: NodeCanvasRenderingContext2D, tilt?: number, closed: number = 0) => {
    let leftStart = -qpi*2
    let leftStop = qpi*6
    let rightStart = -qpi*2
    let rightStop = qpi*6
    if(tilt !== undefined){
        leftStart = -qpi + (qpi*tilt)
        leftStop = 5*qpi + (qpi*tilt)
        rightStart = -qpi - (qpi*tilt)
        rightStop = 5*qpi - (qpi*tilt)
    }
    console.log('tiltclosed', tilt, closed)
    context.beginPath()
    context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, applyClose(leftStart, closed), applyClose(leftStop, closed))
    context.closePath()
    context.stroke()
    context.beginPath()
    context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, applyClose(rightStart, closed), applyClose(rightStop, closed))
    context.closePath()
    context.stroke()
    context.fillStyle = colors.outlineColor
    context.beginPath()
    context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.03, applyClose(leftStart, closed), applyClose(leftStop, closed))
    context.fill()
}

export { drawEyes }