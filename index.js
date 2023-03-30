const cats = ["Milo", "Otis", "Garfield"]
//
  function destructivelyAppendCat() {
    cats.push("Ralph")
  }
  // Adds "Ralph to end of array => ["Milo", "Otis", "Garfield", "Ralph"]//
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
//
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
//
function destructivelyRemoveLastCat() {
    cats.pop()
}
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
//
function destructivelyRemoveFirstCat() {
    cats.shift()
}
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
//
function appendCat() {
    return [ ...cats, "Broom"]
}

cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");

function prependCat(){
    return ["Arnold", ...cats ]
}
cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
//
function removeLastCat(){
    return cats.slice(0,2)
}
cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
//
function removeFirstCat() {
    return cats.slice(1)
}