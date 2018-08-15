
function created (){
    let saveSub = document.querySelector('#tijiao');
    saveSub.addEventListener('click',function (evnt) {
        evnt.preventDefault();
        let saveTable = document.querySelector('#pixelCanvas');
        let saveHeight = document.querySelector('#inputHeight').value;
        let saveWidth = document.querySelector('#inputWidth').value;
        console.log(saveWidth,saveHeight);

        for (let i =0; i<saveHeight; i++){
            let catedTr = document.createElement('tr');
            saveTable.appendChild(catedTr);
            for(let number = 0; number<saveWidth; number++){
                let crateTd = document.createElement('td');
                catedTr.appendChild(crateTd)
            }
            }
    })


}

created();

//color

function get_color (evt){
    console.log(save_color.value)
}

let save_color = document.querySelector('#colorPicker');
save_color.addEventListener('input',get_color);



// click
let save_map = document.querySelector('#pixelCanvas');
function color (evt){
    if (evt.target.nodeName === "TD"){
        evt.target.style.backgroundColor = save_color.value
    }

}

save_map.addEventListener('click',color);


