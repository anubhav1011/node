function greet(){
    console.log('Hi');
}

greet();


function logGreeting(fn){
    fn();
}


logGreeting(greet);

var greetMe = function(){
    console.log('Hi Anubhav');
}


logGreeting(greetMe);


logGreeting(function(){

    console.log('Hi from');
});