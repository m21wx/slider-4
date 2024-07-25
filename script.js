	

	let left = document.querySelector('.slider-icons .left');
	let right = document.querySelector('.slider-icons .right');
	let inmatin = document.querySelector('.slider-icons .inmatin');
	let sliderImg = document.querySelectorAll('.slider-4 .slider img');
	
	let imgWidth = sliderImg[0].clientWidth;
	window.onresize=()=>{
		
		imgWidth = sliderImg[0].clientWidth
	}
	let intrval;
	let index = 0;
	left.addEventListener('click',()=>{
		index--
		
		clearInterval(intrval)
		mySlider()	
	})
	right.addEventListener('click',()=>{
		index++
	  
		clearInterval(intrval) 
		mySlider()
	})
	inmatin.addEventListener('click',()=>{

	inmatin.classList.toggle('interval');
	if(inmatin.classList.contains('interval')){
		anmited()
		inmatin.innerHTML=`<i class="fa-solid fa-circle-stop"></i>`;
	}else{
		inmatin.innerHTML=`<i class="fa-solid fa-pause"></i>`;
			clearInterval(intrval)
	}

	})

	function mySlider(){
		if( index > sliderImg.length - 1 ){
			index =0
		}else if(index <0){
			index = sliderImg.length - 1
			
		}
		sliderImg.forEach(e=>{
			e.style.transform =`translateX(${(index) * -imgWidth}px)`;
		})
			

	}
	mySlider()
	function anmited(){
		intrval= setInterval(()=>{
			index++
			 mySlider()	 
		},3000)	
}