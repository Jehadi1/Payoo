document.getElementById('add-money-btn')
        .addEventListener('click', function(event){
            event.preventDefault();


            const addAmount = document.getElementById('add-amount').value
            // console.log(typeof addAmount); 

            const addPin = document.getElementById('add-pin').value
            // console.log(typeof addPin);


            if(addPin === '1234'){
                // console.log(typeof'added Money')

                const balance = document.getElementById('current-amount').innerText
                // console.log(balance)

                const addMoneyNumber = parseFloat(addAmount);
                const balanceNumber  = parseFloat(balance);
                const upadateBalance = addMoneyNumber + balanceNumber;
                console.log(upadateBalance);

                document.getElementById('current-amount').innerText = upadateBalance;
            }
            else{
                alert('Worng Pin')
            }
        })