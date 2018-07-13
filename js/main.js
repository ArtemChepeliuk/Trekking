var slideIndex = 1;
showDivs(slideIndex);

function plusDivsMen(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider_men");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "flex";
    document.getElementById('number').innerHTML = slideIndex;
}




function showOrHide(Men, sectionTwo) {
    var checkbox = document.getElementById('Men');
    var section = document.getElementById("sectionTwo");
    if (checkbox.checked) {
        section.style.display = "block";
    } else {
        section.style.display = "none";

    }
}