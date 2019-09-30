$(function(){
        graph('.back-end-graph',[
            {'name':'Django','val':'10','dx':8,'dy':2},
            {'name':'Nginx','val':'7', 'dx':13,'dy':-4},
            {'name':'Laravel','val':'3', 'dx':8,'dy':7},
            {'name':'PHP','val':'2', 'dx':20,'dy':-8},
            {'name':'node.js','val':'2', 'dx':9,'dy':2},
        ]);
        graph('.front-end-graph',[
            {'name':'riot.js','val':'10', 'dx':-3,'dy':-1},
            {'name':'HTML5','val':'8', 'dx':-5,'dy':5},
            {'name':'Javascript','val':'7', 'dx':-10,'dy':-1},
            {'name':'CSS/SASS','val':'6', 'dx':-10,'dy':3},
            {'name':'Angular.js','val':'6', 'dx':-10,'dy':5},
            {'name':'React','val':'6', 'dx':-2,'dy':-2},
            {'name':'jquery','val':'4', 'dx':-4,'dy':1},
        ]);
        graph('.data-graph',[
            {'name':'d3.js','val':'10', 'dx':15,'dy':-6},
            {'name':'Scraping','val':'8', 'dx':5,'dy':8},
            {'name':'Pandas','val':'7', 'dx':10,'dy':3},
            {'name':'Scikit','val':'6', 'dx':14,'dy':-2},
            {'name':'Matplotlib','val':'4', 'dx':3,'dy':8},
        ]);
        graph('.math-graph',[
            {'name':'Lin. Algebra','val':'10', 'dx':0,'dy':4},
            {'name':'Calculus','val':'8', 'dx':8,'dy':2},
            {'name':'Statistics','val':'5', 'dx':4,'dy':6},
            {'name':'Data science','val':'4', 'dx':-2,'dy':7},
            {'name':'Game Theory','val':'3', 'dx':0,'dy':0},
        ]);
        graph('.misc-graph',[
            {'name':'Python','val':'10', 'dx':9, 'dy':0},
            {'name':'Linux','val':'6', 'dx':15,'dy':-3},
            {'name':'C++','val':'4', 'dx':17,'dy':-4},
            {'name':'FORTRAN','val':'3', 'dx':3,'dy':8},
            {'name':'DevOps','val':'3', 'dx':8,'dy':3},
        ]);
})


function graph(selector,dataset){
    var w = 600;
    var h = 300;

    var svg = d3.select(selector)
    .append("svg")
    .attr("width", w)
    .attr("height", h);

    var bars = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("fill", "#00B16A")
    .attr("x", function(d, i) {
        return (i + .5) * (w / dataset.length) - 15;
    })
    .attr("y", h - 50)
    .attr("width", 30)
    .attr("height", 0);

    bars.transition()
    .duration(1000)
    .delay(100)
    .attr("y", function(d) {
        return h - 50 - (d.val * 25);  
    })
    .attr("height", function(d) {
        return d.val * 25;
    })

    var xLabels = svg.selectAll('text.label')
    .data(dataset)
    .enter()
    .append('text')
    // .attr('x',function(d,i){return i * (w/dataset.length)}
    .attr('y', h-25)
    .attr('transform',function(d,i){return 'translate(' + (i * (w/dataset.length) - 160 + (d.dx ? d.dx : 0)) + ',' + (100 + (d.dy ? d.dy : 0)) + ') rotate(-45)'})
    .attr('fill','#bbbbbb')
    .attr('class','label')
    .text(function(d){ return d.name })

}

function route_to(e){
    window.location = e;
}