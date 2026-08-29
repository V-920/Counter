const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");

const counts = document.getElementById("count")
let count = 0;

inc.onclick = function(){
    count ++
    counts.textContent = count
}

dec.onclick = function(){
    if (count <= 0) {
        count = 0
    } else {
        count --
        
    }
    counts.textContent = count
}

reset.onclick = function(){
    count = 0
    counts.textContent = count
}