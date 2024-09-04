//console.log('connected');

document.getElementById('deposit-button').addEventListener('click', function (){
   // console.log('deposit button clicked');
    
    // get deposit input from html tag and convert it number
    const depositInputField = document.getElementById("deposit-input")
    //console.log(depositInputField);
    
    const inputText = depositInputField.value;
    //console.log(inputText);
    //console.log(inputText + 5);
    const newDepositAmount = parseFloat(inputText);
    //console.log(newDepositAmount + 5);
    //console.log(newDepositAmount);

    // get previous deposit numbeer and convert it number
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal);
    const previousDepositText = depositTotal.innerText
   // console.log(previousDepositText);
    const previousDepositAmount = parseFloat(previousDepositText)

    // add previous deposit with new deposit and update it in previous deposit html tag
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal

    // clear the input value
    depositInputField.value = ''


    // update new balance
    const previousBalanceTotal = document.getElementById('balace-total');
    //console.log(previousBalanceTotal);
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    previousBalanceTotal.innerText = newBalanceTotal;

})

document.getElementById("withdra-button").addEventListener('click', function(){
    // get withdraw input from html tag and convert it number
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(withdrawInputText)
    //console.log(newWithdrawAmount);

    // get previous withdraw number and convert it number
    const withdrawTotal = document.getElementById('withdraw-total')
    //console.log(withdrawTotal);
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(withdrawTotalText)
    //console.log(previousWithdrawTotalAmount);

    // add previous withdraw with new withdraw and update it in previous withdraw html tag
    const newWithdrawTotal = previousWithdrawTotalAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal


    //update new balance
    const previousBalanceTotal = document.getElementById('balace-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    previousBalanceTotal.innerText = newBalanceTotal;



    //clear the input value
    withdrawInputField.value = ''

})