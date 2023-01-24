const stock = location.href.split('-')[1]

var newData

var stockArray = []

window.onload = function() {
  var dataPoints1 = [],
    dataPoints2 = [],
    dataPoints3 = [];
  var stockChart = new CanvasJS.StockChart("chartContainer", {
    exportEnabled: true,
    theme: "light2",
    title: {
      text: `${stock} Stock Chart`
    },
    charts: [{
      toolTip: {
        shared: true
      },
      axisX: {
        lineThickness: 5,
        tickLength: 0,
        labelFormatter: function(e) {
          return "";
        },
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          labelFormatter: function(e) {
            return ""
          }
        }
      },
      axisY2: {
        title: `${stock} Price`,
        prefix: "$"
      },
      legend: {
        verticalAlign: "top",
        horizontalAlign: "left"
      },
      data: [{
        name: "Price (in USD)",
        yValueFormatString: "$#,###.##",
        axisYType: "secondary",
        type: "candlestick",
        risingColor: "green",
        fallingColor: "red",
        dataPoints: dataPoints1
      }]
    }, {
      height: 100,
      toolTip: {
        shared: true
      },
      axisX: {
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY2: {
        prefix: "$",
        title: `${stock}/USD`
      },
      legend: {
        horizontalAlign: "left"
      },
      data: [{
        yValueFormatString: "$#,###.##",
        axisYType: "secondary",
        name: `${stock}/USD`,
        dataPoints: dataPoints2
      }]
    }],
    navigator: {
      data: [{
        color: "grey",
        dataPoints: dataPoints3
      }],
      slider: {
        minimum: new Date(2018, 06, 01),
        maximum: new Date(2018, 08, 01)
      }
    }
  });
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}&apikey=8CXNEA1SIH9L6U8N`)
    // fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=8CXNEA1SIH9L6U8N`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(data);
      newData = data['Time Series (Daily)']
      for (const property in newData) {
        const temp = {
          date: property,
          open: parseInt(newData[property]['1. open']),
          high: parseInt(newData[property]['2. high']),
          low: parseInt(newData[property]['3. low']),
          close: parseInt(newData[property]['4. close']),
          volume: parseInt(newData[property]['6. volume'])
        }
        stockArray.push(temp)
      }
      data = stockArray
      for (var i = 0; i < data.length; i++) {
        dataPoints1.push({
          x: new Date(data[i].date),
          y: [Number(data[i].open), Number(data[i].high), Number(data[i].low), Number(data[i].close)],
          color: data[i].open < data[i].close ? "green" : "red"
        });;
        dataPoints2.push({
          x: new Date(data[i].date),
          y: Number(data[i].volume),
          color: data[i].open < data[i].close ? "green" : "red"
        });
        dataPoints3.push({
          x: new Date(data[i].date),
          y: Number(data[i].close)
        });
      }
      stockChart.render();
    })
    .catch(function(error) {
      console.log(Error(error));
    });
}

