function calculate(score){
    if(score>=79){
        console.log('A');
    }

    else if(score>=60 && score<79){
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

    return score
}

let mynumber=(100)
calculate(mynumber);