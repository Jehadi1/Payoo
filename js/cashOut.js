document.getElementById('cash-out-btn')
        .addEventListener('click', function(event){
            event.preventDefault();
            //  console.log('Cash out button')

             const cashOut = document.getElementById('add-cash-out').value
             const cashOutMoney = parseFloat(cashOut);
             const pinAdd = document.getElementById('add-cash-pin').value
            //  console.log(cashOut, pinAdd);

             if(pinAdd === '1234'){
                // console.log('Money is low')

                const balance = document.getElementById('current-amount').innerText
                const balanceIs = parseFloat(balance)
                const newbalance = balanceIs - cashOutMoney
                console.log(newbalance);

                document.getElementById('current-amount').innerText = newbalance;
             }
             else{
                alert('Worng Pin')
             }
        })