//car physics
//road generation
//sensors
// collision detection
// neural network
// genetic algorithm

const carCanvas= document.getElementById('carCanvas');
carCanvas.width=200;
const networkCanvas= document.getElementById('networkCanvas');
networkCanvas.width=300;

const carCtx= carCanvas.getContext("2d");
const networkCtx= networkCanvas.getContext("2d");

const road= new road(carCanvas.width/2,carCanvas.width*0.9);
const car = Car(road.getLaneCenter(1),100,30,50,"AI");
//lets add traffic using arrays
const traffic=[
    new Car (road.getLaneCenter(1),-100,30,50,"DUMMY,2")
];
animate();
function animate(){
    
    for(let i=0; i<traffic.length; i++){
        traffic[1].update(road.borders,[]);
    }
    
    car.update(road.borders,traffic);

    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;
    
    ctx.traslate(0,-car.y+carCanvas.height*0.7);

    road.draw(ctx);
    for (let i=0; i<traffic.length; i++){
        traffic[i].draw(ctx,"red");
    }
    car.draw(ctx,"blue");

    ctx.restore();
    requestAnimationFrame(animate);
}
