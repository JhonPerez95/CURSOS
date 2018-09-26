divisible = false;


for (let n = 1; n <= 100; n++) {
    divisible = false;
    if (n%3 == 0) {
        document.write("Bizzz"); 
        divisible = true;
       
    } if ( n%5 == 0) {
        document.write("Fuzzzz");
        divisible = true;
    } if (!divisible) { // Si no es divisible se imprime el numero con variable
        document.write(n);
    } if (n%3 !=0 && n%5 !=0) { // sin variable
        document.write(n);
    }


    document.write("<br/>")
}
