let flagBackground = false;

function btnFunction() {
    var btnHelloWorld = document.getElementById('helloWorld');

    if (flagBackground){
        flagBackground = false;
        btnHelloWorld.style.cssText = 'color: #808000; background-color: #f3f3f3; font-weight: bold;'
    }
    else {
        flagBackground = true;
        btnHelloWorld.style.cssText = 'color: #671792; background-color: #141616; font-weight: bold;'
    }
}