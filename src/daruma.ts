import { DarumaCanvas, CANVASSIZE } from './daruma-canvas'
import { colorCalculate } from './color-calculator'
const GIFEncoder = require('gif-encoder-2')
class Daruma {
    darumaCanvas: DarumaCanvas
    mood: Moods = Moods.HAPPY
    constructor(color: string){
        this.darumaCanvas = new DarumaCanvas(colorCalculate(color))
    }
    setMood(mood: Moods){
        this.mood = mood
    }
    private drawBlank(){
        this.darumaCanvas.clearCanvas()
        this.darumaCanvas.drawBody()
        this.darumaCanvas.drawFace()
        this.darumaCanvas.drawDots()
    }
    getPose(){
        this.drawBlank()
        switch(this.mood){
            case Moods.HAPPY:
                this.darumaCanvas.drawMouthSmile()
                this.darumaCanvas.drawEyesOpen()
                break
            default:
                this.darumaCanvas.drawMouthSmile()
                this.darumaCanvas.drawEyesOpen()
                break
        }
        return this.darumaCanvas.canvas.toBuffer('image/png')
    }
    getEmote(){
        let encoder = new GIFEncoder(CANVASSIZE, CANVASSIZE)
        encoder.setDelay(3000)
        encoder.setTransparent(this.darumaCanvas.colors.backgroundColor)
        encoder.start()
        this.drawBlank()
        this.darumaCanvas.drawMouthSmile()
        this.darumaCanvas.drawEyesOpen()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawBlank()
        encoder.setDelay(300)
        this.darumaCanvas.drawMouthSmile()
        this.darumaCanvas.drawEyesHappy()
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    getSpeech(){}
}

enum Moods {
    HAPPY,
    SAD,
    ANGRY,
    SURPRISED,
    NEKO
}

export { Daruma, Moods }
