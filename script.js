let money = +prompt("Ваш бюджет на месяц", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


for (let i = 0; i < 2; i++) {
     let a = prompt("Ведите обязательно статью расходов в этом месяце", ''),
         b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a))==='string' &&(typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      appData.moneyPerDay == 0 ,  i--
      }
    };


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень доставка");
} else if ( appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
}  else {
    console.log("Произошла ошибка");
};








