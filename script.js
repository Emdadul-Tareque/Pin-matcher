
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var value = Number(num);
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

function resetDoneNotify(){

    var notify = document.getElementById('done-notify');
    notify.style.display = 'none';
    
}

function resetAlertNotify(){
    var notify = document.getElementById('alert-notify');
    notify.style.display = 'none';
}

var number = document.getElementsByClassName("button");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN & this.id !="clear" & this.id !="backspace"){
			output=output+this.id;
			printOutput(output);
		}
		else if(this.id=="clear"){
            resetDoneNotify();
            resetAlertNotify();
            printOutput("");
          
        }
        
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            resetAlertNotify();
            resetDoneNotify();
            if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
	});
}

const generateBtn = document.getElementById("generate-button");
generateBtn.addEventListener('click', function(){
    var random = Math.floor(1000 + Math.random() * 9000);
    var number = parseInt(random);
    document.getElementById("display-pin").innerText = number;
    console.log(number);
    
})

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    var number = document.getElementById('output-value').innerText;
    var pin = document.getElementById('display-pin').innerText;
    console.log(number);
    console.log(pin);
    if (number == pin){
        var notify = document.getElementById('done-notify');
        notify.style.display = 'block';
    
    }

    else{
        var notify = document.getElementById('alert-notify');
        notify.style.display = 'block';
        var attempt = document.getElementById('try').innerText;
        attempt = Number(attempt);
        attempt = attempt - 1;
        console.log(attempt);
        document.getElementById('try').innerText = attempt;
        if (attempt == 0){
            const submitBtn = document.getElementById('submit');
            submitBtn.style.display = 'none';
            window.alert("Wrong attempt !! please reload page and try again");
        }
    }
})