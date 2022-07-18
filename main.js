// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let money = 550;
let choice;

choose();

function choose() {
    choice = input("Write action (buy, fill, take, remaining, exit):");
    if (choice == "buy") {
        buy();
    }
    else if(choice == "fill") {
        fill();
    }
    else if(choice = "take") {
        take()
    }
    else if(choice == "remaining") {
        remaining();
    }

}

function buy() {
    let variation = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:"));
    if (variation == 1) {
        water = water - 250;
        coffee = coffee - 16;
        money += 4;
        cups -= 1;
    }
    else if(variation == 2) {
        water = water - 350;
        milk = milk - 75;
        coffee = coffee - 20;
        money += 7;
        cups -= 1;
    }
    else if(variation == 3) {
        water = water - 200;
        milk = milk - 100;
        coffee = coffee - 12;
        money += 6;
        cups -=1;
    }
    if (water < 0) {
        console.log("Sorry, not enough water!");
    }
    else if (milk < 0) {
        console.log("Sorry, not enough milk!");
    }
    else if (coffee < 0) {
        console.log("Sorry, not enough coffee!");
    }
    else if (cups < 0) {
        console.log("Sorry, not enough cups!");
    }
    else {
        console.log("I have enough resources, making you a coffee!");
    }
}

function fill() {
    let add_w = Number(input("Write how many ml of water you want to add:"));
    let add_m = Number(input("Write how many ml of milk you want to add:"));
    let add_c = Number(input("Write how many grams of coffee beans you want to add:"));
    let add_cups = Number(input("Write how many grams of coffee beans you want to add:"));
    water += add_w;
    milk += add_m;
    coffee += add_c;
    cups += add_cups;
}

function take() {
    console.log("I gave you " + money);
    money = 0;
}

function remaining() {
    console.log("The coffee machine has:\n" + water +
        " ml of water\n" + milk +
        " ml of milk\n" + coffee +
        " g of coffee beans\n" + cups +
        " disposable cups\n" + money +
        "$ of money");
}
/*console.log("For " + num + " cups of coffee you will need:\n" + num*200 + " ml of water\n" + num * 50 + " ml of milk\n" + num*15 + "g of coffee beans");
let water = Number(input("Write how many ml of water the coffee machine has:\n"));
let milk = Number(input("Write how many ml of milk the coffee machine has:\n"));
let coffee = Number(input("Write how many grams of coffee beans the coffee machine has:\n"));
let cups = Number(input("Write how many cups of coffee you will need:\n"));
let nmilk = cups * 50;
let nwater= cups * 200;
let ncoffee = cups * 15;
*/
/*
if(nmilk < milk && nwater < water && ncoffee < coffee){
    if(milk - nmilk < 50 || water - nwater < 200 || coffee - ncoffee < 15) {
        console.log("Yes, I can make that amount of coffee");
    }
    else{
        let m = milk - nmilk;
        let w = water - nwater;
        let c = coffee - ncoffee;
        let cu = 0;
        while(m >= 50 && w >= 200 && c >=15){
            m = m - 50;
            w = w- 200;
            c = c - 15;
            cu++;
        }
        console.log("Yes, I can make that amount of coffee (and even " + cu +" more than that)");

    }
}
else{
    let cu = 0;
    while(milk >= 50 && water >= 200 && coffee >=15){
        milk -= 50;
        water -= 200;
        coffee -= 15;
        cu++;
    }
    console.log("No, I can make only " + cu +" cups of coffee");
 */