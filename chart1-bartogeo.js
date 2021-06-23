
var H = Highcharts,
map = H.maps['custom/world-palestine-highres'],
chart;

// Add series with state capital bubbles
Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-capitals.json', function (json) {
var data = [];
json.forEach(function (p) {
  p.z = p.population;
  data.push(p);
});

chart = Highcharts.mapChart('container', {
  title: {
    text: 'Highcharts Maps lat/lon demo'
  },

  tooltip: {
    pointFormat: '{point.capital}, {point.parentState}<br>' +

      'Emission: {point.population}'
  },

 

  series: [{
    name: 'Basemap',
    mapData: map,
    borderColor: '#606060',
    nullColor: 'rgba(200, 200, 200, 0.2)',
    showInLegend: false
  }, {
    name: 'Separators',
    type: 'mapline',
    data: H.geojson(map, 'mapline'),
    color: '#101010',
    enableMouseTracking: false,
    showInLegend: false
  }, {
    type: 'mapbubble',
    dataLabels: {
      enabled: true,
      format: '{point.capital}'
    },
    name: 'Areas',
    data: data,
    maxSize: '12%',
    color: H.getOptions().colors[0]
  }]
});
});

// Display custom label with lat/lon next to crosshairs
document.getElementById('container').addEventListener('mousemove', function (e) {
var position;
if (chart) {
  if (!chart.lab) {
    chart.lab = chart.renderer.text('', 0, 0)
      .attr({
        zIndex: 5
      })
      .css({
        color: '#505050'
      })
      .add();
  }

  e = chart.pointer.normalize(e);
  position = chart.fromPointToLatLon({
    x: chart.xAxis[0].toValue(e.chartX),
    y: chart.yAxis[0].toValue(e.chartY)
  });

  
}
});

document.getElementById('container').addEventListener('mouseout', function () {
if (chart && chart.lab) {
  chart.lab.destroy();
  chart.lab = null;
}
});