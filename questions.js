/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {

    // return (texte1 + texte2)

    return (texte1.concat("",texte2));

}
let afficherCar5 =  (texte) => {
    // let index = 6;
    // return texte.charAt(index);

    return texte.charAt(6);

}
let afficher9Car =  (texte) => {

    return texte.substr(0,9);

}
let majusculeString =  (texte) => {

    return texte.toUpperCase();

}
let minusculeString =  (texte) => {

    return texte.toLowerCase();

}
let SupprEspaceString =  (texte) => {

    // return texte.replace(/ /g,""); use to delete all the space not right there
    return texte.trim(); // trim fonction is used to delete all the space before and after the string

}
let IsString =  (texte) => {

    // return (typeof texte); use to see what type of variable is texte then use a condition
    
    if(typeof texte == "string"){
        return true;
    }

}

let AfficherExtensionString =  (texte) => {
    // return texte.length;
    // return texte.substr(15,18) // bad bad method but funny in this case 
    // return "jpg" // ok i stop

    let regex = /[^.]*$/;  // / [^$]*$/ for exemple will take all the value after the $ into the []
    let resultats = texte.match(regex);
    return resultats[0];

}
let NombreEspaceString =  (texte) => {

    return texte.split(' ').length - 1; // calculate the number of space in the string

}
let InverseString =  (texte) => {
    
    return texte.split("").reverse().join(""); // split the string then reverse the letter and then join it

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {

    return Math.abs(nombre);

}
let valeurAbsolueArray =  (array) => {

    let answer = [];

    for(i=0; i<array.length;i++){
        answer.push(Math.abs(array[i]));
    }
    return answer;
}
let sufaceCercle =  (rayon) => {

    return Math.ceil(Math.PI*rayon**2); // use "round" for the nearest 
}
let hypothenuse =  (ab, ac) => {
    
    return Math.hypot(ab,ac);
}
let calculIMC =  (poids, taille) => {

        return Number((poids / taille**2).toFixed(2)); // number is used 
}
