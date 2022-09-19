

// stats chart graphick
anychart.onDocumentReady(function() {
    let chart = anychart.column();
    let money = chart.column([
          {x: 'Jan', value: 10100, name: '${value}$'},
          {x: 'Feb', value: 1500},
          {x: 'Mar', value: 14500},
          {x: 'Apr', value: 7500},
          {x: 'Mei', value: 4900},
          {x: 'Jun', value: 15000},
          {x: 'Jul', value: 5800},
          {x: 'Aug', value: 9000},
          {x: 'Sep', value: 15100},
          {x: 'Oct', value: 10500},
          {x: 'Nov', value: 5400},
          {x: 'Des', value: 12700}
])
    // create the chart
    money.color('#725CFF')
    money.hovered({fill: '#1C1E23'});
    money.pointWidth(15)


    // set the chart title
    chart.title("");
    chart.container("stats-diagram");
    chart.draw();
  });


// stats year buttons
let currentYear = 2022
let statsYear = document.getElementById("year-st")
const leftArrow = document.getElementById("left-arrow-btn")
const rightArrow = document.getElementById("right-arrow-btn")

leftArrow.addEventListener("click", function(){
    currentYear = currentYear - 1;
    statsYear.innerHTML = currentYear
})

rightArrow.addEventListener("click", function(){
    currentYear = currentYear + 1;
    statsYear.innerHTML = currentYear
})

//date from balance
dateEl = document.getElementById("date")
let currentDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
dateEl.innerHTML = `From Aug 04, 2022 to ${currentDate}`

//balance buttons
const topUpBtn = document.getElementById("balance-topUp")
const transferBtn = document.getElementById("balance-Transfer")
topUpBtn.addEventListener("click", function(){
    let topUp = prompt(`How much money you want to top up?`, 100)
        alert(`You toping up ${topUp}$ of your money!`);
        topUp1 = parseInt(topUp)
        money = money + topUp1
        moneyEl.innerHTML = `$${money} <span id="valute">( USD )</span>`
})

transferBtn.addEventListener("click", function(){
    let transfer = prompt(`How much money you want to transfer?`, 100)
        alert(`You transfer ${transfer}$ of your money!`);
        money = money - transfer
        moneyEl.innerHTML = `$${money} <span id="valute">( USD )</span>`
})

//balance-ReALY BalAnCe
let moneyEl = document.getElementById("money")
let money = 1000000;




//notification button from Top Bar
let notif = document.getElementById("notif")

