let policz = function(){
		
		//obydwa sa zdefiniowane
		if(calculation.currentNumb != null && calculation.prevNumb != null){
			calculation.currentNumb = parseInt(calculation.currentNumb);
			calculation.prevNumb = parseInt(calculation.prevNumb);
			let wynik;
			if(calculation.operator == "+"){
				wynik = calculation.prevNumb + calculation.currentNumb
			} else if(calculation.operator == "-") {
				wynik = calculation.prevNumb - calculation.currentNumb
			} else if(calculation.operator == "*") {
				wynik = calculation.prevNumb * calculation.currentNumb
			} else if(calculation.operator == "/") {
				if(calculation.currentNumb != 0){
					wynik = calculation.prevNumb / calculation.currentNumb
				}
				else{
					wynik = "You cannot divide by 0";
				}
			}
			calculation.currentNumb = null;
			calculation.prevNumb = null;
			calculation.operator = '';
			document.getElementById('ekran').value = wynik
			calculation.wynikCalc = wynik;
			calculation.afterCalc = true;
		}
		else if(calculation.currentNumb != null && calculation.prevNumb == null){
			let wynik = calculation.currentNumb
			calculation.currentNumb = null;
			calculation.prevNumb = null;
			calculation.operator = '';
			document.getElementById('ekran').value = wynik
			calculation.wynikCalc = wynik;
			calculation.afterCalc = true;
		} 	
		else if(calculation.currentNumb == null && calculation.prevNumb != null){
			let wynik = calculation.prevNumb;
			calculation.currentNumb = null;
			calculation.prevNumb = null;
			calculation.operator = '';
			document.getElementById('ekran').value = wynik
			calculation.wynikCalc = wynik;
			calculation.afterCalc = true;

		}

	}

let calculation ={
	prevNumb: null,
	operator: '',
	currentNumb: null,
	afterCalc: false,
	wynikCalc: null,
}



let ekran = document.getElementById('ekran')
let clear = document.getElementById('clearall')
clear.addEventListener('click', function(){
	if (ekran.value != 0 ){
		ekran.value = '';
		calculation.currentNumb = null;
		calculation.prevNumb = null;
		calculation.operator = '';
	}
})


	let opBut = document.getElementsByClassName('op')
	for (let i=0; i<opBut.length; i++){
		opBut[i].addEventListener('click', function(){
			if(calculation.afterCalc == true){ //wpisywanie po rowna sie
				calculation.currentNumb = calculation.wynikCalc
			}
			if(calculation.currentNumb != null && calculation.prevNumb != null){
				policz()
			}
			if(calculation.currentNumb != null){ //jezeli jest juz pierwsza liczba
				console.log("!!!!!")
				calculation.prevNumb = calculation.currentNumb;
				calculation.currentNumb = null;
			}
			if(calculation.currentNumb != null || calculation.prevNumb != null){
				calculation.operator = this.innerText
			}
			console.log(calculation)
		})

	}

	let sum = document.getElementById('sum')
	sum.addEventListener('click', policz)

let numberBut = document.getElementsByClassName('number') 
for (let i=0; i< numberBut.length; i++){
	numberBut[i].addEventListener('click', function(){
		calculation.wynikCalc = null;
		calculation.afterCalc = false;
		let number = this.innerText
		number = number.toString()
		if (calculation.currentNumb == null || calculation.currentNumb == "0"){
			calculation.currentNumb = number
		}
		else{				
			calculation.currentNumb += number
		}

		
		document.getElementById('ekran').value = calculation.currentNumb
	})

}
