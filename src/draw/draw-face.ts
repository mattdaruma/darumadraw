import { NodeCanvasRenderingContext2D } from "canvas";
import { DarumaColors } from "../color-calculator";
import { CANVASSIZE } from "../daruma-canvas";



const drawFace = (colors: DarumaColors, context: NodeCanvasRenderingContext2D) => {
    context.fillStyle = colors.faceColor
    context.beginPath()
    context.arc(CANVASSIZE*.5, CANVASSIZE*.5, CANVASSIZE*.25, Math.PI - .5, 2*Math.PI+.5)
    context.closePath()
    context.fill()
}

export { drawFace }