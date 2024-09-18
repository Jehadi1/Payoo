// console.log('This is Me')

document.getElementById('btn-log')
        .addEventListener('click', function(event){
            event.preventDefault();
            // console.log('This is Me')

            const phnNum = document.getElementById('phn-num').value; 
            console.log(phnNum);

            const phnNumber = document.getElementById('phn-number').value; 
            console.log(phnNumber);
        })