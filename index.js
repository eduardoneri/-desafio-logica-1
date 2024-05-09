
const  nomeHeroi = "eduh";
const xP = 8000;
var nivel;

if (xP > 1000 && heroXp <= 2000){
    nivel = "Bronze";
}

else if (xP > 2000 && xP <= 5000) {
        nivel = "Prata";
}

else if (xP > 5000 && xP <= 7000) {
        nivel = "Ouro";
}

else if (xP > 7000 && xP <= 8000) {
        nivel = "Platina";
}
     
else if (xP > 8000 && xP <= 9000) {
        nivel = "Ascendente";
}
     
else if (xP > 9000 && xP <= 10000) {
        nivel = "Imortal";
}
     
else if (xP >= 10000) {
        nivel = "Radiante";
}
     
else {
        nivel = "Ferro";
}
    
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);