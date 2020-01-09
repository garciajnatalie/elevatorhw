Elevator is always on (motor running)
On each floor Up and Down button can be pressed outside the elevator except on the first floor there is only an up button and on the top floor there is only a down button

# of floors (8)
buttons inside the Elevator for every floor including door open, door close, and emergency button

doors open when elevator arrives at floor
doors close when elevator leaves floors
20 second delay until doors close - closes in 10 seconds if door close button is pressed

once a floor is selected, a signal goes to a computer/engine room that logs the floor - the buttons on the elevator car and floor are wired to the same computer, doors close and the lever/pulley start and move to the selected floor. elevator stops at the selected floor
multiple floors can be selected when in the elevator
if multiple floors are selected at floor 1 then go up until floor 8
if multiple floors are selected at floor 8 then go down until reach floor 1

when pressed the computer logs the floor and numbers light up inside the elevator, turn off when make it to the floor.

when pressed the computer logs the request outside the elevator and lights up and turns off the light when the elevator arrives. then the door opens.

//Elevator motor
var isOn = true;

//Elevator floors
var numfls = 8;
console.log(1, 2, 3, 4, 5, 6, 7, 8)

//Elevator doors
var isOpen = true;
var isClosed = false;

//Elevator lights
var 
