const root = document.querySelector('.root');

const inputDiv = document.querySelector('.inputDiv');

const input = document.createElement('input');
input.type = 'text';

const value = document.createElement('div');

inputDiv.appendChild(input);
inputDiv.appendChild(value);


const colorInDiv = (item) => {
    root.textContent = '';

    for(let i = 0; i < item.length; i++){
        const color = document.createElement('div');
        color.style.backgroundColor = item[i];
        color.classList.add('card');

        root.appendChild(color);
    }
}


const colors = ['blue', 'green', 'orange', 'yellow', 'purple', 'gray', 'red', 'violet', 'brown', 'black', 'white', 'pink', 'gold', 'silver'];
const colorsFinal = [];


input.addEventListener('input', () => {
    colorsFinal.length = 0;

    for(let i = 0; i < colors.length; i++){
        if(colors[i].slice(0, input.value.length) == input.value){
            colorsFinal.push(colors[i]);
            colorInDiv(colorsFinal);
        }else{
            colorInDiv(colorsFinal);
        }
    }

    value.textContent = input.value;
})

colorInDiv(colors);