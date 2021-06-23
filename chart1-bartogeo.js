var data = [{
    "code3": "CHN",
    "z": 11256,
    "code": "CN"
},
{
    "code3": "USA",
    "z": 5725,
    "code": "US"
},
{
    "code3": "IND",
    "z": 2622,
    "code": "IN"
},
{
    "code3": "RUS",
    "z": 1748,
    "code": "RU"
},
{
    "code3": "JPN",
    "z": 1199,
    "code": "JP"
},
{
    "code3": "DEU",
    "z": 753,
    "code": "DE"
},
{
    "code3": "DEU",
    "z": 753,
    "code": "DE"
},
{
    "code3": "KOR",
    "z": 695,
    "code": "KR"
},
{
    "code3": "SAU",
    "z": 625,
    "code": "SA"
},
{
    "code3": "CAN",
    "z": 594,
    "code": "SA"
},
{
    "code3": "IDN",
    "z": 558,
    "code": "SA"
},
];
Highcharts.mapChart('container', {
chart: {
  borderWidth: 1,
  map: 'custom/world'
},

title: {
  text: 'World CO2 emission by country'
},

subtitle: {
  text: 'Demo of Highcharts map with bubbles'
},

 series: [
 {
  name: 'Countries',
  color: '#E0E0E0',
  enableMouseTracking: false
}, 
        {
name: 'Country',
data: [
  ['cn', 1],
  ['us', 1],
  ['in', 1],
  ['jp', 1],
  ['ru', 1],
  ['de', 1],
  ['kr', 1],
  ['sa', 1],
  ['ca', 1],
  ['id', 1],
],
dataLabels: {
  enabled: true,
  
  formatter: function () {
    if (this.point.value) {
      return this.point.name;
    }
  }
},
      enableMouseTracking: false

},
{
  type: 'mapbubble',
  name: 'CO2 Emission',
  joinBy: ['iso-a3', 'code3'],
  data: data,
  minSize: 20,
  maxSize: '15%',
  tooltip: {
    pointFormat: '{point.properties.hc-a2}: {point.z}'
  }
}]
})