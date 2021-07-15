/** 
    Title  : FizzBuzz 
    Version: 01
    Author : Hiroyuki.Moriya
    Use    : https://makecode.microbit.org/#editor

 */
let count = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    count += 1
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    let Result = ""
    Result = FizzBuzz(count)
    basic.showString(Result)
    count = 0
})
function FizzBuzz(num: number): string {
    let txt = "" + num + ("" + " ")
    if (num % 15 == 0) {
        txt = "FizzBuzz"
    } else {
        if (num % 3 == 0) {
            txt = "Fizz"
        }
        
        if (num % 5 == 0) {
            txt = "Buzz"
        }
        
    }
    
    return txt
}

