input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    start = 0
})
input.onButtonPressed(Button.B, function () {
    if (start == 0) {
        elapsed = 0
    } else {
        elapsed = input.runningTime() - start
    }
    basic.showNumber(Math.trunc(elapsed / 1000))
})
let elapsed = 0
let start = 0
start = 0
basic.forever(function () {
    while (start != 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(100)
    }
    basic.showNumber(start)
})
