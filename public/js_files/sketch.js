

const Grid =(value=16) =>{
    const grid_container = document.querySelector(".grid_container");
    while(grid_container.firstChild){
        grid_container.removeChild(grid_container.firstChild);
    }
    const div_dim = grid_container.clientWidth/value;
    let x = value*value;
    for(let i =0;i<x;i++){
        const div = document.createElement('div');
        div.className = 'grid_item';
        div.style.width = div_dim.toString()+'px';
        div.style.height =div_dim.toString() +'px';
        grid_container.appendChild(div);
    }
}

const setColor = (color)=>{
    const div = document.querySelectorAll('.grid_item');

    if(color==='rgb'){
        color = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    div.forEach((button) => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = color;
        });
    });
}

Grid();
setColor('grey');
const reset = document.querySelector('.reset');
const slider = document.querySelector('#slider');
const value = document.querySelector(".value");
const black = document.querySelector('.black');
const rgb = document.querySelector('.rgb');
const c_slider = document.querySelector('#color_slider');

reset.addEventListener('click',() =>{
    Grid();
    setColor('grey');
    slider.value=16;
    value.textContent = slider.value + "x" + slider.value;
})

black.addEventListener('click',()=>{
    setColor('#151b25');
});

rgb.addEventListener('click',()=>{
    setColor('rgb');
});

slider.addEventListener('input', () =>{
    value.textContent = slider.value + "x" + slider.value;
    Grid(slider.value);
    setColor('grey');
});

c_slider.addEventListener('input', () =>{
    setColor(c_slider.value);
});