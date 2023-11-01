/*
 * File: complex_code.js
 * Description: This file contains a complex JavaScript code that simulates a virtual pet game.
 * Author: John Doe
 * Date: March 1, 2022
 */

// VirtualPet class representing a virtual pet in the game
class VirtualPet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.age = 0;
    this.hunger = 50;
    this.energy = 50;
    this.happiness = 50;
    this.isSleeping = false;
  }

  feed() {
    if (!this.isSleeping) {
      this.hunger -= 10;
      this.happiness += 5;
    } else {
      console.log("Your pet is sleeping and cannot eat right now!");
    }
  }

  sleep() {
    if (!this.isSleeping) {
      this.isSleeping = true;
      this.energy += 20;
    } else {
      console.log("Your pet is already sleeping!");
    }
  }

  wakeUp() {
    if (this.isSleeping) {
      this.isSleeping = false;
      console.log(`${this.name} wakes up.`);
    } else {
      console.log("Your pet is already awake!");
    }
  }

  play() {
    if (!this.isSleeping) {
      this.happiness += 10;
      this.energy -= 5;
    } else {
      console.log("Your pet is sleeping and cannot play right now!");
    }
  }

  ageUp() {
    if (!this.isSleeping) {
      this.age++;
      this.hunger += 5;
      this.energy -= 5;
      this.happiness -= 5;

      if (this.age === 5) {
        console.log(`Your pet ${this.name} has grown up!`);
      }
    } else {
      console.log("Your pet is sleeping and cannot age up right now!");
    }
  }

  status() {
    console.log(`Name: ${this.name}`);
    console.log(`Species: ${this.species}`);
    console.log(`Age: ${this.age}`);
    console.log(`Hunger: ${this.hunger}`);
    console.log(`Energy: ${this.energy}`);
    console.log(`Happiness: ${this.happiness}`);
    console.log(`Sleeping: ${this.isSleeping ? 'Yes' : 'No'}`);
  }
}

// Create a virtual pet instance
const pet = new VirtualPet("Buddy", "Dog");

// Simulate game interaction
pet.feed(); // Pet gets fed
pet.sleep(); // Pet goes to sleep
pet.status(); // Print pet's status
pet.ageUp(); // Trying to age up (ignored because pet is sleeping)
pet.wakeUp(); // Pet wakes up
pet.status(); // Print pet's status
pet.ageUp(); // Pet ages up
pet.play(); // Pet plays
pet.status(); // Print pet's status

// ... More game interactions can be added here ...

// End of complex_code.js