document.getElementById('ok').addEventListener('click',function(e){
    alert('ok')
    console.log(e)
}
)
document.getElementById('cancel').addEventListener('click',function(e){
    alert('cancel')
    console.log(e)
}
)
document.getElementById('no').addEventListener('click',function(e){
    alert('no')
    console.log(e)
}
)
document.getElementById('cancel').addEventListener('mousemove',function(e){  
    console.log('x = '+e.clientX)
    console.log('y = '+e.clientY)
}
)