let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let demoSpan = document.getElementById("demo");
let d = (z + w);
let demoRetour = document.getElementById("demoRetour");
let monBoutton = document.getElementById("monBoutton");
let divChangeOver = document.getElementById("changeSurOver");


alert(d);
demoSpan.innerHTML = "z vaut : " + z + ", " + "w vaut : " + w + ", " + "le résultat de z + w est : " + (z+w);

let humain = {prenom: "John", nom: "Doe", age: 35};

alert(10*5);
alert(10/2);
alert(15%9);

let multiVar = {k: 5 , l: 10};
multiVar.l = multiVar.l + multiVar.k;

function maFonction () {
    alert("Salut tout le monde");
}
maFonction();

function maFonctionDeRetour () {
    return "Bonjour !"
}
demoRetour.innerHTML = maFonctionDeRetour();

monBoutton.addEventListener("click", function () {
    alert("Wesh d'où tu me cliques là ? Oh Djadja j'suis pas ta catin Djadja");
})

divChangeOver.addEventListener("mouseover", function () {
    divChangeOver.style.backgroundColor = "red";
})

let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

let str1 = "Bonjour ";
let str2 = "le monde !";
alert(str1 + str2);

let listVoiture = ["Renault", "Volvo", "Citroen"];
let maVoiture = listVoiture[1];
listVoiture[0] = "Ford";
alert(listVoiture.length);
listVoiture.pop();
listVoiture.push("Ferrari");

let rNumber = Math.random();
let fNumber = Math.floor(1.57);


let nombreUn = 10;
let nombreDeux = 5;

if (nombreUn > nombreDeux) {
    alert(nombreUn + " est supérieur à " + nombreDeux);
}

let nombreTrois = 10;
let nombreQuatre = 10;

if (nombreTrois === nombreQuatre) {
    alert(nombreTrois + " est égal à " + nombreQuatre);
}

if (nombreUn !== nombreDeux) {
    alert(nombreUn + " n'est pas égal à " + nombreDeux);
}

for (let x = 0; x < 10; x++) {
    console.log(x);
}

let fruits = ["pomme", "banane", "poire"];

for (let x = 0; x < fruits.length; x++) {
    console.log(fruits[x]);
}
let i = 0
while (i < 10) {
    i++;
}

while (i < 10) {
    i+=2;
}

for (let y = 0; y < 11; y++) {
    if (y === 4) {
        alert("gngngn");
    }
}







