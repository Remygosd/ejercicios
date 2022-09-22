// Consultamos la lista de todas las razas
fetch('https://bedu-pokemon-api.herokuapp.com/pokemon')
  .then(function (response) {
    return response.json();
  })
  .then(function ({data}) {
    // Actualizamos el <select> con las razas
    const pokemons = [...data];
    updateSelect(pokemons);
    console.log(pokemons)

  });

// Renderiza una lista de razas dentro del <select>
function updateSelect(pokemons) {
  const select = document.getElementById('breeds');

  for (const pokemon of pokemons) {
    // <option>
    const option = document.createElement('option');

    // <option>La raza</option>
    option.innerText = pokemon.name;

    // <option value="La raza">La raza</option>
    option.value = pokemon.number;

    select.append(option);
  }
}

const button = document.getElementById('get-image');

// Escuchando un evento para descargar una imagen
button.addEventListener('click', function () {
  // Obtengo la raza seleccionada
  const select = document.getElementById('breeds');

  // Consulto la imagen aleatoria de la raza seleccionada
  fetch(`https://bedu-pokemon-api.herokuapp.com/pokemon/${select.value}`)
    .then(function (response) {
      return response.json();
    })
    .then(function ({data}) {
      // Actualizar la imagen en el HTML
      updateImg(data);
      console.log(data);
    });
});

// Toma una url e inserta una etiqueta <img> en el HTML
function updateImg(pokemon) {
  let urlArtwork = pokemon.artwork;
  let urlSprite = pokemon.sprite;

  const titulo1 = document.getElementById('nombre');
  titulo1.innerText = pokemon.name;
  const titulo2 = document.getElementById('number');
  titulo2.innerText = pokemon.number;

  const selectTipos = document.getElementById('tipos');

  for (const type of pokemon.types) {
    // <option>
    const option = document.createElement('option');

    // <option>La raza</option>
    option.innerText = type;

    // <option value="La raza">La raza</option>
    option.value = type;

    selectTipos.append(option);
  }

  const container = document.getElementById('img-container');
  container.innerHTML = `<img src="${urlArtwork}" class="img-fluid"/>`;
  const container2 = document.getElementById('img-container2');
  container2.innerHTML = `<img src="${urlSprite}" class="img-fluid"/>`;
}