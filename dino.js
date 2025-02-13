let dino = document.querySelector('#dino')
let dinopopox = true
let jump = 24

function foo() {
    
        if (jump>= 23) {
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    
                    if (i < 15) {
                        if (dinopopox) {
                        dino.style.marginTop = jump + '%'
                        jump--
                        }
                    } else if (i > 14) {
                        if (dinopopox) {
                        dino.style.marginTop = jump + '%'
                        jump++
                        }
                    }  
                    
              
    
                }, 40 * i);
            }
        }
    
    

}
document.addEventListener('keydown',foo);   

let amp = document.querySelector('.cloud')
let champa = document.querySelector('.road')
 function stugel() {
    console.log('dfsbuai');
      if (h2.innerText===400) {
        arag = 40
      }else if (h2.innerText===700) {
        arag = 30
      }
     if (count >6&&count<12 && jump <= 24 &&jump>= 20|| count1 >6&&count1<12 && jump <= 24 &&jump>= 20) {
        console.log('krvar');
        amp.style.animation = '0s'
        champa.style.animation = '0s'
        kaktusFigure1popox = false
        kaktusfigurepopox = false
             dinopopox = false
            let but = document.createElement('button')
            cont.append(but)
            but.style.width = '20%'
            but.style.height = '7vh'
            but.style.borderRadius = '50%'
            but.style.marginLeft= '40%'
            but.style.marginTop = '10%'
            but.style.backgroundColor = 'crimson'
            but.innerText = 'Play again'
            but.addEventListener("click", () => {
                location.reload()
            })

    
}
   
}
let popox = 1
let count = 95
let count1 = 0
let kaktusnerpopox
let intervalId
let intervalId1
let kaktusFigure = document.createElement('div')
let cont = document.querySelector('section')
let kaktusFigure1 = document.createElement('div')
let h2 = document.querySelector('h2')
let kaktusfigurepopox  = true
let kaktusFigure1popox = true
let arag = 50
function kaktuscss(figure) {
    figure.style.width = '5%'
    figure.style.height = '10%'
    figure.style.position= 'absolute'
    figure.style.marginTop = '24%'
    figure.style.marginLeft = '90%'
    figure.style.backgroundSize = 'cover'
    cont.append(figure)
}
function kaktusgorc(kaktus) {

    count = 95
    kaktuscss(kaktusFigure)
    kaktusFigure.style.backgroundImage = "url('./nkarner/kaktus.png')";
     for (let i = 0; i < 96; i++) {
        intervalId = setTimeout(() => {

            if (kaktusfigurepopox) {
                h2.innerText++
               if (count > 0 ) { 
               kaktus.style.marginLeft = count + '%';
               count--
               kaktusner()
           }
            if (count === 0) {
               kaktusFigure.remove()
            }
             stugel()
             
           }

          
        },arag*i);

        
     }

}
function kaktusgorc1(kaktus) {
   kaktuscss(kaktusFigure1)
   kaktusFigure1.style.backgroundImage = "url('./nkarner/kaktus1.png')";

    count1 = 95
    for (let i = 0; i < 96; i++) {  
              intervalId1 = setTimeout(() => {
                if (kaktusFigure1popox) {
                    h2.innerText++
                    if (count1 > 0 ) { 
                    kaktus.style.marginLeft = count1 + '%';
                    count1--
                    kaktusner()
                }
                if (count1 === 0) {
                    kaktusFigure1.remove()
                 } 
                      stugel()
    
                }


   
        },arag*i); 
    }
 


}
function kaktusner() {

    if (count < 50) {
        let x = Math.round(Math.random() * count)
        if (x === count || x === count1) {
            if (popox % 2 === 1 && count === 95 || popox % 2 === 1 && count === 0 && count1 < 60 || kaktusnerpopox && popox % 2 === 1 && count === 95 || count === 95 && count1 < 70) {
                kaktusgorc(kaktusFigure)
                popox++
                kaktusnerpopox = false
            } else if (popox % 2 !== 1 && count1 === 95 || popox % 2 !== 1 && count1 === 0 && count < 60 || !kaktusnerpopox && popox % 2 !== 1 && count1 === 95 || count1 === 95 && count < 70) {
                kaktusgorc1(kaktusFigure1)
                popox++
                kaktusnerpopox = true
            }
        }
    }



}
kaktusgorc(kaktusFigure)




