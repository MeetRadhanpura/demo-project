let root = document.documentElement;
var s = document.getElementById("myRange");

s.addEventListener("input", function(e){
    let color = 'rgb(0,0,0)';
    let range = parseInt(e.target.value)
    let range2;
    console.log(range2, "range", range);
    if (range > 50){
        range2 = 100 - range
    }else{
        range2 = range - 100;
    }
    color = `linear-gradient(to right, rgb(255,69,0) ${range}%, rgb(0,0,0) ${range2}%)`
    if (range === 1){
        color = 'rgb(0,0,0)';
    }
        root.style.setProperty('--car-color', color);
});