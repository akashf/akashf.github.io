var i = 0;
var txt = "I'm currently working as a Associate System Engineer  at TCS Pune . I'm actively looking for frontend developer in any account. I like watching movies and playing games in free time.";
var speed = 50;

function typefunction() {
  if (i < txt.length) {
    document.getElementById("mainPara").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typefunction, speed);
  }
}
function myfunction(){
	alert("AAgye AAP");
}
function instaRoute(){
	window.open("https://www.instagram.com/the_curious.one/");
};
function gitRoute(){
	window.open("https://github.com/akashf");
};
function linkRoute(){
	window.open("https://www.linkedin.com/in/akash-pandey-1a25a6138/");
};
function mailRoute(){
	window.open("mailto:akashpandey2098@gmail.com");
};
function hacker(){
	window.open("https://www.hackerearth.com/@akashpandey123");
};
function routeToHome(){
	const bodyMain = document.getElementById('bodyMain');
    bodyMain.scrollIntoView();
}
function routeToProject(){
	const project = document.getElementById('project');
    project.scrollIntoView();
}
function routeToContact(){
	const contact = document.getElementById('contact');
	contact.scrollIntoView(); 	
}