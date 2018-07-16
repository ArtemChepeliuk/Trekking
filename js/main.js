var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n, slider, number) {
    showDivs(slideIndex += n, slider, number);
}


function showDivs(n, slider, number) {
    var slider = document.getElementsByClassName(slider);
    if (n > slider.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slider.length
    };
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    slider[slideIndex - 1].style.display = "flex";
    document.getElementById(number).innerHTML = slideIndex;
}


function showOrHide(sectionId, checkboxId) {
    let checkbox = document.getElementById(checkboxId);
    let section = document.getElementById(sectionId);
    if (checkbox.checked) {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function allShow() {
let sections = document.getElementsByClassName('section_two');
for(let i=0; i<sections.length; i++){
    sections[i].style.display = "block";
}
}
plusDivs(0,'sliderMen');