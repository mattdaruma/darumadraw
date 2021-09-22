import { NodeCanvasRenderingContext2D } from "canvas";
import { DarumaColors } from "../color-calculator";
import { CANVASSIZE } from "../daruma-canvas";



const drawBody = (colors: DarumaColors, context: NodeCanvasRenderingContext2D) => {
    context.fillStyle = colors.bodyColor
    context.beginPath()
    context.arc(CANVASSIZE*.5, CANVASSIZE*.5, CANVASSIZE*.3, 0, 2*Math.PI)
    context.fill()
}

export { drawBody }