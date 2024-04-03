//Create a function with a functioname that takes one parameter that is speed

function speedDetector(speed) {
    //Create a variable that contains the required sppedlimit 

    const speedLimit = 70;
    
    //Create a variable that contains the addition speed that may lead to a demeritpoints deduction

    const demeritPoint = 5;

    //Using the if and else if condition together with the tarnary operator and comparison operator state your condition for the code to run
    
    if (speed <= speedLimit) {
      console.log("Ok");
    
    } else if (speed > speedLimit && speed <= speedLimit + demeritPoint) {
      console.log("Points: 1");
      
    } else if (speed > speedLimit + demeritPoint && speed <= speedLimit + 2 * demeritPoint) {
      console.log("Points: 2");
      
    } else if (speed > speedLimit + 2 * demeritPoint && speed <= speedLimit + 3 * demeritPoint) {
      console.log("Points: 3");
      
    } else if (speed > speedLimit + 3 * demeritPoint && speed <= speedLimit + 4 * demeritPoint) {
      console.log("Points: 4");
      
    } else if (speed > speedLimit + 4 * demeritPoint && speed <= speedLimit + 5 * demeritPoint) {
      console.log("Points: 5");
      
    } else {
      console.log("License suspended");

    }
  }
  
  //Create variable that is going to have the input of the speed

  const speed = 70;

  //invoke/call
  
  speedDetector(speed);