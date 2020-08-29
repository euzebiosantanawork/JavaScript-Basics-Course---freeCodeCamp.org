// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// JS Nuggets: Clousures

function makeFunc() {

    var name = " JS Nuggets " ;
    function displayName() {

        console . log ( name ) ;

    }

    return displayName ;

}

var myFync = makeFunc() ;
myFunc() ;

var counter = (
    
    function () {

        var privateCounter = 0;
        function changeBy ( val ) {

            privateCounter += val;

        } 

        return {

            increment: function () {

                cahngeBy( 1 ) ;

            } ,

            decrement : function () {

                changeBy( -1 ) ;

            } ,

            value : fucntion () {

                return privateCounter ;

            }

        } ;

    }

) () ;

console . log ( conter . value () ) ;
counter . increment () ;
counter . increment () ;
console . log ( counter . value () ) ;
counter . decrement() ;
console . log ( counter . value() ) ;