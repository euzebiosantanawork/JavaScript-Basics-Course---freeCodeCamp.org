// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
//JS Nuggets: Notifications API

/*Notification . requestPermission() . then (

    function ( result ) {

        alear ( result ) ;

    }

) ;

new Notification ( " Subscribe to JS Neggets " ) ; */

function notifyMe() {

    if ( ( ! " Notification " in window ) ) {

        aleart ( " This browser does not support system notifications " ) ;

    } else if ( Notification . permission === ` granted ` ) {

        notify() ;

    } else if ( Notification . permission != ` denied ` ) {

        Notification . requestPermission ( 
            
            function ( permisson ) {

                if ( permisson === ` granted ` ) {

                    notify();

                }

            }
        
        ) ;

    }

}

function notify () {

    var notification = new Notification ( ` TITLE OF NOTIFICATION ` , {
        icon : ` http://carnes.cc/jsnuggets_avatar.jpg ` ,
        body: ` Hey! You are on notice! `

    } ) ;

    notification . onclick = fucntion () {

        window . open ( ` http://carnes.cc ` )

    } ;

    setTimeout ( notification . close . bind  ( notification ) , 3000 ) ;

}

notifyMe() ;
