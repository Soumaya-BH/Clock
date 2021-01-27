var	MyDiv=document.querySelector('.clock');
	heure=document.querySelector('.heure');
	minute=document.querySelector('.minute');
	seconde=document.querySelector('.seconde');


	function ShowTime(){

		'use strict';

		 var MyDate= new Date();
	     var Hours=MyDate.getHours();
		 var Minutes=MyDate.getMinutes();
		 var Secondes= MyDate.getSeconds();

	if(Hours<10){
		Hours="0"+Hours;
	}
	if(Minutes<10){
		Minutes="0"+Minutes;
	}
	if(Secondes<10){
		Secondes="0"+Secondes;
	}

MyDiv.innerHTML=Hours+":"+Minutes+":"+Secondes;
}



	function RunTime(){

		'use strict';

		 var MyDate= new Date();
	     var Hours=MyDate.getHours();
		 var Minutes=MyDate.getMinutes();
		 var Secondes= MyDate.getSeconds();


var secdeg=(Secondes / 60 * 360) + 90;

var mindeg=(Minutes / 60 * 360) + 90;

var heudeg=(Hours / 60 * 360) + 90;

seconde.style.transform=`rotate(${secdeg}deg)`;
minute.style.transform=`rotate(${mindeg}deg)`;

heure.style.transform=`rotate(${heudeg}deg)`;

}
window.onload=function() {
	'use strict';
	setInterval(ShowTime , 10);
	setInterval(RunTime , 10);

};