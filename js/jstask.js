//1. 2 ədədin fərqini hesablayan function yazın,əgər 1-ci rəqəm ikincidən böyükdürsə.
// function myNumber(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1 - num2);
//   }
// }
// myNumber(10, 5); //output:5

//2. Əgər ədəd cüt ədəddirsə,onun kök altı dəyərini hesablayan function yazın
// function funcNumber(num) {
//   if (num % 2 == 0) {
//     console.log(Math.sqrt(num)); //output:8
//   }
// }
// funcNumber(64);

//3. Ekrandan daxil edilən(promp) data-nın cüt olub olmadığını yoxlayan metod yazın.
// let myCount = prompt("Add number ..");
// if (myCount % 2 == 0) {
//   console.log((myCount += " cüt ədəddir"));
// } else {
//   console.log("Cüt ədəd deyil.Yenidən yoxlayın!");
// }

//4. Ekrandan daxil edən rəqəmin tipinin Nan olub olmadığını yoxlayan method yazın
// var a = "5";
// if (isNaN(a)) {
//   console.log("This is NaN type");
// } else {
//   console.log("this is integer type");
// } //output:this is integer type

//5. Bir mətndə olan boşluqların sayını hesablayan function yazın.
// function countSpaces(text) {
//   let spaceCount = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       spaceCount++;
//     }
//   }
//   return spaceCount;
// }
// let text = "How to count space in JavaScript?";
// let spaceCount = countSpaces(text);
// console.log("Boşlıqların sayı: " + spaceCount); //output : 5

//6. Əgər mətn mövcuddursa onun icərisindəki , -lərin sayını hesablayan method yazın.
// function countHyphen(text) {
//   let hyphenCount = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === "-") {
//       hyphenCount++;
//     }
//   }
//   return hyphenCount;
// }
// let text = "How to count hyphen in Java-Script?";
// let hyphenCount = countHyphen(text);
// console.log("Boşlıqların sayı: " + hyphenCount); //output : 1

//7. Mətnin 2 və 6 -cı indexində olan hissəni kəsib ekrana çıxarın
// let jsText = "javascript language is a wonderful";
// let jsSliced = jsText.slice(2, 7);
// console.log(jsSliced);  //output:vascr

// 8. Mətndəki boşluqların sayına görə bölüb array-ə çevirin.
// function splitBySpaces(text) {
//       let wordsArray = text.split(" ");
//       wordsArray = wordsArray.filter((word) => word !== "");
//       return wordsArray;
//     }
//     let text = "The filter() method does not change the original array";
//     let wordsArray = splitBySpaces(text);
//     console.log(wordsArray);

//9. Mətnin bütün hərflərini böyük edən bir method yazın
// let myString = "We are learning front end programming";
// let upperCase = myString.toLocaleUpperCase();
// console.log(upperCase);

//10. Mətnin bütün hərflərini kiçik edən bir method yazın
// let myString = " CREATE A METHOD THAT MAKES ALL LETTERS OF THE TEXT LOWERCASE";
// let lowerCase = myString.toLocaleLowerCase();
// console.log(lowerCase);

//11. Bir mətn daxil edin və 4-cü indexdə yerləşən char-ın   'n' hərfi olub olmadığını yoxlayın.
// let text =
// "charAt() returns the character at a specified index (position) in a string.";
// function charText() {
// if (text.charAt(4) === "n") {
//   return true;
// } else {
//   return false;
// }
// }     //output:false

// 12. Bir array teyin et və sonuncu index-dəki dəyər ilə 1-ci indexdəki dəyərin cəmini başka bir stringdə ekrana çıxar.
// let numbers = [10, 20, 30, 40, 50];
// let firstArray = numbers[1];
// let lastArray = numbers[numbers.length - 1];
// let sum = firstArray + lastArray;

// console.log(
//   "1-ci index dəyəri: " +
//     firstArray +
//     ", sonuncu index dəyəri: " +
//     lastArray +
//     ", cəmi: " +
//     sum
// );  //output: 1-ci index dəyəri: 20, sonuncu index dəyəri: 50, cəmi: 70

//13. Bir array təyin et və sonuncu index-ə 'Salam' deyerini menimset
// let customArray = ["Banana", "Orange", "Apple", "Mango", "pear"];
// customArray.push("Salam");
// console.log(customArray); // output:(5) ['Banana', 'Orange', 'Apple', 'Mango', 'Salam']

//14. Array təyin et və uzunluğunu hesablayan bir alqorihtm yaz.
// let myArray = ["1", "56", "3", "Seymur", "6", 45, "7", "Tural"];
// console.log(myArray.length); // output:8

// 15. Bir mətndəki sözlərin sayını hesablayan alqorithm yaz.
// function countWord(text) {
//   let word = text.split(" ");
//   return word.length;
// }
// let text = "JavaScript Program to Count
// Words of a String";
// console.log(countWord(text)); //output:8

// /16. İki random eded teyin et ve onlarin cemini hesablayan alqorithm yaz
// function randomNumSum() {
//   let num1 = Math.floor(Math.random() * 10);
//   let num2 = Math.floor(Math.random() * 100);
//   let sum = num1 + num2;
//   return sum;
// }
// console.log(randomNumSum());  //output:random

//17. 5-dən 26-ya qədər ədədlərin ədədi ortasını tapıb çap edin
// let sum = 0;
// let num = 0;
// for (let i = 5; i < 26; i++) {
//   sum += i;
//   num++;
// }
// let numAvarage = sum / num;
// console.log(numAvarage);

//18. 10 ilə 100 arasındakı ədədlərdən yalnız cüt olanları mətn formatında ekrana çıxarın
// let num = "";
// for (i = 10; i < 100; i++) {
//   if (i % 2 == 0) {
//     num += i + ",";
//   }
// }
// console.log(num);

//19. 0-dan 40-a qədər ədədlər içərisindən 10 a bölünən ədədləri ekrana çıxarın
// for (i = 0; i < 40; i++) {
//     if (i % 10 == 0) {
//       console.log(i);
//     }
//   }

//20. Hər hansı bir ədəd daxil edin və onun 3-ə bölünən olub olmadığını yoxlayan bir alqorithm yazın
// let myCount = prompt("Add number ..");
// if (myCount % 3 == 0) {
//   console.log((myCount += "- bu rəqəm 3 ə qalıqsız bölünür"));
// } else {
//   console.log(false);
// }

//21. 30 ilə 40 arasındakı ədədlərin cəmi ilə hasilinin ədədi ortasını tapın
// let sum = 0;
// let num = 1;
// for (let i = 30; i < 40; i++) {
//   sum += i;
//   num *= i;
// }
// let numAvarage = (sum + num) / 2;
// console.log(numAvarage);

// 22. 0-dan 100-ə qədər ədədlərdən 10 və ya 70 istisna olmaqla digərlərini ekranda string formasında çap edin, hemcinin stringin uzunlugunu gosterin.
// for (i = 2; i < 36; i++) {
//     if (i === 10 || i === 70) {
//       continue;
//     }
//     {
//       console.log(i);
//     }
//   }

//23. 0-dan 100-ə qədər ədədlərdən 20-dən kiçik və 50-dən böyük olanların ayrılıqda cəmini hesablayın
// let a = 0;
// let b = 0;
// for (i = 0; i < 100; i++) {
//   if (i < 20) {
//     a += i;
//   } else if (i > 50) {
//     b += i;
//   }
// }
// console.log("Summary a = " + a);  //output : Summary a = 190
// console.log("Summary b = " + b);  //output : Summary b = 3675

//24. İcerisinde 5 string tipli data olan array teyin edin, ve uzunlugu 5-den yuxari olan datalari baska bir arraya menimsedib ekrana cixarin
// let wildAnimal = ["Leopard", "Jaguar", "Wolf", "Cobra", "Bear"];
// let pushArray = [];
// for (let j = 0; j < wildAnimal.length; j++) {
//   if (wildAnimal[j].length > 5) {
//     pushArray.push(wildAnimal[j]);
//   }
// }
// console.log(pushArray);  //output : (2) ['Leopard', 'Jaguar']

//25. Bir metn teyin edin ve icerisinde reqem olub olmadigini yoxlayin, eger reqem varsa hemin reqemleri baska bir stringe menimsedin,diger metnden ise silin.

// 26. Bir metn teyin edin ve içerisinde olan "i" hərflərinin hamısını silin
// let mySplit = "Split the characters, including spaces";
// console.log(mySplit.split("i"));

//27. Ekrandan bir eded daxil edin ve bu ededin palindrom olub olmadigini yoxlayan alqorithm yazin.

// let num = +prompt("Please enter the number");
// function checkPalindrome() {
//   let number = num.toString();
//   let reversedNumber = number.split("").reverse().join("");
//   if (number === reversedNumber) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkPalindrome());

//28. Bir deyer gonderen method yazin ve 100-defe ekranda cap edin
// function showText() {
//   console.log("This message is repeated 100 times ");
// }
// for (i = 0; i < 100; i++) {
//   console.log(i);
//   showText();
// }

//29. Iki array teyin edin ve ikisini bir arraya menimsedib console-da cixarin
// let carName = ["Bmw", "Mercedes", "Audi", "Kia", "Hundai"];
// let carCountry = ["Germany", "Korea"];
// let carInfo = carName.concat(carCountry);
// console.log(carInfo);  //output:(7) ['Bmw', 'Mercedes', 'Audi', 'Kia', 'Hundai', 'Germany', 'Korea']

//30. Bir array teyin edin ve icerisinde olan cut ededlerin cemini tapin.
// let arrNumber = [12, 14, 15, 17, 18, 21];
// let sum = 0;
// for (let i = 0; i < arrNumber.length; i++) {
//   if (arrNumber[i] % 2 == 0) {
//     sum += arrNumber[i];
//   }
// }
// console.log(sum); //output:44
