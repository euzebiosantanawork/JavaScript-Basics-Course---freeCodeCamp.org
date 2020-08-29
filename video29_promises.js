// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
//Promises
// Basic usage

var p = new Promise ( 
    
    function ( resolve , reject ) {

        // Do an async task async task and then...

        if ( good_condition ) {

            resolve ( ` Sucess! ` )

        } else {  reject ( ` Failure ` ); }

    }    

) ;

p .them (  

    fucntion () {

        //do somethig with the result
    }

) . catch (

    fucntion () {

        //error  

    }

)

var p = new Promises (

    function ( resolve , relect ) {

        //Do an async task async task and then...

        if ( good_condition ) {

            resolve ( ` Success! ` ) ;

        } else {

            reject ( ` Failure! ` ) ;

        }

    }

) ;

p . then ( 

    function() {

        // do something with the result

    }

) / catch ( 

    function () {

        //error

    }

)

var promiseCout = 0 ;

function testPromise () {

 var thisPromiseCount = ++promiseCount ;
 console . log ( thisPromiseCount + ` : Satated - Sync code started ` ) ;

 var p1 = new Pormise (

    function ( resolve , reject ) {

        console . log ( thisPromiseCount + ` Promise started - Async code started ` ) ;
        // This is only an exemple to create asynchronism
        widow . setTimeout(

            function () {

                resolve ( thisPromiseCount ) ;

            } , Math . random () * 2000 + 1000

        ) ;

    }

 ) ;

 p1 then ( 
     
        function ( val ) {

            console . log ( val + ` : Promise fulfilled - Async code termined ` ) ;

        } 
 
    ) . catch (  

        function ( reason ) {

            console . log ( ` Handle rejected promise ( ` +reason+ ` ) here ` ) ;


        }

    ) ;

    console . log ( thisPromiseCount + ` :Promise mode - Sync code terinated ` ) ;

}

testPromise () ;
testPromise () ;
testPromise () ;


