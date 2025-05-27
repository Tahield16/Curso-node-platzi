function randomNumber (Min, Max)  {
  return Math.floor(Math.random()*(max-min)+1)+min;
};
const args = process.argv.slice(2); // Empieza desde la posición dos del array que contiene las instrucciones de la consola cuando se ejecuta el comando. Entonces el comando es: node(pos:0) src/index.js(pos:1) 10(pos:2) 50(pos:3)
let min = 1;
let max = 100;

if (
  args.length >= 2 &&
  !((isNaN(parseInt(args[0])) &&
  isNaN(parseInt(args[1])))  || parseInt(args[0])==parseInt(args[1]))
) {
  if (parseInt(args[0]) > parseInt(args[1])) {
    min = parseInt(args[1]);

    max = parseInt(args[0]);
  }else{
    min=parseInt(args[0]);
    max=parseInt(args[1]);
  }
}else{
    console.log("Error, valores de argumentos no validos, utilizando valores por defecto.")
}


console.log(`Tu numero aleatorio, entre ${min} y ${max}, es ${randomNumber(min,max)}`)
