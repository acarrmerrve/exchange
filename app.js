const amount = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency= new Currency("USD","TRY");
const ui= new UI(firstSelect,secondSelect);
eventListeners();
function eventListeners(){
    amount.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){
            currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
            ui.changeFirst();
    };
    secondSelect.onchange = function(){
        currency.changeFirstCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}
function exchangeCurrency() {
    currency.changeAmount(amount.value);
    currency.exchange()
    .then(result=>{
         ui.displayResult(result);})
        .catch(err=>console.log(err));
    }
