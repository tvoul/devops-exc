var count = 0

document.getElementById('increase').addEventListener('click', function(){
    count += 1
    document.getElementById('number').innerHTML = count
})

document.getElementById('decrease').addEventListener('click', function(){
    count -= 1
    document.getElementById('number').innerHTML = count
})