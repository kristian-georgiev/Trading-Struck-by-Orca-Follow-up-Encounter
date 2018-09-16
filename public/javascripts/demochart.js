function loadData(){
    // mock data rn
    const dateList = [new Date(2017, 08, 16), new Date(2017, 08, 17), new Date(2017, 08, 18), new Date(2017, 08, 19), new Date(2018, 00, 01)];
    const stockNamesList = ["Stock 1", "Stock 2"];
    const stockPricesList = [[280, 250, 340, 300], [180, 150, 240, 200]];

    return [dateList, stockNamesList, stockPricesList];
}

function createChart(data, ctx){
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
}

function main(){

    const loadedData = loadData();

    const dateList = loadedData[0]
    const stockNamesList = loadedData[1]
    const stockPricesList = loadedData[2]

    colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

    const data = {
        labels: dateList,
        datasets: [],
    }

    // rendering each stock's prices on the graph
    for (i = 0; i < stockPricesList.length; i ++){
        data.datasets.push(
            {
            fill: false,
            label: stockNamesList[i],
            data: stockPricesList[i],
            borderColor: colors[i % colors.length - 1],
            backgroundColor: colors[i % colors.length - 1],
            lineTension: 0,
            }
        )
    }

    const ctx = document.getElementById('myChart').getContext('2d');

    createChart(data, ctx);
    

}

main();