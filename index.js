function wakeDog(dogName= "Xerox", dogBreed= "Border Collie") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
};

function leashDog(dogName= "Boo Radley", dogBreed= "Pibble") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName= "Bunny", dogBreed= "Labrador") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
 }

function throwFrisbee(dogName= "Mary J. Blige", dogBreed= "Papillon") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
};

function walkHome(dogName= "Santa Paws", dogBreed= "Husky") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
};

function unleashDog(dogName= "Lauren", dogBreed="Golden Retriever") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
};

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const steps = []                                // Sets a constant set to empty array
    for (let a = 0; a < routine.length; a++) {      // Sets a counter to count iterations
        const b = routine[a]                        // Sets a constant equal to the current counter mark
        const step = b(dogName, dogBreed)           // Sets a constant equal to the current counter and passes parameters
        steps.push(step)                            // Pushes last constant to end of new array
    }
    return steps                                    // Returns new array with iterated elements
}