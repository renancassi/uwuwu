const message = 'Clique no UwU' // Try edit me
const uwu = 'UwU'
document.querySelector('#header').innerHTML = message
document.querySelector('#uwu').innerHTML = uwu
function uwuSound() {
    const audio = new Audio('somUwU.mp3');
    audio.play();
}