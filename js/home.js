document.getElementById('add-money-btn')
        .addEventListener('click', function(event){
            event.preventDefault();
            // console.log('added money')
            const addAmount = document.getElementById('add-amount').value
            console.log(addAmount)
            const addPin = document.getElementById('add-pin').value
            console.log(addPin)
        })