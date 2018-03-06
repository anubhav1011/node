function greet(){


    console.log('Hi');


}

greet();


function logGreeting(fn){


    fn();
}


logGreeting(greet);