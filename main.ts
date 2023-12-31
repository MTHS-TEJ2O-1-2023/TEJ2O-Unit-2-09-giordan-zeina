/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Oct 2023
 * This program plays rock, paper, scissors on a Micro:Bit
*/

// variables
let randomNumber: number = 0
let score: number = 0
randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)
  basic.clearScreen()

  // if randomNumber is 0
  if (randomNumber === 0) {
    basic.showIcon(IconNames.Scissors)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
  }

  // if randomNumber is 1
  if (randomNumber === 1) {
    basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
  }

  // if randomNumber is 2
  if (randomNumber === 2) {
    basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
  }
})

input.onButtonPressed(Button.A, function () {
  score = score + 1
  basic.showIcon(IconNames.Yes)
  basic.pause(3000)
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('Score is') 
  basic.showNumber(score)
  basic.pause(5000)
  basic.showIcon(IconNames.Happy)
})
