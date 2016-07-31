function phoneTotal(bankBalance){
  //phone price $100
  var phonePrice = 100;
  //tax rate .08%
  const tax = .08;
  //zero phones to start
  var phoneQuant = 0;
  //accessory $7/each
  var accessory = 7;
  //zero total cost to start
  var totalCost = 0;

  //how many $100 phones can be bought with
    //your account balance
      //how many times can you add a phone $100
        //within limit of bank balance
  for(i = 1; i < bankBalance; i+=100){
    phoneQuant+=1;
  }
  //phoneQuant to calculate accessory
  accessory = calcAccessory(accessory, phoneQuant);
  phonePrice = calcPhonePrice(phonePrice, phoneQuant);
  totalCost = preTaxCost(phonePrice, accessory);
  totalCost = taxCalculate(totalCost);
  console.log(totalCost);

  if(totalCost > bankBalance){
    console.log('cannot afford');
  }
  else{
    console.log('can afford');
  }

  totalCost = formulatePrice(totalCost);
  console.log(totalCost);
}

phoneTotal(900);

function taxCalculate(amt){
  return amt + (amt * .08);
}

function formulatePrice(amt){
  return "$" + amt.toFixed(2);
}

function calcAccessory(accessory, phoneQuant){
  return phoneQuant * accessory;
}

function calcPhonePrice(phonePrice, phoneQuant){
  return phonePrice * phoneQuant;
}

function preTaxCost(phonePrice, accessory){
  return phonePrice + accessory;
}
