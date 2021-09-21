import { DarumaCanvas, CANVASSIZE } from './daruma-canvas'
import { colorCalculate } from './color-calculator'
const GIFEncoder = require('gif-encoder-2')
class Daruma {
    darumaCanvas: DarumaCanvas
    mood: Moods = Moods.NEUTRAL
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
    private drawHappyPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSmile()
        this.darumaCanvas.drawEyesHappy()
    }
    private drawHappyBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSmile()
        this.darumaCanvas.drawEyesBlinkUp()
    }
    private drawSadPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthFrown()
        this.darumaCanvas.drawEyesSad()
    }
    private drawSadBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthFrown()
        this.darumaCanvas.drawEyesBlinkDown()
    }
    private drawNeutralPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        this.darumaCanvas.drawEyesOpen()
    }
    private drawNeutralBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        this.darumaCanvas.drawEyesBlink()
    }
    private drawAngryPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        this.darumaCanvas.drawEyesAngry()
    }
    private drawAngryBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        this.darumaCanvas.drawEyesBlink()
    }
    private drawTiredPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        this.darumaCanvas.drawEyesTired()
    }
    private drawTiredBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        this.darumaCanvas.drawEyesBlink()
    }
    private getEncoder(){
        let encoder = new GIFEncoder(CANVASSIZE, CANVASSIZE)
        encoder.setTransparent(this.darumaCanvas.colors.backgroundColor)
        encoder.setDelay(500)
        return encoder
    }
    private animateBlinkHappy(){
        let encoder = this.getEncoder()
        encoder.setDelay(3000)
        encoder.start()
        this.drawHappyPose()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawHappyBlink()
        encoder.setDelay(300)
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateBlinkSad(){
        let encoder = this.getEncoder()
        encoder.setDelay(3000)
        encoder.start()
        this.drawSadPose()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawSadBlink()
        encoder.setDelay(300)
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateBlinkNeutral(){
        let encoder = this.getEncoder()
        encoder.setDelay(3000)
        encoder.start()
        this.drawNeutralPose()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawNeutralBlink()
        encoder.setDelay(300)
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateBlinkAngry(){
        let encoder = this.getEncoder()
        encoder.setDelay(3000)
        encoder.start()
        this.drawAngryPose()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawAngryBlink()
        encoder.setDelay(300)
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateBlinkTired(){
        let encoder = this.getEncoder()
        encoder.setDelay(3000)
        encoder.start()
        this.drawTiredPose()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawTiredBlink()
        encoder.setDelay(300)
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    getPose(){
        switch(this.mood){
            case Moods.HAPPY:
                this.drawHappyPose()
                break
            case Moods.SAD:
                this.drawSadPose()
                break
            case Moods.NEUTRAL:
                this.drawNeutralPose()
                break
            case Moods.ANGRY:
                this.drawAngryPose()
                break
            case Moods.TIRED:
                this.drawTiredPose()
                break
            default:
                this.drawNeutralPose()
                break
        }
        return this.darumaCanvas.canvas.toBuffer('image/png')
    }
    getEmote(){
        switch(this.mood){
            case Moods.HAPPY:
                return this.animateBlinkHappy()
            case Moods.NEUTRAL: 
                return this.animateBlinkNeutral()
            case Moods.SAD:
                return this.animateBlinkSad()
            case Moods.ANGRY:
                return this.animateBlinkAngry()
            case Moods.TIRED:
                return this.animateBlinkTired()
            default: 
                return this.animateBlinkNeutral()
        }
    }
    getSpeech(){}
}

enum Moods {
    NEUTRAL,
    HAPPY,
    SAD,
    ANGRY,
    TIRED
}

export { Daruma, Moods }
