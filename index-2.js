function speedDetector(speed) {
    if(speed<=74){
        console.log('Ok');
    }

    if(speed>=75 && speed<80){
        console.log('1');
        
    }

    if(speed>=80 && speed<85){
        console.log('2');
        
    }

    if(speed>=85 && speed<90){
        console.log('3');
        
    }

    if(speed>=90 && speed<95){
        console.log('4');
        
    } 

    if(speed>=95 && speed<100){
        console.log('5');
        
    }

    if(speed>=100 && speed<105){
        console.log('6');
        
    }

    if(speed>=105 && speed<110){
        console.log('7');
        
    }

    if(speed>=110 && speed<115){
        console.log('8');
        
    }

    if(speed>=115 && speed<120){
        console.log('9');
        
    }

    if(speed>=120 && speed<125){
        console.log('10');
        
    }

    if(speed>=125 && speed<130){
        console.log('11');
        
    }

    if(speed>=130 && speed<=135){
        console.log('12');
        
    }

    if(speed>=136){
        console.log('License suspended');
        
    }

    return speed
  
}
let totalSpeed=(79)
speedDetector(totalSpeed)