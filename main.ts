input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        . # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        # # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        # # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . .
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . . . .
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
})
basic.showLeds(`
    . . . . .
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    `)
basic.forever(function () {
    music.playMelody("C5 B A G - D A F ", 120)
    music.playMelody("C A C B F G C C5 ", 120)
    music.playMelody("A F B E C F G C5 ", 120)
})
