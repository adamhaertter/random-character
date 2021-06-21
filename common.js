function generate(){
		var boxes = document.querySelectorAll('input[type="checkbox"][ class="char_boxes"]:checked');
		var randomIndex = Math.floor(Math.random()*boxes.length);
		var selectedName = boxes.item(randomIndex).name
		
		document.getElementById('outputImage').alt=selectedName;
		document.getElementById('outputImage').src="img/portrait/"+selectedName+".png";
		document.getElementById('outputImage').hidden=false;
		
		document.getElementById('outputLabel').innerHTML = selectedName;
		document.getElementById('outputLabel').hidden = false;
	}
	
function toggle(theDiv) {
		var charName = theDiv.textContent;
		var divBox = document.querySelectorAll('input[ class="char_boxes"][name='+charName+']');
		divBox = divBox.item(0);
		if(divBox.checked == true) {
			theDiv.style.backgroundColor = "#ACACAC";
			divBox.checked = false;
		} else {
			theDiv.style.backgroundColor = "greenyellow";
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