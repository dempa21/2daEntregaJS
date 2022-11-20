const boton = document.getElementById('boton')

function myCar(modelo,cantidadKms) {
    this.modelo = modelo;
    this.cantidadKms = cantidadKms;
}

function Calculate() {
  
    // Extracting value in the amount 
    // section in the variable
    modelo = document.querySelector("#modelo").value;
  
    // Extracting value in the interest
    // rate section in the variable
    cantidadKms = document.querySelector("#cantidadKms").value;
  
    // Calculando precio según kms recorridos por mes
    let interest = 2500-((2022-modelo)*140);
    let interestkms = cantidadKms*0.01;

    if(modelo < 2005) {
        interest = 50;
    }
      
    // Calculating total payment
    const total = (interest+interestkms).toFixed(2);
  
    document.querySelector("#total")
        .innerHTML = "EMI : $" + total;
}  

boton.onclick = Calculate();


console.log(boton)

