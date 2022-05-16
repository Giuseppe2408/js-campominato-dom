const gridEl = document.getElementById('grid')
const select = document.getElementById('livello')
const btn = document.querySelector('button');

const creazioneelemento = () => {
    const node = document.createElement('div');
    node.className = "square";
    return node;
}

btn.addEventListener ('click',

    () => {
        const mynewarrRandom = createrandnum (100, 1, 100)
        console.log(mynewarrRandom);

        for (let index = 0; index < mynewarrRandom.length; index++) {
            const divEl = creazioneelemento();
            let arrayitem = mynewarrRandom[index];
            
            divEl.addEventListener ('click',

                () => {
                    this.append(arrayitem);

                    if (arrayitem %2 === 0) {
                        this.classList.add('clicked-blue');
                    } else {
                        this.classList.add('clicked-red');
                    }

                    
                }
        
            )
            gridEl.append(divEl);
        }
        

    }


)




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

function getrandomnum(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin))
    return result;
}