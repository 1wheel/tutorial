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

