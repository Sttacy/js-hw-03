const credits = 23580
const price =  300
const amount = prompt('кількість телевізорів, які хочете купити')
if(amount === null){
    console.log('Операцію скасовано!' );
} else{
   const totalPrice = price * amount 
   if(credits < totalPrice){
    console.log('Недостатньо коштів на рахунку!');
} else{
    const left = credits - totalPrice
    console.log(`Ви купили ${amount} телевізорів, на рахунку залишилось ${left} кредитів`);
}
}

