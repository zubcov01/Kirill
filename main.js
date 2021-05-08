
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});
AOS.init();
// const ROOT = document.getElementsById('root');
// let button;
// const button = () => {
//     const btn = document.getElementsByClassName('main-screen__btn');
//     ROOT.appendChild(btn)
    
// }
// button()
// const createModalWindow = () => {
//     const div = document.createElement('div');
//     ROOT.appendChild(div)
//     div.setAttribute('class', 'modal-window')
// }
// createModalWindow()
const ROOT = document.getElementById('root');
const COL = document.getElementById('col-btn')
let btn;
let modal;
let overlay;    
let closeButton;

const createButton = () => {
     btn = document.getElementById('btn__modal')
        COL.appendChild(btn);
}
createButton()

const createOverlay = () => {
     overlay = document.createElement('div')
    ROOT.appendChild(overlay)
    overlay.setAttribute('class', 'overlay')
}
createOverlay()
const createModalWindow = () => {
     modal = document.createElement('div');
    overlay.appendChild(modal)
    modal.setAttribute('class', 'overlay__modal-window')
}
createModalWindow()
const showModal = () => {
    btn.addEventListener('click', () => {
 overlay.classList.add('active')
    });
}
showModal();
const createExitButton = () => {
    closeButton = document.createElement('button')
    modal.appendChild(closeButton)
    closeButton.setAttribute('class', 'exit-btn')
    closeButton.textContent = 'X'
}
createExitButton();
const exitModal = () => {
    closeButton.addEventListener('click', () => {
        overlay.classList.remove('active')
    })
    overlay.addEventListener('click',(event) => {
        console.log(event);
        if(overlay.target.classList !== 'overlay active'){
            overlay.classList.remove('active') 
        }
    })
}
exitModal();
const createInput = () => {
    inp = document.createElement('input')
    modal.appendChild(inp)
    inp.setAttribute('class', 'modal-inp')
    inp.placeholder = 'Ваш вопрос : '
}
createInput()
const createInpButton = () => {
    inpBtn = document.createElement('button')
    modal.appendChild(inpBtn)
    inpBtn.setAttribute('class', 'inpBtn')
    inpBtn.textContent = 'Отправить сообщение'
}
createInpButton()