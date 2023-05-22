let start = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    basic.showNumber(Math.trunc(elapsed / 1000))
})
basic.forever(function () {
	
})
