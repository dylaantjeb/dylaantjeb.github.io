const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20}, 
        {x: 300, y: 10}, 
        {x: 500, y:100}, 
        {x: 750, y: -100},
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: 800, y: 0},
        {x: window.innerWidth, y: -250},

    ]

};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.plane', 1, {
        bezier: flightPath, 
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 9000,
    triggerHook: 1

});

setTween(tween);
addIndicatiors();
setPin('.animation');
addTo(controller);


/*
var text = document.getElementById('text')
        var shadow = '';
        for(var i = 0; i < 20; i++)
        {
            shadow +=(shadow? ',':'')+ -i*1+'px '+ i*1+'px 0 #d9d9d9'
        }
        text.style.textShadow = shadow;
*/
