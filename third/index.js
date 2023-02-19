let container = document.getElementById('container');
let open = document.getElementById('open');
let close = document.getElementById('close');
open.onclick = () => {
    container.classList.add('active');
}
close.onclick = () => {
    container.classList.remove('active');
}