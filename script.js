function toggleMode(){

if(document.body.classList.contains("dark")){
document.body.classList.remove("dark");
document.body.classList.add("light");
}

else{
document.body.classList.remove("light");
document.body.classList.add("dark");
}

}

function genieMovie(){

let movies = [
"Interstellar",
"Inception",
"The Batman",
"Dune",
"Parasite",
"Avengers Endgame",
"The Dark Knight"
];

let random = movies[Math.floor(Math.random()*movies.length)];

document.getElementById("result").innerHTML =
"🧞 Genie recommends: " + random;

let smoke = document.getElementById("genie-smoke");

smoke.classList.remove("smoke");

void smoke.offsetWidth;

smoke.classList.add("smoke");

}

function addMovie(){

let movie = document.getElementById("movie").value;

let list = document.getElementById("watchlist");

let item = document.createElement("li");

item.textContent = movie;

list.appendChild(item);

}