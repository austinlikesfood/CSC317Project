// the name of the form element is in the input tag
// be careful with naming conventions and the actual naming convention
// "ev" is predifned in javaScript
document.getElementById('Username').addEventListener('change', function(ev){
    console.log(ev);
})
document.getElementById('password').addEventListener('change', function(ev){
    console.log(ev);
})

document.getElementById('checkPass').addEventListener('change', function(){
    console.log(ev);
})

document.getElementById('email').addEventListener('change', function(){
    console.log(ev);
})

document.getElementById('tos-box').addEventListener('change', function(){
    console.log(ev);
})

document.getElementsByTagName