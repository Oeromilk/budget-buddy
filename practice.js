var exampleCanvas = document.getElementById("exampleChart");
var userCanvas = document.getElementById("userChart");
var monthlyIncomeEle = document.getElementById("monthlyIncome");
var rentEle = document.getElementById("rent");
var carBillEle = document.getElementById("carBill");
var savingsEle = document.getElementById("savings");
var calcButton = document.getElementById("calculateBudget");

function calculateBudget(budget) {
  var exampleBudget = [budget * 0.3, budget * 0.1, budget * 0.1, budget * 0.6];
  return (exampleBudget)
}

function userBudget(income, rent, car, savings){

  //[income - rent, income - car, income - savings, income - (rent + car + savings)]
  //[rent / income, car / income, savings / income, (income - rent - car - savings) / income]
  const userData = {
    datasets: [{
      data: [rent / income, car / income, savings / income, (income - rent - car - savings) / income],
      backgroundColor: [
        'rgba(98, 217, 110, 0.5)',
        'rgba(217, 152, 98, 0.5)',
        'rgba(98, 164, 217, 0.5)',
        'rgba(207, 57, 60, 0.5)'
      ],
      borderColor: [
        'rgba(98, 217, 110, 1)',
        'rgba(217, 152, 98, 1)',
        'rgba(98, 164, 217, 1)',
        'rgba(207, 57, 60, 1)'
      ]
    }],
    labels: ['Rent/Mortgage', 'Car Bill', 'Savings', 'Everything Else']
  };

  var userChart = new Chart(userCanvas, {
    type: 'doughnut',
    data: userData
  });

  var exampleData = {
    datasets: [{
      data: calculateBudget(income),
      backgroundColor: [
        'rgba(98, 217, 110, 0.5)',
        'rgba(217, 152, 98, 0.5)',
        'rgba(98, 164, 217, 0.5)',
        'rgba(207, 57, 60, 0.5)'
      ],
      borderColor: [
        'rgba(98, 217, 110, 1)',
        'rgba(217, 152, 98, 1)',
        'rgba(98, 164, 217, 1)',
        'rgba(207, 57, 60, 1)'
      ]
    }],
    labels: ['Rent/Mortgage', 'Car Bill', 'Savings', 'Everything Else']
  };

  var exampleChart = new Chart(exampleCanvas, {
    type: 'doughnut',
    data: exampleData
  });
};



calcButton.addEventListener('click', function(event){
  event.preventDefault();
  console.log(userBudget(monthlyIncomeEle.value, rentEle.value, carBillEle.value, savingsEle.value));
});
