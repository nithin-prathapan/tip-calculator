const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfpeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfpeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tipPercentage = Number(tipInput.value) / 100;
  const tipAmount = bill * tipPercentage;
  const total = tipAmount + bill;
  const perPersonTotal = total / numberOfPeople;
  console.log(perPersonTotal);

  perPersonTotalDiv.innerText=`$${perPersonTotal.toFixed(2)}`;

};

const increasePeople=()=>{
  numberOfPeople+=1
  numberOfpeopleDiv.innerText=numberOfPeople
  calculateBill();
}
const decreasePeople=()=>{
  if (numberOfPeople <= 1) {
    return
  }
  numberOfPeople-=1
  numberOfpeopleDiv.innerHTML=numberOfPeople
  calculateBill();
}