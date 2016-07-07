		var CHOICES = ["rock","paper","scissor"];
		var data = document.getElementsByClassName("play")[0].innerHTML;

		function game( choice){
			var comp = CHOICES[Math.floor((Math.random() * 3))];
			var user = CHOICES[choice];
			var result = "Draw";

			var re = user_won(user, comp);

			if(re==1){
				result = "You Won!!";
				document.body.style.backgroundColor = "#00f000";
				document.getElementById("center").style.backgroundColor = "#00f000";
				document.getElementById("comp").style.backgroundColor = "black";
				document.getElementById("user").style.backgroundColor = "blue";

			}
			else if (re==-1){
				result = "You Lost!!"
				document.body.style.backgroundColor = "grey";
				document.getElementById("center").style.backgroundColor = "grey";
				document.getElementById("comp").style.backgroundColor = "blue";
				document.getElementById("user").style.backgroundColor = "black";
			}
			else{
				document.body.style.backgroundColor = "#004456";
				document.getElementById("center").style.backgroundColor = "#004456";
				document.getElementById("user").style.backgroundColor = "black";
				document.getElementById("comp").style.backgroundColor = "black";
			}
			document.getElementsByClassName("choice")[0].innerHTML = "Comp: " +comp;
			document.getElementsByClassName("choice")[1].innerHTML = result;
			document.getElementsByClassName("choice")[2].innerHTML = "You: "+user;
			for(var i=0; i<=2; i++){
			document.getElementsByClassName("choice")[i].disabled = "disabled";
			document.getElementsByClassName("choice")[i].style.cursor = "default";
		}
			document.getElementById("try").innerHTML = "Try Again";
			document.getElementById("try").style.visibility = "visible";
		}

		function user_won(user, comp){
			if(user==comp){return 0;}
			if(user=="rock"){
				return (comp=="paper")? -1: 1;
			}

			else if(user=="paper"){
				return (comp=="scissor")? -1: 1;

			}

			return (comp=="rock")? -1: 1;
		}

		function reset(){
			document.getElementsByClassName("play")[0].innerHTML = data;
			document.body.style.backgroundColor = "#fafaaa";
			document.body.style.color = "black";
			for(var i=0; i<=2; i++){
			document.getElementsByClassName("choice")[i].disabled = "";
			document.getElementsByClassName("choice")[i].style.cursor = "link";
			}
		}


