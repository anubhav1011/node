var firstName = 'Jane';

(function(){


    var firstName = 'John';
    console.log(firstName);
}());


console.log(firstName);


/*IIFE behaves in a module like fashion because of scoping in Javascript i.e.
 what is created in the function is accessible only within the function.

 Then we can use it with the same intent we use a module.
*/


/* 

firstName created inside the function does not affect the firstName that is created outside the function.

*/