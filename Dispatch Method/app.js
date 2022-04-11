// selection.dispatch(type, parameters(optional))


let circle1 = d3.select('svg circle');

circle1.on('radius', function(e, d){
    console.log(e);
    console.log(d);
    d3.select(this).attr('r', e.detail);
});

circle1.dispatch('radius', {
    detail: '40',
    cancelable: true,
    bubbles: true
});


let circles = d3.select('svg:nth-of-type(2)').selectAll('circle')
    .on('color', function(e){
        d3.select(this).style('fill', e.detail)
    });

circles.dispatch('color', function(d, i, n){
    // console.log(d);
    // console.log(i);
    // console.log(n);
    return {
        detail: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,

    }
});
