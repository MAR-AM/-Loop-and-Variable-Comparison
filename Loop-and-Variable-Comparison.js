for (let i=20 ;i>=0 ; i-=2){
            console.log(i)
        }

        // --------------------


    var a1 = parseInt(prompt(" first number :  "))
    while(isNaN(a1)==true) {
        a1 = prompt("enter the first number correctly :")
    }
       
    

    var a2 = parseInt(prompt(" second number :  "))
    while(isNaN(a2)==true){
        a2 = prompt("enterthe second number correctly  :")
    }
     


    var a3 = parseInt(prompt(" tirth number :  "))
    while(isNaN(a3)==true) {
        a3 = prompt("enter the tirth number  correctly  :")
    }
   
    if (a1==a2==a3){
        document.write("Les trois variables sont identiques.")
    }
    if (a1==a2||a1==a3||a2==a3){
        document.write("Deux des variables sont de valeurs égales.")
    }
    else{
        document.write("Les trois variables sont différentes.")
    }
