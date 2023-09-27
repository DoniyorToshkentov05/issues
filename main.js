

//masala 1   masala 1   masala 1   masala 1   masala 1   masala 1   masala 1   masala 1   masala 1   masala 1   masala 1   masala 1   masala 1 masala 1masala 1masala 1 

//shart  teskari matn
//'world'  =>  'dlrow'
//'word'   =>  'drow'


// function teskariMatn(matn) {
//     return matn.split('').reverse().join('');
//   }
  
//   var matn1 = 'Hello';
//   var matn2 = 'word';
  
//   var teskariMatn1 = teskariMatn(matn1);
//   var teskariMatn2 = teskariMatn(matn2);
  
//   console.log(teskariMatn1); 
//   console.log(teskariMatn2); 

//masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 masala 2 

// shart Satrdagi bo'shliqlarni olib tashlaydigan funktsiyani yozing, so'ngra natijaviy qatorni qaytaring.

// function boShliqlarniOlibTashlash(matn) {
//     return matn.replace(/\s+/g, '');
//   }
  
//  
//   var matn = "Bu matnda bo'shliqlar bor";
//   var natija = boShliqlarniOlibTashlash(matn);
//   console.log(natija); 

//masala 3  masala 3  masala 3  masala 3  masala 3  masala 3  masala 3  masala 3  masala 3  masala 3  masala 3  masala 3  masala 3   masala 3   masala 3   masala 3  

//shart Bizga raqamni (butun son) satrga aylantira oladigan funksiya kerak.


// function raqamniSatrgaAylantirish(raqam) {
  
//     return raqam.toString();
//     }
//     var raqam = 12344636;
//     var satr = raqamniSatrgaAylantirish(raqam);
//     console.log(satr);

//masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 masala 4 

// Sizning vazifangiz oxirgi to'rtta belgidan tashqari hammasini o'zgartiradigan funktsiyani yozishdir 




// function maskify(matn) {
  
 
//     if (matn.length <= 4) {
//         return matn;
//       }
    
//       var oxirgiTortBelgi = matn.slice(-4);
//       var ozgartirilganMatn = '#'.repeat(matn.length - 4) + oxirgiTortBelgi;
    
//       return ozgartirilganMatn;
//     }
    
//     var eskiMatn = "8600140466349405";
//     var yangiMatn = maskify(eskiMatn);
//     console.log(yangiMatn);


//masala 5 mamasala 5 masala 5 masala 5 masala 5 masala 5 masala 5 masala 5 masala 5 masala 5 masala 5 sala 5 masala 5 masala 5 masala 5 masala 5 masala 5 

// shart Butun son va satrni parametr sifatida qabul qiladigan va aynan takrorlangan martalar qatorini qaytaradigan funksiya yozing .

// var matn = "Salom ";
// var takrorlanganMatn = matn.repeat(10);
// console.log(takrorlanganMatn);


//masala 6 masala 6 masala 6 masala 6 masala 6masala 6masala 6masala 6masala 6masala 6masala 6masala 6masala 6masala 6masala 6masala 6masala 6 masala 6masala 6

// shart 1 dan songacha bo'lgan har bir sonning yig'indisini topadigan dastur tuzing. Raqam har doim 0 dan katta musbat butun son bo'ladi.

// function yigindiniTopshir(n) {
//     if (n < 1) {
     
//     }
  
//     var yigindi = 0;
  
//     for (var i = 1; i <= n; i++) {
//       yigindi += i;
//     }
  
//     return yigindi;
//   }
  
//   var n = 8; 
//   var natija = yigindiniTopshir(n);
//   console.log("1 dan", n, "gacha sonlar yig'indisi:", natija);

//masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 masala 7 

// shart: Timmi va Sara o'zlarini sevib qolishgan deb o'ylashadi, lekin ular qaerda yashayotganini faqat bir gul tergandan 
//keyin bilishadi. Agar gullardan birining gulbarglari juft, ikkinchisining gulbarglari toq bo‘lsa, demak, ular sevib qolgan.
//Har bir gulning gulbarglari sonini oladigan funksiyani yozing va agar ular oshiq bo'lsa haqiqiy, bo'lmasa yolg'onga qaytadi.

// function gullarHaqiqiyomi(gul1, gul2) {
//     var gul1Gulbarglar = gul1 % 2;
//     var gul2Gulbarglar = gul2 % 2;
  

//   return gul1Gulbarglar !== gul2Gulbarglar;
//   }
  

//   var gul1 = 38; // 3 gulbarg
//   var gul2 = 45; // 4 gulbarg
//   var natija = gullarHaqiqiyomi(gul1, gul2);
//   console.log("Haqiqiymi:", natija);

//masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 masala 8 

// shar: Bizga satrni raqamga aylantira oladigan funksiya kerak. Bunga erishishning qanday usullarini bilasiz?


// var satr = "42";
// var raqam = parseInt(satr);
// console.log(raqam); // 42


//masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 masala 9 

// shart: Yechimni shunday yakunlangki, agar birinchi berilgan argument (satr)
// 2-argument (shuningdek, qator) bilan tugasa, u haqiqatni qaytaradi.

// function tekshirishVaHaqiqatniQaytarish(satr, qator) {
//     if (satr === qator) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
 
//   var satr = "salom";
//   var qator = "salom";
//   var natija = tekshirishVaHaqiqatniQaytarish(satr, qator);
//   console.log(natija); 
  

//masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 masala 10 

// shart : Bu kata berilgan sonni agar juft son bo'lsa sakkizga, aks holda to'qqizga ko'paytirish haqida.


// function juftYokiToqqizKopaytir(son) {
//     if (son % 2 === 0) {
//       return son * 8;
//     } else {
//       return son * 9;
//     }
//   }
  
//   // Test qilish
//   var son1 = 10;
//   var son2 = 7;

//   var natija1 = juftYokiToqqizKopaytir(son1);
//   var natija2 = juftYokiToqqizKopaytir(son2);
  
//   console.log("Natija 1:", natija1); // 48 (6 * 8)
//   console.log("Natija 2:", natija2); // 63 (7 * 9)