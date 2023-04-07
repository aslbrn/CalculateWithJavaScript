var input = document.getElementById('input'),
     number = document.querySelectorAll('.numbers div'),
     operator = document.querySelectorAll('.operator div'),
     result = document.getElementById('result'),
     clear = document.getElementById('clear'),
     resultDisplayed= false;
     // C ye her basıldığında ekranı temizlemesi için 'click handler' ekleyelim. 
     clear.addEventListener('click', function(){
        input.innerHTML = '';
     })

     // leftPanel dakilerin nasıl davranacağını belirleyelim:

     for(let i=0; i<number.length-1; i++){
        number[i].addEventListener('click', function(e){
            var currentString=input.innerHTML;
            var lastCharacter = currentString[currentString.length-1];
            if (resultDisplayed === false) {
                input.innerHTML+=e.target.innerHTML
            }else {
                input.innerHTML='';
                input.innerHTML += e.target.innerHTML;
                resultDisplayed = false;
            }
        })
     }

     // operatorlara tıklandığında nasıl davrandığını belirleyelim:

     for (let i=0; i<operator.length; i++){
        

        operator[i].addEventListener('click', function(e){

            var currentString = input.innerHTML;
            var lastCharacter=currentString[currentString.length-1];

            if(lastCharacter === '+' || lastCharacter === '-' || lastCharacter === '÷' || lastCharacter === 'X' ){
                input.innerHTML = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            }else if (currentString.length == 0){
                alert('Lütfen önce sayı giriniz.')
            }else {
                input.innerHTML += e.target.innerHTML;
            }
        })
     }

     result.addEventListener("click", function(){
        var currentString= input.innerHTML;
        var numbers = currentString.split(/\+|\-|\×|\÷/g);

        if (currentString.includes('+')){ input.innerHTML = Number(numbers[0])+Number(numbers[1]); } 
        
        else if (currentString.includes('-')){ input.innerHTML = Number(numbers[0])-Number(numbers[1]); } 
        else if (currentString.includes('*')){ input.innerHTML = Number(numbers[0])*Number(numbers[1]); } 
        else if (currentString.includes('÷')){ input.innerHTML = Number(numbers[0])/Number(numbers[1]);}
        
    })