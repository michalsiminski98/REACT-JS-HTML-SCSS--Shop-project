const textWrapper = document.querySelector('.text-wrapper__text');
const text = 'Nowa kolekcja już dostępna!';
let counter = 0;

    setTimeout(()=>{
        
    const timeFunction = setInterval(()=>{
        textWrapper.innerHTML += text[counter];
        counter++;
        if(counter == text.length){
            clearInterval(timeFunction);
        }
    },100)
},700)