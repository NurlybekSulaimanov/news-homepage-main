/*
let btn = document.getElementById('iconMenu');
btn.addEventListener("click", myFunction);
function myFunction(){
    document.getElementById('menu').style.display = "block";
    document.getElementById('mask').style.display = "inline";
}
*/
/*let cls = document.getElementById('close');
cls.addEventListener('click', close);
function close(){
    document.getElementById('menu').style.display = "none";
    document.getElementById('mask').style.display = "none";
}*/


$('#iconMenu').click(function(event) {
    $('#menu').show();
    $('#mask').show(); 
});
$('#close').click(function(event) {
    $('#menu').hide();
    $('#mask').hide(); 
});