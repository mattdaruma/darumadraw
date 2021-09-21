import { createCanvas, Canvas, NodeCanvasRenderingContext2D } from 'canvas'
import { DarumaColors } from './color-calculator'
const CANVASSIZE = 200
class DarumaCanvas {
    colors: DarumaColors
    canvas: Canvas
    context: NodeCanvasRenderingContext2D
    constructor(colors: DarumaColors){
        this.colors = colors
        this.canvas = createCanvas(CANVASSIZE, CANVASSIZE)
        this.context = this.canvas.getContext('2d')
    }
    clearCanvas(){
        this.context.clearRect(0, 0, CANVASSIZE, CANVASSIZE)
    }
    drawBody(){
        this.context.fillStyle = this.colors.bodyColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.5, CANVASSIZE*.3, 0, 2*Math.PI)
        this.context.fill()
    }
    drawFace(){
        this.context.fillStyle = this.colors.faceColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.5, CANVASSIZE*.25, Math.PI - .5, 2*Math.PI+.5)
        this.context.closePath()
        this.context.fill()
    }
    drawEyesOpen(){
        this.context.strokeStyle = this.colors.outlineColor
        this.context.lineWidth = 2
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, 0, 2*Math.PI)
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, 0, 2*Math.PI)
        this.context.stroke()
        this.context.fillStyle = this.colors.outlineColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.03, 0, 2*Math.PI)
        this.context.fill()
    }
    drawEyesHappy(){
        this.context.strokeStyle = this.colors.outlineColor
        this.context.lineWidth = 2
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, Math.PI, 2*Math.PI)
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, Math.PI, 2*Math.PI)
        this.context.stroke()
    }
    drawEyesSad(){

    }
    drawEyesAngry(){

    }
    drawEyesBlink(){

    }
    drawDots(){
        this.context.fillStyle = this.colors.accentColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.36, CANVASSIZE*.69, CANVASSIZE*.03, 0, 2*Math.PI)
        this.context.fill()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.69, CANVASSIZE*.03, 0, 2*Math.PI)
        this.context.fill()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.63, CANVASSIZE*.69, CANVASSIZE*.03, 0, 2*Math.PI)
        this.context.fill()
    }
    drawMouthSmile(){
        this.context.lineWidth = 2
        this.context.strokeStyle = this.colors.outlineColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.48, CANVASSIZE*.1, 0, Math.PI)
        this.context.stroke()
        this.context.strokeStyle = this.colors.faceColor
        this.context.lineWidth = 3
        this.context.beginPath()
        this.context.moveTo(CANVASSIZE*.3, CANVASSIZE*.48)
        this.context.lineTo(CANVASSIZE*.7, CANVASSIZE*.48)
        this.context.stroke()
    }
    drawMouthSpeak(){

    }
    drawMouthFrown(){

    }
    drawMouthStraight(){

    }
}
export { DarumaCanvas, CANVASSIZE }