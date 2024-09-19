// console.log('This is Me')

document.getElementById('btn-log')
        .addEventListener('click', function(event){
            event.preventDefault();
            // console.log('This is Me')

            const phnNum = document.getElementById('phn-num').value; 
            const pinNum = document.getElementById('pin-num').value; 
            // console.log(phnNum, pinNum);

            if(phnNum === '017' && pinNum === '1234'){
                console.log('You are login')
                window.location.href = './home.html'
            }
            else{
                alert('Worng Number and pin')
            }
        })