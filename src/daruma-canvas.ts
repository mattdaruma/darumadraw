import { createCanvas, Canvas, NodeCanvasRenderingContext2D } from 'canvas'
import { CANVASSIZE } from './canvas-size'
import { DarumaColors } from './color-calculator'
import { drawBody } from './draw/draw-body'
import { drawDots } from './draw/draw-dots'
import { drawEyes } from './draw/draw-eyes'
import { drawFace } from './draw/draw-face'
const STROKEWIDTH = 3
class DarumaCanvas {
    colors: DarumaColors = {
        faceColor: '#ddd',
        bodyColor: '#f00',
        backgroundColor: '#000',
        accentColor: '#0ff',
        outlineColor: '#222'
    }
    canvas: Canvas
    context: NodeCanvasRenderingContext2D
    constructor(){
        this.canvas = createCanvas(CANVASSIZE, CANVASSIZE)
        this.context = this.canvas.getContext('2d')
        this.context.lineWidth = STROKEWIDTH
        this.context.strokeStyle = this.colors.outlineColor
    }
    clearCanvas(){
        this.context.clearRect(0, 0, CANVASSIZE, CANVASSIZE)
    }
    drawBody(){
        drawBody(this.colors, this.context)
    }
    drawFace(){
        drawFace(this.colors, this.context)
    }
    drawEyes(tilt?: number, closed?: number){
        drawEyes(this.colors, this.context, tilt, closed)
    }
    drawEyesOpen(){
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
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, .75*Math.PI, .25*Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, .75*Math.PI, .25*Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.fillStyle = this.colors.outlineColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.03, .75*Math.PI, .25*Math.PI)
        this.context.fill()
    }
    drawEyesTired(){
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, 0 - .25*Math.PI, 1.25*Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, 0 - .25*Math.PI, 1.25*Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.fillStyle = this.colors.outlineColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.03, 0 - .25*Math.PI, 1.25*Math.PI)
        this.context.fill()
    }
    drawEyesSad(){
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, 0- .25*Math.PI, Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, 0, 1.25*Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.fillStyle = this.colors.outlineColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.03, 0- .25*Math.PI, Math.PI)
        this.context.fill()
    }
    drawEyesAngry(){
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, 0, 1.25*Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, 0 - .25*Math.PI, Math.PI)
        this.context.closePath()
        this.context.stroke()
        this.context.fillStyle = this.colors.outlineColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.03, 0, 1.25*Math.PI)
        this.context.fill()
    }
    drawEyesBlink(){
        this.context.beginPath()
        this.context.moveTo(CANVASSIZE*.35, CANVASSIZE*.4)
        this.context.lineTo(CANVASSIZE*.45, CANVASSIZE*.4)
        this.context.stroke()
        this.context.beginPath()
        this.context.moveTo(CANVASSIZE*.55, CANVASSIZE*.4)
        this.context.lineTo(CANVASSIZE*.65, CANVASSIZE*.4)
        this.context.stroke()
    }
    drawEyesBlinkUp(){
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, Math.PI, 2*Math.PI)
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, Math.PI, 2*Math.PI)
        this.context.stroke()
    }
    drawEyesBlinkDown(){
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.4, CANVASSIZE*.4, CANVASSIZE*.05, 0, Math.PI)
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.6, CANVASSIZE*.4, CANVASSIZE*.05, 0, Math.PI)
        this.context.stroke()
    }
    drawDots(){
        drawDots(this.colors, this.context)
    }
    drawMouthSmile(openness: number = 0){
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.5, CANVASSIZE*.1, 0, Math.PI)
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.5, CANVASSIZE*.1, .5*Math.PI*openness, Math.PI - .5*Math.PI*openness)
        this.context.stroke()
    }
    drawMouthFrown(openness: number = 0){
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.6, CANVASSIZE*.1, Math.PI, Math.PI*2)
        this.context.stroke()
    }
    drawMouthStraight(openness: number = 0){
        this.context.beginPath()
        this.context.moveTo(CANVASSIZE*.4, CANVASSIZE*.55)
        this.context.lineTo(CANVASSIZE*.6, CANVASSIZE*.55)
        this.context.stroke()
    }
    drawMouthSpeak(){
        this.context.fillStyle = this.colors.outlineColor
        this.context.beginPath()
        this.context.arc(CANVASSIZE*.5, CANVASSIZE*.55, CANVASSIZE*.05, 0, 2*Math.PI)
        this.context.stroke()
        this.context.fill()
    }
}
export { DarumaCanvas, CANVASSIZE }