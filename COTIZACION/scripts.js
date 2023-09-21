function obtenerDatos(){
    cargarCotizaciones();

    cargarElementos();
    document.getElementById("espera").style.visibility = "hiden"

    
}

// obtener cotizaciones
async function cargarCotizaciones() {
    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
     let info1 =await promesa1.json() ;
     document.getElementById('bitcon').append("BIT a USD: ");
     document.getElementById('bitcon').append(info1.bpi.USD.rate);


    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    let info2 = await promesa2.json();
    document.getElementById("dolar").append("EUR a USD: " );
    document.getElementById("dolar").append(info2.rates.EUR);

    let promesa3 = await fetch('https://open.er-api.com/v6/latest/ARS');
    let info3 = await promesa3.json();
    document.getElementById("EUR").append("ARG a USD: ");
    document.getElementById("EUR").append(info3.rates.USD)
}



//cargar elementos

function cargarElementos(){
   document.getElementById("h1").textContent = "Cotizaciones Online";
   document.getElementById("espera").setAttribute("src", "loading.gif");
   document.getElementById("espera").style.visibility = "visible";
   document.getElementById("logo").setAttribute("src", "cambio.png");
}

