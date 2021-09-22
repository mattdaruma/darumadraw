import { DarumaCanvas } from './daruma-canvas'
import { colorCalculate } from './color-calculator'
import { CANVASSIZE } from './canvas-size'
import { drawBlankDaruma } from './draw/draw-blank-daruma'
import { drawEyes } from './draw/draw-eyes'
import { talkingHappy } from './animate/talking-happy'
const GIFEncoder = require('gif-encoder-2')
class Daruma {
    darumaCanvas: DarumaCanvas
    mood: Moods = Moods.NEUTRAL
    constructor(){
        this.darumaCanvas = new DarumaCanvas()
    }
    setColor(color: string){
        this.darumaCanvas.colors = colorCalculate(color)
    }
    setMood(mood: Moods){
        this.mood = mood
    }
    private drawBlank(){
        drawBlankDaruma(this.darumaCanvas)
    }
    private drawHappySpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        this.darumaCanvas.drawEyesHappy()
    }
    private drawHappyBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSmile()
        this.darumaCanvas.drawEyesBlinkUp()
    }
    private drawHappyBlinkSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        this.darumaCanvas.drawEyesBlinkUp()
    }
    private drawSadPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthFrown()
        this.darumaCanvas.drawEyesSad()
    }
    private drawSadSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas, -1)
    }
    private drawSadBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthFrown()
        this.darumaCanvas.drawEyesBlinkDown()
    }
    private drawSadBlinkSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas, -1, 1)
    }
    private drawNeutralSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas)
    }
    private drawNeutralBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        drawEyes(this.darumaCanvas, undefined, 1)
    }
    private drawNeutralBlinkSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas, undefined, 1)
    }
    private drawAngryPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        drawEyes(this.darumaCanvas, 1)
    }
    private drawAngrySpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas, 1)
    }
    private drawAngryBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        drawEyes(this.darumaCanvas, undefined, 1)
    }
    private drawAngryBlinkSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas, undefined, 1)
    }
    private drawTiredPose(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        drawEyes(this.darumaCanvas, 0)
    }
    private drawTiredSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas, 0)
    }
    private drawTiredBlink(){
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        drawEyes(this.darumaCanvas, undefined, 1)
    }
    private drawTiredBlinkSpeak(){
        this.drawBlank()
        this.darumaCanvas.drawMouthSpeak()
        drawEyes(this.darumaCanvas, undefined, 1)
    }
    private getEncoder(){
        let encoder = new GIFEncoder(CANVASSIZE, CANVASSIZE)
        encoder.setTransparent(this.darumaCanvas.colors.backgroundColor)
        encoder.setDelay(500)
        return encoder
    }
    private animateSad(){
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
    private animateNeutral(){
        let encoder = this.getEncoder()
        encoder.setDelay(3000)
        encoder.start()
        this.drawBlank()
        this.darumaCanvas.drawMouthStraight()
        drawEyes(this.darumaCanvas)
        encoder.addFrame(this.darumaCanvas.context)
        this.drawNeutralBlink()
        encoder.setDelay(300)
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateAngry(){
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
    private animateTired(){
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
    private animateSadTalk(){
        let encoder = this.getEncoder()
        encoder.start()
        for(let ind = 0; ind < 3; ind++){
            this.drawSadPose()
            encoder.addFrame(this.darumaCanvas.context)
            this.drawSadSpeak()
            encoder.addFrame(this.darumaCanvas.context)
        }
        this.drawSadBlink()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawSadBlinkSpeak()
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateNeutralTalk(){
        let encoder = this.getEncoder()
        encoder.start()
        for(let ind = 0; ind < 3; ind++){
            this.drawBlank()
            this.darumaCanvas.drawMouthStraight()
            drawEyes(this.darumaCanvas)
            encoder.addFrame(this.darumaCanvas.context)
            this.drawNeutralSpeak()
            encoder.addFrame(this.darumaCanvas.context)
        }
        this.drawNeutralBlink()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawNeutralBlinkSpeak()
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateAngryTalk(){
        let encoder = this.getEncoder()
        encoder.start()
        for(let ind = 0; ind < 3; ind++){
            this.drawAngryPose()
            encoder.addFrame(this.darumaCanvas.context)
            this.drawAngrySpeak()
            encoder.addFrame(this.darumaCanvas.context)
        }
        this.drawAngryBlink()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawAngryBlinkSpeak()
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    private animateTiredTalk(){
        let encoder = this.getEncoder()
        encoder.start()
        for(let ind = 0; ind < 3; ind++){
            this.drawTiredPose()
            encoder.addFrame(this.darumaCanvas.context)
            this.drawTiredSpeak()
            encoder.addFrame(this.darumaCanvas.context)
        }
        this.drawTiredBlink()
        encoder.addFrame(this.darumaCanvas.context)
        this.drawTiredBlinkSpeak()
        encoder.addFrame(this.darumaCanvas.context)
        encoder.finish()
        return encoder.out.getData()
    }
    getPose(){
        switch(this.mood){
            case Moods.HAPPY:
                this.drawBlank()
                this.darumaCanvas.drawMouthSmile()
                this.darumaCanvas.drawEyesHappy()
                break
            case Moods.SAD:
                this.drawSadPose()
                break
            case Moods.NEUTRAL:
                drawBlankDaruma(this.darumaCanvas)
                drawEyes(this.darumaCanvas)
                this.darumaCanvas.drawMouth()
                break
            case Moods.ANGRY:
                this.drawAngryPose()
                break
            case Moods.TIRED:
                this.drawTiredPose()
                break
            default:
                this.drawBlank()
                this.darumaCanvas.drawMouthStraight()
                drawEyes(this.darumaCanvas)
                break
        }
        return this.darumaCanvas.canvas.toBuffer('image/png')
    }
    getEmote(){
        switch(this.mood){
            case Moods.HAPPY:
                let encoder = this.getEncoder()
                encoder.setDelay(3000)
                encoder.start()
                this.drawBlank()
                this.darumaCanvas.drawMouthSmile()
                this.darumaCanvas.drawEyesHappy()
                encoder.addFrame(this.darumaCanvas.context)
                this.drawHappyBlink()
                encoder.setDelay(300)
                encoder.addFrame(this.darumaCanvas.context)
                encoder.finish()
                return encoder.out.getData()
            case Moods.NEUTRAL: 
                return this.animateNeutral()
            case Moods.SAD:
                return this.animateSad()
            case Moods.ANGRY:
                return this.animateAngry()
            case Moods.TIRED:
                return this.animateTired()
            default: 
                return this.animateNeutral()
        }
    }
    getSpeech(){
        switch(this.mood){
            case Moods.HAPPY:
                return talkingHappy(this.getEncoder(), this.darumaCanvas)
            case Moods.NEUTRAL: 
                return this.animateNeutralTalk()
            case Moods.SAD:
                return this.animateSadTalk()
            case Moods.ANGRY:
                return this.animateAngryTalk()
            case Moods.TIRED:
                return this.animateTiredTalk()
            default: 
                return this.animateNeutralTalk()
        }}
}

enum Moods {
    NEUTRAL,
    HAPPY,
    SAD,
    ANGRY,
    TIRED
}

export { Daruma, Moods }
