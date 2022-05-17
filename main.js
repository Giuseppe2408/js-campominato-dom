const gridEl = document.getElementById('grid')
const select = document.getElementById('livello')
const btn = document.querySelector('button');


const creazioneelemento = (classDiv) => {
    const node = document.createElement('div');
    node.className = classDiv;
    return node;
}

btn.addEventListener ('click',

    () => {
        let ncells;
        let classcells

        // svuotare griglia
        gridEl.innerHTML = "";

        // valore select
        const chooseLvl = parseInt(select.value);
        console.log(chooseLvl);

        switch (chooseLvl) {
            case 0:
            default:  
            ncells = 100;
            classcells = "square-1"
            break;
        
            case 1:
            ncells = 81;
            classcells = "square-2"
            break;

            case 2:
            ncells = 49;
            classcells = "square-3"    
            break;    
        }



        const mynewarrRandom = createrandnum (ncells, 1, ncells)
        console.log(mynewarrRandom);
        
        const bomb = createrandnum(16, 1, ncells);
        console.log(bomb);

        for (let index = 0; index < mynewarrRandom.length; index++) {
            const divEl = creazioneelemento(classcells);
            let arrayitem = mynewarrRandom[index];
            
            divEl.addEventListener ('click',

                () => {

                    if (!bomb.includes(arrayitem)) {
                        divEl.classList.add('clicked-blue');  
                    } else {
                        divEl.classList.add('clicked-red')
                        console.log('hai perso!');
                    }

                    divEl.append(arrayitem);                  
                                                   
                }
        
            )
            gridEl.append(divEl);
        }
        

    }


)


function getrandomnum(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * 100 )
    return result;
}

function createrandnum(numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let randNumint = getrandomnum(min, max);
        if (!arrInt.includes(randNumint)) {
            arrInt.push(randNumint);
        }
    }
    return arrInt;
}

