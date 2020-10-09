let btnsLeftNav = document.querySelectorAll(".leftNavButton");

function textColorChange() {
    let elemId = $(this).attr('aria-controls');
    let elem = document.getElementById(elemId);
    if (getComputedStyle(elem).display == 'none') {
        for (let i = 0; i < btnsLeftNav.length; i++)
            $(btnsLeftNav[i]).css("color", "black");
        $(this).css("color", "#f16d7f");
    }
    else
        $(this).css("color", "black");
}

for (let i = 0; i < btnsLeftNav.length; i++) {
    let btn = btnsLeftNav[i];
    btn.addEventListener("click", textColorChange);
    if ($(btn).attr('aria-expanded') == 'true')
        $(btn).css("color", "#f16d7f");
}