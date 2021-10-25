// plus button
var plusbtn = document.querySelectorAll('.plus');
for (let i = 0; i < plusbtn.length; i++) {
plusbtn[i].addEventListener('click',increement)    
}
function increement(event){
    var test= event.target;
    
    var parent=test.parentElement;
    
    var quant=Number(parent.querySelector('p').innerHTML);
    quant++;
    parent.querySelector('p').innerHTML=quant;
    var grandparent = parent.parentElement;
    var tab = grandparent.parentElement;
    var unit = Number(tab.querySelector('.unitPrice').innerHTML);
    var total = quant*unit;
    tab.querySelector('.price').innerHTML = total
    PriceTotal()
}


//  minus button
var minusbtn = document.querySelectorAll('.minus');
for (let i = 0; i < minusbtn.length; i++) {
minusbtn[i].addEventListener('click',decreement)    
}
function decreement(event){
    var test= event.target;
    var parent=test.parentElement;
   
    var quant=Number(parent.querySelector('p').innerHTML);
    
    quant--;
    parent.querySelector('p').innerHTML=quant;
    var grandparent = parent.parentElement;
    var tab = grandparent.parentElement;
    var unit = Number(tab.querySelector('.unitPrice').innerHTML);
    var total = quant*unit;
    tab.querySelector('.price').innerHTML = total
    if (quant<=0){
        parent.querySelector('p').innerHTML=0;
        tab.querySelector('.price').innerHTML=0;
    }
    PriceTotal();
}
// like button
var likeBotton = document.getElementsByClassName('like');
for(var i=0;i<likeBotton.length;i++){
    var bottonLike =likeBotton[i]
    bottonLike.addEventListener('click',function(event){
            var botton=event.target;
             if(botton.style.color=='red'){
                 botton.style.color='#424242';
             }else{
                botton.style.color='red';}

        })
}
// delete button


var btndel = document.querySelectorAll('.delete')
for (let i = 0; i < btndel.length; i++) {
  btndel[i].addEventListener('click',dlt) 
};
function dlt(event){
var tar = event.target
var parent = tar.closest("tr")
var del1 = Number(parent.querySelector('.price').innerHTML)
del1 = 0
parent.querySelector('.price').innerHTML = del1
parent.querySelector('p').innerHTML = 0
PriceTotal();
};

// total shopping

function PriceTotal(){
    var prices = document.querySelectorAll('.price')
    var tot=0;
    for (let i = 0; i < prices.length; i++) {
        tot+=Number(prices[i].innerHTML);
    }
    document.querySelector('#total').innerHTML=tot;
}


