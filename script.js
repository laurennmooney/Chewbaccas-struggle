"use strict";

// class to build/create each person entering to be a friend
class PotentialFriend {
    constructor(name, flyingSkill, dejarikSkill, fearGalaxy) {
        this.name = name;
        this.flyingSkill = flyingSkill;
        this.dejarikSkill = dejarikSkill;
        this.fearGalaxy = fearGalaxy;
        this.rank = (flyingSkill + dejarikSkill) - fearGalaxy;
    }
}

// empty array where each person (or object) will be placed.
const listOfPotentialFriends = [];

// this will prompt the users to enter all relative information
function askUser() {
    let userName = prompt("Please enter your name.");
    let flyingSkill = Number(prompt("How skilled of a flier are you? Please enter a number 1 (no skill) through 10 (very skilled)."));
    let dejarikSkill = Number(prompt("What is your Dejarik skill? Please enter a number 1 (no skill) through 10 (very skilled)."));
    let fearGalaxy = Number(prompt("How afraid of the Galactic Empire are you? Please enter a number 1 (no fear) through 10 (a lot of fear)"));
    // Number() changes the data type of the prompt response from string to number so that the this.rank equation can be executed.

    // creates an instance of class PotentialFriend with the information the user entered in the correct parameter slots.
    let maybeFriend = new PotentialFriend(userName, flyingSkill, dejarikSkill, fearGalaxy);
    // pushes the new instance into the array listOfPotentialFriends
    listOfPotentialFriends.push(maybeFriend);
    

    // array.sort sorts the elements of an array. a and b are parameters. typically, this will sort in ascending order. to change this to descending, we simply reversed the order of a and b for the return function.
    listOfPotentialFriends.sort((a,b) => {
        return b.rank - a.rank;
    });
}


// prompts the player to enter the number of users who will be entering their information. this was placed outside of the loop so they are only prompted once
let numberOfUsers = Number(prompt("How many people are entering?"));
// the while loop will run the askUser() function declared above until the length of the listOfPotentialUsers array's length matches the number of users who were supposed to enter their information, then the loop is broken.
while (true) {
    askUser();

    if (listOfPotentialFriends.length === numberOfUsers) {
        break;
    }
}

// logs the full list of users entered.
console.log(listOfPotentialFriends);
// logs the top ranked.
console.log("Top choice: ",listOfPotentialFriends[0]);
// logs the worst ranked.
let length = listOfPotentialFriends.length
console.log("Worst choice: ",listOfPotentialFriends[length-1]);




