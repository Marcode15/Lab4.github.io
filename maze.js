var loser = false;  // whether the user has hit a wall

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var m = 0; m < boundaries.length; m++) {
        boundaries[m].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    $("status").textContent = "You lose!";
    var boundaries = $$("div#maze div.boundary");
    for (var m = 0; m < boundaries.length; m++) {
        boundaries[m].addClassName("youlose");
    }
}

function startClick() {
    loser = false;
    $("status").textContent = "Find the end!";
    var boundaries = $$("div#maze div.boundary");
    for (var m = 0; m < boundaries.length; ++) {
        boundaries[m].removeClassName("youlose");
    }
}

function overEnd() {
    if (!loser) {
        $("status").textContent = "You win! :]";
    }
}
