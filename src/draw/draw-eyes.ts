import { NodeCanvasRenderingContext2D } from "canvas";
import { DarumaColors } from "../color-calculator";
import { CANVASSIZE } from "../daruma-canvas";



const drawEyes = (colors: DarumaColors, context: NodeCanvasRenderingContext2D, tilt?: number, closed: number = 0) => {
    let qpi = Math.PI/4
    let leftStart = 0
    let leftStop = 2*Math.PI
    let rightStart = 0
    let rightStop = 2*Math.PI
    if(tilt !== undefined){
        console.log('tilt', tilt)
        leftStart = -qpi + (qpi*tilt)
        leftStop = 5*qpi + (qpi*tilt)
        rightStart = -qpi - (qpi*tilt)
        rightStop = 5*qpi - (qpi*tilt)
    }
    
    // tilt=1
    // context.beginPath()
    // context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, -qpi + (qpi*tilt), 5*qpi + qpi*tilt)
    // context.closePath()
    // context.stroke()
    // context.beginPath()
    // context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, -qpi - (qpi*tilt), 5*qpi - qpi*tilt)
    // context.closePath()
    // context.stroke()
    
    context.beginPath()
    context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, leftStart, leftStop)
    context.closePath()
    context.stroke()
    context.beginPath()
    context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, rightStart, rightStop)
    context.closePath()
    context.stroke()
    context.fillStyle = colors.outlineColor
    context.beginPath()
    context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.03, 0, 2*Math.PI)
    context.fill()
}

export { drawEyes }