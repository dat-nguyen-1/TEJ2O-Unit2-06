/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Feb 2026
 * This program uses an SR latch to control an LED.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

pins.digitalWritePin(DigitalPin.P16, 0)

input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
