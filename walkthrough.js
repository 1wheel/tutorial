var body = d3.select('body')

d3.select('body').append('h1')

d3.select('h1')

d3.select('h1').attr('id', 'title')

d3.select('#title').text('Intro to Binding Data To The DOM')

d3.select('h1').style('color', 'steelblue')


d3.select('h1')
    .style('color', 'steelblue')
    .text('Intro to Binding Data to the DOM')

d3.select('body').append('h2').text('adam.pearce@quovo.com')
d3.select('body').append('h2').text('roadtolarissa.com')
d3.select('body').append('h2').text('@adamrpearce')
d3.select('body').append('h2').text('github.com/1wheel/tutorial')

//only one selected!
d3.select('h2')

d3.selectAll('h2')

d3.selectAll('h2, h1')

d3.select('h2').style('color', 'red')

d3.selectAll('h2')

d3.selectAll('h2, h1')

d3.selectAll('h2, h1').style('color', function(d, i){ return i % 2 ? 'steelblue' : 'orange'; })

d3.selectAll('h2, h1')
    .style('color', function(d, i){
      console.log({data: d, index: i, node: this});
      return i < 2 ? 'steelblue' : 'orange';
  })

//transitions!
d3.selectAll('h2, h1').transition()
    .style('color', function(d, i){ return i < 2 ? 'steelblue' : 'orange'; })


colors = ['black', 'grey', 'navy', 'pink']


d3.selectAll('h2, h1')
    .style('color', function(d, i){
      console.log({data: d, index: i, node: this});
      return i < 2 ? 'steelblue' : 'orange';
  })


d3.selectAll('h2, h1').style('color', function(d, i){ return d; })

colors = ['black', 'grey', 'navy', 'pink', 'tan']

d3.selectAll('h2, h1').data(colors)

colors = ['black', 'grey', 'navy', 'pink', 'tan', 'green']

d3.selectAll('h2, h1').data(colors)

d3.selectAll('h2, h1').data(colors).enter().append('h2').text('New H2')
//not appended to body

d3.select($0).data()
//use magnifier to inspect

d3.selectAll('h2, h1').data([1, 2, 4])

d3.selectAll('h2, h1').data()
//old data still bound

d3.selectAll('h2, h1').data([1, 2, 4]).exit().style('color', 'red')

d3.selectAll('h2, h1').data([1, 2, 4]).exit().transition().duration(2000).style('color', 'grey').remove()

d3.selectAll('h2').remove()


d3.select('body').data(data).enter().append('div').text(function(d, i){ return i + '  ' + d; })
//starts with 1! That can't be right

d3.selectAll('div').remove()

//data - is defined in speech.js

d3.select('body').selectAll('div').data(data).enter().append('div').text(function(d, i){ return i + '  ' + d; })


//color the text based on length
scale = d3.scale.linear()
scale.domain()
scale.range()
scale.range([0, 100])
scale(.1)
scale(.9)
scale.range(['red', 'blue'])
scale(0)
scale(.5)
scale(1)
d3.selectAll('div').remove();
[1,2,3,4].map(function(d){ return d*3; })
data.map(function(d){ return d.length; })
d3.extent(data.map(function(d){ return d.length; }))
scale.domain(d3.extent(data.map(function(d){ return d.length; })))
d3.selectAll('div').style('color', function(d){ return scale(d.length); })

scale = d3.scale.linear()
    .domain(d3.extent(data.map(function(d){ return d.length; })))
    .range(['red', 'blue'])

widthScale = scale.copy().range([100, 500])

d3.selectAll('div').text(null).style('height', '100px').style('background', function(d){ return scale(d.length); })

d3.selectAll('div').transition().style('width', function(d){ return widthScale(d.length) + 'px'; })

eScale = widthScale.copy().domain(d3.extent(data.map(function(d){ return d.match(/e/g).length; })))
d3.selectAll('div').transition().style('width', function(d){ return eScale(d.match(/e/g).length) + 'px'; })

//don't want line styles, reset page
d3.selectAll('div').remove()
d3.select('body').selectAll('div').data(data).enter().append('div').text(function(d, i){ return i + '  ' + d; }).attr('class', 'containerDiv')
d3.selectAll('.containerDiv').selectAll('.barDiv').data(function(d){ return d.split(/[\.!]/); })

d3.selectAll('.containerDiv').selectAll('.barDiv')
    .data(function(d){ return d.split(/[\.!]/); }).enter()
  .append('div')
     .attr('class', 'barDiv')
     .style('height', '20px')
     .style('margin-top', '5px')
     .style('background', 'steelblue')
     .style('width', function(d){ return d.length + 'px'; })

d3.selectAll('.barDiv')
		.text(function(d, i){ return i + ' ' + d.slice(0, 10); })

d3.selectAll('.containerDiv').selectAll('.barDiv')
		.text(function(d, i){ return i + ' ' + d.slice(0, 10); })


d3.select('body')



var width = 400,
    height = 400; 

var svg = d3.select('body')
  .append('svg')
    .attr('width', width)
    .attr('height', height)

svg.append('rect')
        .attr('x', 50)
        .attr('width', 100)
        .attr('y', 50)
        .attr('height', 100)
          .on('mouseover', function(){
            d3.select(this)
              .transition()
                .attr('x', Math.random()*width)
                .attr('y', Math.random()*height)
              .transition()
                .attr('fill', 'rgb(' + Math.random()*255 +', 100, 100)')
          })

svg.selectAll('circle')
    .data(d3.range(0, width, 10)).enter()
  .append('circle')
    .attr('cx', function(d){ return d; })
    .attr('cy', function(d){ return Math.sin(d/50)*200 + 200})
    .attr('r', 5)
    
svg.selectAll('circle')
  .transition()
    .attr('cy', function(d){ return Math.sin(d/20)*10 + 200; })

svg.selectAll('circle').on('mouseover', function(){
  d3.select(this)
    .transition()
      .attr('cy', function(d){ return Math.sin(d/20)*200 + 200; })
});


function addRect(){
  svg.append('rect')
          .attr('x', 50)
          .attr('width', 100)
          .attr('y', 50)
          .attr('height', 100)
          .on('mouseover', function(){
            addRect();
            d3.select(this)
              .transition()
                .attr('x', Math.random()*width)
                .attr('y', Math.random()*height)
              .transition()
                .attr('fill', 'rgb(' + Math.random()*255 +', 100, 100)')
          })
}

addRect();


function addRect(size, x, y){
  svg.append('rect')
          .attr('x', x)
          .attr('width', size)
          .attr('y', y)
          .attr('height', size)
          .on('mouseover', function(){
            addRect(size/2, x, y);
            d3.select(this)
              .transition()
                .attr('x', Math.random()*width)
                .attr('y', Math.random()*height)
              .transition()
                .attr('fill', 'rgb(' + Math.random()*255 +', 100, 100)')
          })
}

addRect(100, 200, 200);


