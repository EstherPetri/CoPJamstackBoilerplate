function setPoints(){
    localStorage.setItem('points', 0);
}

function countingPoints(points, lastpage){    
    var point = Number(points);
    var old = Number(localStorage.getItem('points'));
    localStorage.setItem("points", old+point);
    alert(localStorage.getItem('points'));
    if (lastpage == true){
        console.log('true');
        var totalPoints = localStorage.getItem('points');
        console.log(totalPoints);
        if(totalPoints < 7){
            window.location.href = "/results/3";
        }
        if(totalPoints < 10 && totalPoints > 6){
            window.location.href = "/results/1";
        }
        if(totalPoints < 13 && totalPoints > 9){
            window.location.href = "/results/4";
        }
        if(totalPoints > 12){
            window.location.href = "/results/2";
        }
    }
}