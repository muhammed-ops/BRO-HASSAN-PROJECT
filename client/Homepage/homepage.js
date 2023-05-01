var icon = document.querySelector('.container ion-icon')
var list = document.querySelector('.container nav ul')


var toggle = true
const Menu = () => {
    if(toggle){
    list.style.display = 'block';
    toggle = false;
    }else{
    list.style.display = 'none';
    icon.style.display = 'block';
    toggle = true;
    }
}
icon.addEventListener('click', Menu)