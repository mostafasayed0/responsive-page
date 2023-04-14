let step1= document.querySelector('.x');
let step2= document.querySelector('.navigation');
step1.addEventListener('click', function(){
    step2.style.cssText=`visibility: visible;`
})

setTimeout(function() {
  step2.style.visibility = "hidden";
}, 5000); // 5000 تمثل 5 ثواني