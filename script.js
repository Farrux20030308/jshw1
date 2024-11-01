let age = prompt('Введите свой возраст: ');

if (age <= 18 && age>0) {
    alert("Вам надо учиться!");
}else if (age > 18 && age<=50 ) {
    alert("Вам нужно работать!")
}else if(age > 50 && age <= 59){
    alert("Вам скоро на пенсию")
}else if(age > 59 && age <= 100){
    alert("Вы пенсионер!")
}else{
    alert("Что-то пошло не так.")
}