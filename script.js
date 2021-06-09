// document.getElementById('ok').addEventListener('click',function(e){
//     alert('ok')
//     console.log(e)
// }
// )
// document.getElementById('cancel').addEventListener('click',function(e){
//     alert('cancel')
//     console.log(e)
// }
// )
// document.getElementById('no').addEventListener('click',function(e){
//     alert('no')
//     console.log(e)
// }
// )
// document.getElementById('cancel').addEventListener('mousemove',function(e){  
//     console.log('x = '+e.clientX)
//     console.log('y = '+e.clientY)
// }
// )
// document.getElementById('ok').addEventListener('click',function(e){

//     let noElement = document.getElementById('no')
//     if (noElement.classList.contains('toggleOn')){
//         noElement.classList.replace('toggleOn','toggleOff')
//     } else if (noElement.classList.contains('toggleOff')){
//         noElement.classList.replace('toggleOn', 'toggleOff')
//     }else{
//         noElement.classList.add('toggleOn')
//     }
// })
document.getElementById('ok').addEventListener('click',function(e){

    let noElement = document.getElementById('no')
    if (noElement.classList.contains('toggleOn')){
        noElement.classList.replace('toggleOn','toggleOff')
    } else if (noElement.classList.contains('toggleOff')){
        noElement.classList.replace('toggleOn', 'toggleOff')
    }else{
        noElement.classList.add('toggleOn')
    }
})


var boderTick=5
document.getElementById('cancel').style.border = `${boderTick}px solid white`

var cancelElement = document.getElementById('cancel')
cancelElement.addEventListener('mousemove',function(e){
    cancelElement.innerHTML = `
    <div class = "container-col">
        <div class="flex-item">
            no1
        </div>
        <div class="flex-item">
            no2
        </div>
    `
})
cancelElement.addEventListener('mouseleave',function(e)
{
    cancelElement.innerHTML = `cancel`
}) 
