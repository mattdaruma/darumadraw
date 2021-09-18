const path = require('path')
const config = require(path.join(__dirname, 'config.js'))
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(config.canvasSize, config.canvasSize)
const ctx = canvas.getContext('2d')
const Color = require('color')

//ctx.font = '30px Impact'
//ctx.fillText('Haha!  Hoho!', 5, 25)
//var text = ctx.measureText('Haha!  Hoho!')
const colors = {
    bodyColor: null,
    faceColor: null,
    accentColor: null,
    outlineColor: null
}
const colorsCalculate = (color) => {
    let primaryColor = Color(color)
    colors.bodyColor = primaryColor
    colors.faceColor = primaryColor.luminosity() > .5 ? Color('#000') : Color('#FFF'),
    colors.accentColor = Color(`rgb(${255 - primaryColor.rgb().red()}, ${255 - primaryColor.rgb().green()}, ${255 - primaryColor.rgb().blue()})`),
    colors.outlineColor = primaryColor.luminosity > .5 ? Color('#FFF') : Color('#000')
}
const clearCanvas = () => {
    ctx.clearRect(0, config.canvasSize, config.canvasSize)
}
const drawBase = ()=> {
    // Face Background
    ctx.fillStyle = colors.faceColor.rgb().string()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.5, config.canvasSize*.5, config.canvasSize*.25, 0, 2*Math.PI)
    ctx.fill()
    ctx.clearRect(0, config.canvasSize*.6, config.canvasSize, config.canvasSize)
    // Body Background
    ctx.globalCompositeOperation = 'destination-over'
    ctx.fillStyle = colors.bodyColor.rgb().string()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.5, config.canvasSize*.5, config.canvasSize*.3, 0, 2*Math.PI)
    ctx.fill()
    ctx.globalCompositeOperation = 'source-over'
    // Dots
    ctx.fillStyle = colors.accentColor.rgb().string()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.36, config.canvasSize*.69, config.canvasSize*.03, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.5, config.canvasSize*.69, config.canvasSize*.03, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.63, config.canvasSize*.69, config.canvasSize*.03, 0, 2*Math.PI)
    ctx.fill()
    // Eye Outlines
    ctx.strokeStyle = colors.outlineColor.rgb().string()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.4, config.canvasSize*.4, config.canvasSize*.05, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.6, config.canvasSize*.4, config.canvasSize*.05, 0, 2*Math.PI)
    ctx.stroke()
    // Eye Fill
    ctx.fillStyle = colors.outlineColor.rgb().string()
    ctx.beginPath()
    ctx.arc(config.canvasSize*.4, config.canvasSize*.4, config.canvasSize*.04, 0, 2*Math.PI)
    ctx.fill()
}

const drawAngryEyebrows = () => {
    ctx.strokeStyle = colors.outlineColor.rgb().string()
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(config.canvasSize*.36, config.canvasSize*.3)
    ctx.lineTo(config.canvasSize*.45, config.canvasSize*.35)
    ctx.moveTo(config.canvasSize*.64, config.canvasSize*.3)
    ctx.lineTo(config.canvasSize*.55, config.canvasSize*.35)
    ctx.stroke()
}

const drawStraightMouth = () => {
    ctx.strokeStyle = colors.outlineColor.rgb().string()
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(config.canvasSize*.4, config.canvasSize*.55)
    ctx.lineTo(config.canvasSize*.6, config.canvasSize*.55)
    ctx.stroke()
}

const drawNekoMouth = () => {
    ctx.strokeStyle = colors.outlineColor.rgb().string()
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.arc(config.canvasSize*.45, config.canvasSize*.5, config.canvasSize*.05, 0, Math.PI)
    ctx.arc(config.canvasSize*.55, config.canvasSize*.5, config.canvasSize*.05, 0, Math.PI)
    ctx.stroke()
    ctx.strokeStyle = colors.faceColor.rgb().string()
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(config.canvasSize*.3, config.canvasSize*.5)
    ctx.lineTo(config.canvasSize*.7, config.canvasSize*.5)
    ctx.stroke()
}

const initCanvas = (color) => {
    clearCanvas()
    colorsCalculate(color)
    drawBase()
}
module.exports = {
    drawBase: (color) => {
        initCanvas(color)
        return canvas.toBuffer()
    },
    drawAngry: (color) => {
        initCanvas(color)
        drawAngryEyebrows()
        drawStraightMouth()
        return canvas.toBuffer()
    },
    drawNeko: (color) => {
        initCanvas(color)
        drawNekoMouth()
        return canvas.toBuffer()
    }
}