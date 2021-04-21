// uy ishi 1
var answer = prompt('Kim bu?')
if(answer == 'Doniyor'){
    alert('Hello Boss')
} else{
    alert('Hello Guest')
}
//  uy ishi 2

var age = prompt('Yoshingiz nechida?')
if (age > 0 && age <= 18) {
    alert('o\'qishingiz kerak!')
}else if (age > 18 &&  age <= 50 ){
    alert('ishlashingiz kerak')
}else if (age > 50 && age <= 59){
    alert('pensiyaga chiqishingiz kerak')
} else if (age > 59 && age <= 100){
    alert('pensiyadasiz, agar tirik bo\'lsangiz ')
} else{
    alert ('nimadir notori ketdi')
}

//  uy ishi 3 
 
var a = +prompt('1-son')
var b = +prompt('2-son')
var c = +prompt('3-son')
// 123 213 132
// 321 231 312
if (a  < b && b < c || a > b && b > c){
    alert('orta son b yani' +b)
}else if (a > b && a < b || ca < b && a > c ){
    alert('orta son a yani '+a)
} else if('c > a && c< b || c > b && c < a'){
    alert('orta son c yani' +c)
}

//  uy ishi 4
var num = + prompt('son kiriting')
var i = 0 
while(i <= num) {
    console.log(i++);
}