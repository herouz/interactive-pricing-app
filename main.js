let input=document.querySelector('.range').value
document.querySelector('.price').innerText=input
let isMonth=true
function getValue(e){
    input=e
    document.querySelector('.price').innerText=input
}
function handleToggle(){
    isMonth=!isMonth
    document.querySelector('.toggle-btn').classList.toggle('right-flex')
    document.querySelector('.range').setAttribute('max',500)
    if(isMonth){
        document.querySelector('.status').innerText=' /month'
    }
    else{
        document.querySelector('.status').innerText = ' /year'
    }
}
