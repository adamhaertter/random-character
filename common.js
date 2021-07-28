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
			if(prefix == 'weap') {
				theDiv.style.backgroundColor = "coral";
			} else if(prefix == 'map'){
				theDiv.style.backgroundColor = "cornflowerblue";
			} else {
				theDiv.style.backgroundColor = "mediumaquamarine";	
			}
			divBox.checked = true;
		}
	}

function toggleSet(setName) {
	// Query for all the buttons
	var listElements = document.querySelectorAll('button[class="list_element"]');
	
	for(var i = 0; i < listElements.length; i++){
		//Grab the hidden checkbox of each character
		var checkbox = document.querySelector('input[type=checkbox][class=char_boxes][name="'+listElements[i].name+'"]');
		
		//Should it be on or off according to the const list?
		if(setName.includes(listElements[i].name) && checkbox.checked == false) {
			toggle(listElements[i], 'char');
		} else if (setName.includes(listElements[i].name)==false && checkbox.checked == true) {
			toggle(listElements[i], 'char');
		}
	}
}

window.onload = function loadIcons(){
		var iconImages = document.querySelectorAll(".char_icons,.weap_icons,.map_icons");
		
		for(var i = 0; i < iconImages.length; i++){
			iconImages.item(i).src = "img/icon/"+iconImages.item(i).name+".png";
			iconImages.item(i).alt="Here";
		}
	}