let kirish = document.getElementById('loagin')
let chiqish = document.getElementById('pexit')
 let myElement = document.querySelector(".row2");
 const signpassword2="1234";
 function signUp() {
    let mylogin = document.getElementById("mylogin").value;
    let myname =document.getElementById('myname').value;
       const signpassword = document.getElementById('idpassword').value; 
         if(signpassword==signpassword2 && mylogin!=""){
        myElement.style.display = "flex";
        kirish.style.display = "block";
        kirish.style.textAlign = "center";
        chiqish.style.display = "none";
        kirish.innerHTML = `${myname} mofaqiyatli o'tingiz`;
     }
     else if(signpassword!=signpassword2) {
         chiqish.style.display = "block";
        kirish.style.display="none";
        chiqish.innerHTML="parol noto'g'ri";
        myElement.style.display = "none";
     }
     else if(mylogin=="") {
        chiqish.style.display = "block";
       kirish.style.display="none";
       chiqish.innerHTML="Login kiritilmadi";
       myElement.style.zIndex = "-1";
    }
     
 }

function Test() {
    let year = document.getElementById('years').value;
    let idyear = document.getElementById('year');
    // if(year>=50&& year<=100){
    //     idyear.innerHTML="Yoshingiz katta";
    //     idyear.style.color="red";
    // }
    // else   if(year>=18 && year<50){
    //     idyear.innerHTML="Yoshingiz o'rtacha";
    //     idyear.style.color="rgb(44 93 32)";
    // }
    // else if(year>0&& year<50){
    //     idyear.innerHTML="Yoshingiz kichik";
    //     idyear.style.color="rgb(19, 128, 15)";
    // }
    // else if(year<0){
    //     idyear.innerHTML="Manfi yosh bolmaydi <h3 class='color'>TONKA</h3>";
    // }
    // else if(year>100){
    //     idyear.innerHTML="Siz <h3 class='color'> TOSHBAQA </h3> yoki <h3 class='color'> Qarg'a </h3> bo'lishingiz mumkun tekshirib ko'ring...";
    //     idyear.style.color="black";
    // }
    if(year!=""){ alert(
    "Assalomu alaykim "+
    document.getElementById('myname').value + "\n" +
    "Login: "+document.getElementById('mylogin').value + "\n" +
    "password: " + signpassword2 
    )}
    else {alert("Yoshingizni kiriting...")}
   
    
}