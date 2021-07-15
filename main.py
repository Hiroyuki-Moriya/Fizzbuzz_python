"""
    Title  : FizzBuzz 
    Version: 01
    Author : Hiroyuki.Moriya
    Use    : https://makecode.microbit.org/#editor
"""
count = 0

def on_button_pressed_a():
    global count
    count += 1
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global count
    Result = ""
    Result = FizzBuzz(count)
    basic.show_string(Result)
    count = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def FizzBuzz(num: number):
    txt = str(num) + str(" ")
    if num % 15 == 0:
        txt = "FizzBuzz"
    else:
        if num % 3 == 0:
            txt = "Fizz"
        if num % 5 == 0:
            txt = "Buzz"
    return txt