var slideIndex = 1;
showDivsMen(slideIndex);

function plusDivsMen(n, className) {
    showDivsMen(slideIndex += n);

}

function showDivsMen(n, className) {
    var slider = document.getElementsByClassName(className);
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


function showOrHide(sectionId, checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    var section = document.getElementById(sectionId);
    if (checkbox.checked) {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}