let userName = prompt("Kullanıcı Adınızı Giriniz? ")
let info = document.querySelector('#myName')
info.innerHTML=`${userName}`
let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function showTime(){
    var tarih=new Date();
        var gun=gunler[tarih.getDay()];
        var saat=tarih.getHours();
        var dakika=tarih.getMinutes();
        var saniye=tarih.getSeconds();	
    let iceaktarma = document.querySelector("#myClock")
    iceaktarma.innerHTML = saat + ":" + dakika + ":" + saniye + " " + gun
}

const time = setInterval(showTime,1000);

document.getElementById("myClock").innerHTML = time