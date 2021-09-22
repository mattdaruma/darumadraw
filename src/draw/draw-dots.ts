import { NodeCanvasRenderingContext2D } from "canvas";
import { DarumaColors } from "../color-calculator";
import { CANVASSIZE } from "../daruma-canvas";



const drawDots = (colors: DarumaColors, context: NodeCanvasRenderingContext2D) => {
    context.fillStyle = colors.accentColor
    context.beginPath()
    context.arc(CANVASSIZE*.36, CANVASSIZE*.69, CANVASSIZE*.03, 0, 2*Math.PI)
    context.fill()
    context.beginPath()
    context.arc(CANVASSIZE*.5, CANVASSIZE*.69, CANVASSIZE*.03, 0, 2*Math.PI)
    context.fill()
    context.beginPath()
    context.arc(CANVASSIZE*.63, CANVASSIZE*.69, CANVASSIZE*.03, 0, 2*Math.PI)
    context.fill()
}

export { drawDots }