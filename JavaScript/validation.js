// the name of the form element is in the input tag
// be careful with naming conventions and the actual naming convention



// "ev" is predifned in javaScript
document.getElementById('Username').addEventListener('change', function(ev){
    console.log(ev);
})

document.getElementById('email').addEventListener('change', function(){
    console.log(ev);
})
document.getElementById('password').addEventListener('change', function(ev){
    console.log(ev);
})

document.getElementById('checkPass').addEventListener('change', function(){
    console.log(ev);
})

document.getElementById('tos-box').addEventListener('change', function(){
    console.log(ev);
})


// function validatePassword('password'){
//     var minLetters = 6;
//     var minNumbers = 4;
//     var minSpecialCharacters = 1
// }
    
function usernameCheck(){

}

var obj = {
    name: 'Austin',
    id: 1017,
    x: function(){
        console.log(this);
    }
}
var obj1 = {
    name: 'Bernard',
    id: 1904,
    x: function(){
        console.log(this)
    }
}

