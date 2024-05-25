//Hesap makinasında işlem yapılan yer display, sonuç gösteren yer display_ust değişkeni olarak atandı.
let display = document.getElementById("sonuc");
let display_ust = document.getElementById("sonuc-ust");
//işlemler için gerekli boş değişkenimiz
let bos_deger = "";

//Calculator resminin üzerine basıldığında üst resmin ve butonun kaybolması

function hideElements() {
  const kaybol = document.querySelector(".kapak");
  const kaybol_button = document.querySelector(".cal-button");
  kaybol.style.display = "none";
  kaybol_button.style.display = "none";
}
//işlem yapacağımız operatörleri kullandığımızda ve operatörler ile ilgili değerlendirme yaptığımızda çağıracağımız fonksiyon
function operators(op) {
  return "+-*/.%".includes(op);
}
// işlemler içerisinde sürekli işlem ekranını temizlemek ve boş_değer başlangıcına geri dönmek için çağrılacak fonksiyon
function reset() {
  display.value = "";
  bos_deger = "";
}
// işlemler sonrası tüm değerleri sıfırlamak için çağıracağımız fonksiyon.
function resetAll() {
  bos_deger = "";
  display_ust.value = "";
  display.value = "";
}
//sınıfı number olan tüm öğeleri alıp click yapılanların textContentlerini buttonValue ya atıyoruz.
const number_siniflari = document.querySelectorAll(".number");
number_siniflari.forEach((value) => {
  value.addEventListener("click", (e) => {
    buttonValue = e.target.textContent;
    // Eşittir tuşuna basılınca yapılacak olanlar----------
    if (buttonValue === "=") {
      const son_tus = bos_deger.charAt(bos_deger.length - 1);
      if (display.value === "") {
        alert("Lütfen bir sayı giriniz");
      } else if (operators(son_tus)) {
        bos_deger = bos_deger.slice(0, -1);
        display.value = bos_deger;
      } else if (bos_deger.includes("÷")) {
        bos_deger = bos_deger.replace("÷", "/");
        bos_deger = eval(bos_deger);
        display_ust.value = bos_deger;
        reset();
      } else {
        bos_deger = eval(bos_deger);
        display_ust.value = bos_deger;
        reset();
      }
    } //eşittir tuşu bitişşşşş

    // ilk yazmada eğer * veya / işlemi tuşlarına basarsa işlem yaptırmamak için ;
    else if (bos_deger[0] === "*" || bos_deger[0] === "÷") {
      alert("Önce sayı girmelisiniz.");
      reset();
    }
    // AC butonuna basıldığında yapılacak işlemler
    else if (buttonValue === "AC") {
      resetAll();
    //DEL butonuna basılınca yapılacak işlemler.
    } else if (buttonValue === "DEL") {
      bos_deger = bos_deger.toString().slice(0, -1);
      display.value = bos_deger;
    } 
    //kullanıcının =,DEL,AC butonları dışında basacağı butonların işlevleri
    else {
      const son_tus = bos_deger.charAt(bos_deger.length - 1);
      //yüzdelik alınacak sayıdan önce yüzdelik butonuna basarsa uyarı verecek.
      if (operators(son_tus) && buttonValue === "%") {
        alert("Önce bir sayı giriniz.");
        display.value = "";
        //sayı tuşlayıp yüzdeliğe basarsa hesap yapacak
      } else if (!operators(son_tus) && buttonValue === "%") {
        bos_deger = (parseFloat(bos_deger) / 100).toString();
        display_ust.value = bos_deger;
       reset();
      } else if (!operators(son_tus) && operators(buttonValue)) {
            
        if (
          bos_deger.includes(".") &&
          buttonValue === "." 
        ) 
        {   bos_deger += buttonValue;
            display.value = bos_deger;
       
        } else if(bos_deger.includes(".") &&
        buttonValue === "." ){
    
        }
        
        else {
          bos_deger += buttonValue;
          display.value = bos_deger;
          
        }
      } else if (operators(son_tus) && operators(buttonValue)) {
       
        if (buttonValue !== ".") {
          bos_deger = bos_deger.slice(0, -1) + buttonValue;
          display.value = bos_deger;
        }
      } else {
        bos_deger += buttonValue;
        display.value = bos_deger;
      }
    }
  });
});
display.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        display.value==="" ? alert("Lütfen işlem için sayı ve operatör belirtiniz"):hesapla();
    }
})

function hesapla(){
    bos_deger=eval(display.value);
    display_ust.value=bos_deger;
    display.value="";
}
//input içerisine sadece rakam ve operatörlerin yazılabilmesini istiyorum
function sadecerakam(){
    const inputelement=document.getElementById("sonuc");
    let inputValue=inputelement.value;
    inputValue=inputValue.replace(/[^0-9+\-*÷/.]/g, '');
    inputelement.value=inputValue;
}