function doReset () {
    pl1 = 0
    pl2 = 0
    pl3 = 0
    pl4 = 0
    doDrawLife(1)
    doDrawLife(2)
    doDrawLife(3)
    doDrawLife(4)
}
function doGraph (p: number, l: number) {
    if (l == 0) {
        graph_s = 4
    } else if (l == 1) {
        graph_s = 2
    } else if (l == 2) {
        graph_s = 0
    } else {
        graph_s = -1
    }
    for (let カウンター = 0; カウンター <= 4; カウンター++) {
        led.unplot(カウンター, p)
    }
    for (let カウンター = 0; カウンター <= graph_s; カウンター++) {
        led.plot(カウンター, p)
    }
}
function doDrawLife (p: number) {
    if (p == 1) {
        doGraph(0, pl1)
    } else if (p == 2) {
        doGraph(1, pl2)
    } else if (p == 3) {
        doGraph(3, pl3)
    } else if (p == 4) {
        doGraph(4, pl4)
    }
}
input.onButtonPressed(Button.B, function () {
    doReset()
})
let graph_s = 0
let pl4 = 0
let pl3 = 0
let pl2 = 0
let pl1 = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
doReset()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        pl4 += 1
        doDrawLife(4)
        basic.pause(500)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pl3 += 1
        doDrawLife(3)
        basic.pause(500)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        pl2 += 1
        doDrawLife(2)
        basic.pause(500)
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        pl1 += 1
        doDrawLife(1)
        basic.pause(500)
    }
    if (pl1 > 2 && (pl2 > 2 && (pl3 > 2 && pl4 > 2))) {
        basic.showString("You win!")
        doReset()
    }
})
