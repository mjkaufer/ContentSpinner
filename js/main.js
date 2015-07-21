function $(id) {
	return document.getElementById(id);
}

var props = [{
	color: "#e74c3c",
	content: "Lorem"
}, {
	color: "#e67e22",
	content: "Ipsum"
}, {
	color: "#f1c40f",
	content: "Dolor"
}, {
	color: "#2ecc71",
	content: "Sit"
}, {
	color: "#1abc9c",
	content: "Amet"
}, {
	color: "#3498db",
	content: "Consectetur"
}, {
	color: "#9b59b6",
	content: "Adipiscing"
}, {
	color: "#34495e",
	content: "Elit."
}]

var container = $('container')
var containerContents = $('container-contents')
var squares = document.getElementsByClassName('square');

for (var i = 0; i < 2; i++)
  updateSquare(squares[i], props[i])

var lastRotationArray = [180, 0]
var current = 2;
var animating = false;
var time = 800;

$('main').onclick = step

function updateSquare(square, prop){
  square.style.backgroundColor = prop.color
  square.children[0].innerHTML = prop.content
}

function step(){
	if (!animating) {
		animating = true;
		Velocity(containerContents, {
			rotateZ: lastRotationArray
		}, {
			duration: time,
			queue: false,
			//easing: [.68,.17,.07,1.27]
			//easing: [.04,.12,.07,1.27]
			easing: [.27,.23,.07,1.27]
		}).then(function() {
			animating = false;
			lastRotationArray = lastRotationArray.map(function(e) {
				return (e + 180)
			})

			var square = squares[(current) % squares.length];
			var prop = props[current % props.length];

			updateSquare(square, prop)

			current++;
			
		})
	}
}