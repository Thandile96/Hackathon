//labels on the x-axis
var doctors = ["Dr Mendu", "Dr Odingwe", "Dr Sahzman", "Dr Michaelson"];

var doctor = ["Dr Mendu", "Dr Odingwe", "Dr Sahzman", "Dr Michaelson"];
// data on the y-axis
var fees = [500, 380, 350, 400];

fees.color = "pink";
var rates = [4.5, 2.3, 3.5, 5];
var killos = [5.1, 3.2, 9, 11.2];
var avail = [9, 17, 20, 15];

var ctx = document.getElementById("theGraph");
var ptx = document.getElementById("reviews");
var xyz = document.getElementById("slots");
var qqq = document.getElementById("killos");

var graph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: doctors,
        datasets: [
            {
                data: fees,    
                label: "Doctors"
            },   
        ]   
    }
});

var theGraph = new Chart(ptx, {
    type: 'bar',
    data: {
        labels: doctor,
        datasets: [
            {
                data: rates,
                label: "Doctors"
                
            }     
        ] 
        
    }
});

var graph1 = new Chart(xyz, {
    type: 'bar',
    data: {
        labels: doctors,
        datasets: [
            {
                data: avail, 
                label: "Doctors"
            },   
        ]   
    }
});


var graph2 = new Chart(qqq, {
    type: 'bar',
    data: {
        labels: doctors,
        datasets: [
            {
                data: killos,
                label: "Doctors"     
            },   
        ]   
    }
});
