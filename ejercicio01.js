/**
 * 1. La función createTable recibe como parámetro
 * un arreglo de usuarios dónde cada uno tiene "id" y "name".
 * 
 *  Realizar la implementación para regresar un <table> de HTML con 
 *  la columna del ID y NOMBRE. 
 * 
 *  <table>
 *    <thead>
 *    </thead>
 *    <tbody>
 *    </tbody>
 *  </table>
 */
 function createTable(users) {
    const html2 = `
    <table>
        <th>
        ID
        </th>
        ${()=>{for(let usuario of users){
           
            '<tb>'
                 {usuario.id}
       '</tb>'
        }}}
       
       <the>
        NOMBRE
        </th>
        ${()=>{for(let usuario of users){
           
            '<tb>'
                {usuario.nombre}
      ' </tb>'
        }}}
     </table>`;
     return html2;
}

console.log(createTable([
  {
    id: 1,
    name: "Jorge"
  },
  {
    id: 2,
    name: "Francisco"
  }
]));

/**
 * 2. La función minMax recibe un arreglo de números.
 * 
 *  Realizar la implementación para regresar en un objeto el número
 *  mínimo y el número máximo.
 */

function minMax(array) {
const numeros = {
    maximo: 0,
    minimo: 0
}
numeros.maximo = Math.max(...array);
numeros.minimo = Math.min(...array);

return numeros
}

console.log(minMax([1, 2, 3, -100])); // { min: -100, max: 3 }

/**
 * 3. La función unique recibe un arreglo de números.
 * 
 * Realizar la implementación para regresar los elementos únicos del arreglo.
 */
function unique(array) {
    const arreglo = new Set();
     for(let numero of array){
         arreglo.add(numero)
     }
    console.log(arreglo);

    return arreglo;
}

console.log(unique([1,1,1,1,2,2,2,2,2,2,1,1,2,2,2,3,3,3,3,4])); // [1,2,3,4];