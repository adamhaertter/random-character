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
	
function toggle(theDiv, prefix) {
		var name = theDiv.name;
		try {
		var divBox = document.querySelectorAll('input[class="'+prefix+'_boxes"][name="'+name+'"]');
		} catch(e) {
			console.log("Problem enountered while querying for "+name);
		}
		divBox = divBox.item(0);
		if(divBox.checked == true) {
			// Turn the box gray, now disabled
			theDiv.style.backgroundColor = "#ACACAC";
			divBox.checked = false;
		} else {
			// Reset the box to its original color
			if(theDiv.classList[1] == 'weap_element') {
				theDiv.style.backgroundColor = 'coral';
			} else {
				theDiv.style.backgroundColor = "#39e6a6";	
			}
			divBox.checked = true;
		}
	}

window.onload = function loadIcons(){
		var iconImages = document.querySelectorAll(".char_icons,.weap_icons");
		
		for(var i = 0; i < iconImages.length; i++){
			iconImages.item(i).src = "img/icon/"+iconImages.item(i).name+".png";
			iconImages.item(i).alt="Here";
		}
	}