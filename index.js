let nome = "Thor"
let nivel = 5500

if (nivel < 1000) {
  console.log("O herói de nome " + nome + " está no nível " + nivel + " Ferro");
}else if (nivel >= 1001 && nivel <= 2000) {
  console.log("o heroi de nome " + nome + " está no nivel " + nivel + " Bronze");
}else if (nivel >= 2001 && nivel <= 5000) {
  console.log("o heroi de nome " + nome + " está no nivel " + nivel + " Prata");
}else if (nivel >= 5001 && nivel <= 7000) {
  console.log("o heroi de nome " + nome + " está no nivel " + nivel + " Ouro");
}else if (nivel >= 7001 && nivel <= 8000) {
  console.log("o heroi de nome " + nome + " está no nivel " + nivel + " Platina");
}else if (nivel >= 8001 && nivel <= 9000) {
  console.log("o heroi de nome " + nome + " está no nivel " + nivel + " Ascendente");
}else if (nivel >= 9001 && nivel <= 10000) {
  console.log("o heroi de nome " + nome + " está no nivel " + nivel + " Imortal");
}else if (nivel >= 10001) {
  console.log("o heroi de nome " + nome + " está no nivel " + nivel + " Radiante");
}
