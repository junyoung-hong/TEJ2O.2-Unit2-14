/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Apr 2026
 * This program shows while loops in action
*/

// variables
let sprite: game.LedSprite = null
let loopCounterX: number = 0
let loopCounterY: number = 0

// show happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    loopCounterX = 0
    loopCounterY = 0

    while (loopCounterX < 5) {
        sprite.set(LedSpriteProperty.X, loopCounterX)
        loopCounterX++
        basic.pause(500)
    }

    while (loopCounterY < 5) {
        sprite.set(LedSpriteProperty.Y, loopCounterY)
        loopCounterY++
        basic.pause(500)
    }

    if (loopCounterX == 5) {
        while (loopCounterX >= 0) {
            sprite.set(LedSpriteProperty.X, loopCounterX)
            loopCounterX--
            basic.pause(500)
        }
    }

    if (loopCounterY == 5) {
        while (loopCounterY >= 0) {
            sprite.set(LedSpriteProperty.Y, loopCounterY)
            loopCounterY--
            basic.pause(500)
        }
    }

    sprite.delete()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    loopCounterX = 0
    loopCounterY = 0

    while (loopCounterY < 5) {
        sprite.set(LedSpriteProperty.Y, loopCounterY)
        loopCounterY++
        basic.pause(500)
    }

    while (loopCounterX < 5) {
        sprite.set(LedSpriteProperty.X, loopCounterX)
        loopCounterX++
        basic.pause(500)
    }

    if (loopCounterY == 5) {
        while (loopCounterY >= 0) {
            sprite.set(LedSpriteProperty.Y, loopCounterY)
            loopCounterY--
            basic.pause(500)
        }
    }

    if (loopCounterX == 5) {
        while (loopCounterX >= 0) {
            sprite.set(LedSpriteProperty.X, loopCounterX)
            loopCounterX--
            basic.pause(500)
        }
    }

    sprite.delete()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})