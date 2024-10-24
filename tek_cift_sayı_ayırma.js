let tekSayilar = [];
let ciftSayilar = [];

let sayi1 = parseInt(prompt("1. sayıyı giriniz."));
let sayi2 = parseInt(prompt("2. sayıyı giriniz."));
let sayi3 = parseInt(prompt("3. sayıyı giriniz."));
let sayi4 = parseInt(prompt("4. sayıyı giriniz."));
let sayi5 = parseInt(prompt("5. sayıyı giriniz."));

if (sayi1 % 2 === 0) {
  ciftSayilar.push(sayi1);
} else {
  tekSayilar.push(sayi1);
}
if (sayi2 % 2 === 0) {
  ciftSayilar.push(sayi2);
} else {
  tekSayilar.push(sayi2);
}
if (sayi3 % 2 === 0) {
  ciftSayilar.push(sayi3);
} else {
  tekSayilar.push(sayi3);
}
if (sayi4 % 2 === 0) {
  ciftSayilar.push(sayi4);
} else {
  tekSayilar.push(sayi4);
}

if (sayi5 % 2 === 0) {
  ciftSayilar.push(sayi5);
} else {
  tekSayilar.push(sayi5);
}

console.log(`Girilen çift sayılar = "${ciftSayilar}"`);
console.log(`Girilen tek sayılar = "${tekSayilar}"`);
