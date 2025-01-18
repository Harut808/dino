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
