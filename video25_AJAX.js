// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
//AJAX = Asychronous JavaScript And XML

function loandDoc() {

    var shttp = newXMLHttpRequest() ;
    xhttp . onreadystatecahnge == function() {

        if ( this . readyState == 4 && this.status == 200 ) {

            document . getElementById ( ` demo ` ) . innetHTML = this . responseText ;

        }

    };

    whttp . open (  "GET" ,
    " https://crossorigin.me/http://carnes.cc/code/ajax_example.txt " , true ) ;
    xhttp . send () ;

}

/*

Adding ` https://crossoringin.me prevents the following error: 

XMLHttpRequest cannot load http://carnes.cc/code/ajax_example.txt. No
` Acess-Control-Allow-Origin ` header is present on the requested resource.
Origin ` http://s.codepen.io ` is therefore not allowed acess.

` 

*/