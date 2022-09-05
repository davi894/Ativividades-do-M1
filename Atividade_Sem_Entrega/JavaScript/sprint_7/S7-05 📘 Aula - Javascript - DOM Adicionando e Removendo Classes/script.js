

/* document.querySelector("button").addEventListener("click", function () {
    document.querySelector("button").classList.add("button-black")
}) */

 let button = document.querySelector("button")

/* button.addEventListener("click", function () {
    button.classList.add("button-black")
})

button.addEventListener("click", function(){
    if(button.classList.contains("button-black")){ // Avalia
        button.classList.remove("button-black") // Remove
    }else{
        button.classList.add("button-black") // Adiciona
    }
})
 */
let classStyle = "button-black"

button.addEventListener("click", function(){
    if(button.classList.contains(classStyle)){ // Avalia
        button.classList.remove(classStyle) // Remove
    }else{
        button.classList.add(classStyle) // Adiciona
    }
}) 

/* let classStyle = "button-black"

button.addEventListener("click", function(){
    button.classList.toggle(classStyle) // Avalia, Adiciona e Remove
})
 */

/* let classStyle = "button-black"

button.addEventListener("click", function(){
    button.classList.toggle(classStyle) // Avalia, Adiciona e Remove
}) */