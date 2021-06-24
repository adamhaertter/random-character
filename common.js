function generate(suffix){
		var boxes = document.querySelectorAll('input[type="checkbox"][ class="'+suffix+'_boxes"]:checked');
		var randomIndex = Math.floor(Math.random()*boxes.length);
		var selectedName = boxes.item(randomIndex).name
		
		var outImg = document.getElementById('oimg_'+suffix);
		outImg.alt=selectedName;
		outImg.src="img/portrait/"+selectedName+".png";
		outImg.hidden=false;
		
		var outLab = document.getElementById('olab_'+suffix);
		outLab.innerHTML = selectedName;
		outLab.hidden = false;
	}
	
function toggle(theDiv) {
		var charName = theDiv.name;
		try {
		var divBox = document.querySelectorAll('input[class="char_boxes"][name="'+charName+'"]');
		} catch(e) {
			console.log("Problem enountered while querying for "+charName);
		}
		divBox = divBox.item(0);
		if(divBox.checked == true) {
			theDiv.style.backgroundColor = "#ACACAC";
			divBox.checked = false;
		} else {
			theDiv.style.backgroundColor = "#39e6a6";
			divBox.checked = true;
		}
	}

window.onload = function loadIcons(){
		var iconImages = document.querySelectorAll('img[class="char_icons"]');
		
		for(var i = 0; i < iconImages.length; i++){
			iconImages.item(i).src = "img/icon/"+iconImages.item(i).name+".png";
			iconImages.item(i).alt="Here";
		}
	}