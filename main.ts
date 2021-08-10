if (input.soundLevel() == 0) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
} else if (input.soundLevel() < 51 && input.soundLevel() > 0) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
} else if (input.soundLevel() < 102 && input.soundLevel() > 51) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
} else if (input.soundLevel() < 153 && input.soundLevel() > 102) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
} else if (input.soundLevel() < 204 && input.soundLevel() > 153) {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
} else if (input.soundLevel() > 204) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
basic.forever(function () {
	
})
