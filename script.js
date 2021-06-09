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
var cancelElement = document.getElementById('ok')
cancelElement.addEventListener('click',function(e){
    document.getElementById('cancel').style.margin = `${boderTick}px`
    document.getElementById('ok').style.margin = `${boderTick}px`
    boderTick+=15
})
var count = 0;
var noElement = document.getElementById('no')
noElement.addEventListener("dblclick", function (e)
{
    if (count == 0) {
    cancelElement.innerHTML = `oheee `
    count++
} else if (count == 1) {
    cancelElement.innerHTML = `head`
    count++
} else if (count == 2){
    cancelElement.innerHTML = `ache`
    count++
}else{
    cancelElement.innerHTML = `ok`
    count=0;
    }
}) 
