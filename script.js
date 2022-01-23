window.addEventListener('click', contato);

function contato(event){
    const element = event.target;
    const button = document.querySelector('.contact');
    const aside = document.querySelector('aside');

    if(element.classList == 'contact'){aside.style = 'display: flex';}
    if(element.classList != 'contact'){aside.style = 'display: none';}
}