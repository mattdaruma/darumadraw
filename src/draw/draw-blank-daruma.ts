import { NodeCanvasRenderingContext2D } from "canvas";
import { CANVASSIZE } from "../canvas-size";
import { DarumaColors } from "../color-calculator";
import { DarumaCanvas } from "../daruma-canvas";
import { drawBody } from "./draw-body";
import { drawDots } from "./draw-dots";
import { drawFace } from "./draw-face";



const drawBlankDaruma = (canvas: DarumaCanvas) => {
    canvas.context.clearRect(0, 0, CANVASSIZE, CANVASSIZE)
    drawBody(canvas)
    drawFace(canvas)
    drawDots(canvas)
}

export { drawBlankDaruma }