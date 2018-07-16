var slideIndex = 1;
showDivsMen(slideIndex);

function plusDivsMen(n) {
    showDivsMen(slideIndex += n);

}

function showDivsMen(n) {
    var slider = document.getElementsByClassName('slider_men');
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
    document.getElementById('numberMen').innerHTML = slideIndex;
}



showDivsWomen(slideIndex);

function plusDivsWomen(n) {
    showDivsWomen(slideIndex += n);
}

function showDivsWomen(n) {
    var slider = document.getElementsByClassName("slider_women");
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
    document.getElementById('numberWomen').innerHTML = slideIndex;
}

showDivsChildren(slideIndex);

function plusDivsChildren(n) {
    showDivsChildren(slideIndex += n);
}

function showDivsChildren(n) {
    var slider = document.getElementsByClassName("slider_children");
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
    document.getElementById('numberChildren').innerHTML = slideIndex;
}

function showOrHide(sectionId, checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    var section = document.getElementById(sectionId);
    if (checkbox.checked) {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function allShow() {
var sections = document.getElementsByClassName('section_two');
for(let i=0; i<sections.length; i++){
    sections[i].style.display = "block";
}
}