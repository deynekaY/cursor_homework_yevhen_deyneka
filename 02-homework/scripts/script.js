let n = prompt('Введіть число', '');
if (n > 0) {
    alert('Число прийнято!');
} else if (n < 0) {
    prompt('Ви ввели невірне число', '');
} else if (n == '') {
    prompt('Ви забули ввести число', '');
} else {
    prompt('Ви не ввели число - ведіть число', '');
}



// document.writeln('<p><b>Чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни</b> = ' + clearEarn() + '</p>');