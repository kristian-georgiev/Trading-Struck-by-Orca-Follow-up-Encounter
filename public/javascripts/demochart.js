

for x in 

const ctx = document.getElementById('myChart').getContext('2d');

const data = {

    // Labels should be Date objects
    labels: [new Date(2017, 08, 16), new Date(2017, 08, 17), new Date(2017, 08, 18), new Date(2017, 08, 19), new Date(2018, 00, 01)],
    datasets: [{
        fill: false,
        label: 'Stock 1',
        data: [280, 250, 340, 300],
        borderColor: '#fe8b36',
        backgroundColor: '#fe8b36',
        lineTension: 0,
    }, 
{
        fill: false,
        label: 'Stock 2',
        data: [180, 150, 240, 200],
        borderColor: '#00000',
        backgroundColor: '#000000',
        lineTension: 0,
    }
    ]
}
const options = {
    type: 'line',
    data: data,
    options: {
        fill: false,
        responsive: true,
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Time",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Stock Prices ($)",
                }
            }]
        }
    }
}    

const chart = new Chart(ctx, options);