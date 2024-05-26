
let display = document.getElementById("sonuc");
let display_ust = document.getElementById("sonuc-ust");
let bos_deger = "";


function hideElements() {
  const kaybol = document.querySelector(".kapak");
  const kaybol_button = document.querySelector(".cal-button");
  kaybol.style.display = "none";
  kaybol_button.style.display = "none";
}

function operators(op) {
  return "+-*/.%".includes(op);
}

function reset() {
  display.value = "";
  bos_deger = "";
}

function resetAll() {
  bos_deger = "";
  display_ust.value = "";
  display.value = "";
}

const number_siniflari = document.querySelectorAll(".number");
number_siniflari.forEach((value) => {
  value.addEventListener("click", (e) => {
    buttonValue = e.target.textContent;

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
    }

    else if (bos_deger[0] === "*" || bos_deger[0] === "÷") {
      alert("Önce sayı girmelisiniz.");
      reset();
    }
    else if (buttonValue === "AC") {
      resetAll();
    } else if (buttonValue === "DEL") {
      bos_deger = bos_deger.toString().slice(0, -1);
      display.value = bos_deger;
    } 
    else {
      const son_tus = bos_deger.charAt(bos_deger.length - 1);
      if (operators(son_tus) && buttonValue === "%") {
        alert("Önce bir sayı giriniz.");
        display.value = "";
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
function sadecerakam(){
    const inputelement=document.getElementById("sonuc");
    let inputValue=inputelement.value;
    inputValue=inputValue.replace(/[^0-9+\-*÷/.]/g, '');
    inputelement.value=inputValue;
}