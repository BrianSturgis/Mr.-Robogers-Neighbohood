# Week 3 solo project "Mr. Robogers Neighbohood" 

#### This application takes a number and returns a string in a range from the number to zero.  It replaces certain numbers with words upon return. 

### By Brian Sturgis   10/30/2020


## Description




This project requires this application to take a number from a user and return a range of numbers from 0 to the user inputted number with the following exceptions:

- Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
- Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
- Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
- These exceptions are written from least to most important. The first exception should apply unless - - the second exception does, and the same with the second and third. So, for example, in your finished - program,


## specifications

#### Test:  
recieve input from user as value then convert to string into two seperate variables
#### code:  
let userInput = $("#numbers").val();const originalInput = $("#numbers").val();
#### Expect:  
"userInput" and "originalInput" to equal inputed value as a string




#### Test:  
create a variable of the replacement words
#### code:   
const replacementWords = ["Won't you be my neighbor?", "Boop!", "Beep!"];
#### Expect:  
array named "replacementWords" = ["Won't you be my neighbor?", "Boop!", "Beep!"]

#### Test:  
create an array of the replacement numbers as a string of character
#### code:  
const numberCheck = ["3", "2", "1"];
#### Expect:   
array named "numberCheck" = ["3", "2", "1"]

#### Test: create an array
#### code:
#### Expect:

#### Test:
#### code:
#### Expect:




## Setup/Installation Requirements
- repository location https://github.com/BrianSturgis/Mr.-Robogers-Neighbohood
- open through a git termianl or clone editor.
- got to repo location.
- using git commands clone to local repo
- or click "download" and unpack on machine
- open the index.html file to view the website

## Known Bugs
- this application is in its very early stages so there are many known issues and in its current state has a very basic ui and very little done in css yet.


## Support and contact details
email Brian Sturgis @ <sturujisu@gmail.com>

## Technologies Used
- HTML
- CSS
- Windows PC
- Visual Studio Code
- Gitbash
- coffee


## License
*{Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..}*



Copyright (c) 2020 **Brian Micheal Sturgis**