"""
Created by: Dat Nguyen
Created on: Feb 2026
This program uses an SR latch to control an LED.
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)
pin16.write_digital(0)

while True:
    if button_a.is_pressed():
        display.show(Image.YES)
        pin16.write_digital(1)
    elif button_b.is_pressed():
        display.show(Image.NO)
        pin16.write_digital(0)
