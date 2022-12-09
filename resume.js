var navManuAnchorTags = document.querySelectorAll('.nav-manu a');
// console.log(navManuAnchorTags);
var scrollsmooth = document.getElementsByClassName("scroll");
var current = 0;

for (var i = 0; i < navManuAnchorTags.length; i++) {
    navManuAnchorTags[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        var scroll = setInterval(function () {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            // console.log(targetSectionCoordinates.top);
            if (targetSectionID == "contact") {
                if (targetSectionCoordinates.top <= 280) {
                    clearInterval(scroll);
                    return;
                }
            }
            else if (targetSectionCoordinates.top <= 30) {
                clearInterval(scroll);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

var tapTotop = document.getElementsByClassName("tap-to-top");
console.log(tapTotop);
for (var i = 0; i < tapTotop.length; i++) {
    tapTotop[i].addEventListener("click", function(event){
        event.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
