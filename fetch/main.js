async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(res);
    if (!res.ok) {
      throw new Error(`fetch Error ${res.status}`);
    }
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

getUsers();

async function getPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    !res.ok
      ? throw new Error(`fetch Error ${res.status}`)
      : console.log(res.ok);

    const pokemon = await res.join();
    console.log(pokemon);
  } catch (err) {
    console.error(err);
  }
}

getPokemon();
