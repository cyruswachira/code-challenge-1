//create a function that has a function name and accepts one parameter score

function calculate(score){

    //Using an if and else if condition together with ternary operator and comparison operator to put in all your conditions

    if(score>79){
        console.log('A');
    }

    else if(score>=60 && score<=79){
        console.log('B');
    }

    else if(score>=49 && score<=59){
        console.log('C');
    }

    else if(score>=40 && score<49){
        console.log('D');
    }

    else{
        console.log('E');
    }

    //Return the score which is going to  be inputed and the output should be graded in letters 

    return score
}

//Create a variable containig the input score

let mynumber=(100)

//invoke the function
calculate(mynumber);