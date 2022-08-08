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

const N=100;
const cars=generateCars(N);

//const car = Car(road.getLaneCenter(1),100,30,50,"AI");
//lets add traffic using arrays
const traffic=[
    new Car (road.getLaneCenter(1),-100,30,50,"DUMMY,2")
];
animate();

function generateCars(N){
     const cars=[];
     for(let i=0;i<=N;i++){
         cars.push(new Car(road.getLaneCenter(1),100,30,50,"AI"));
     } 
    return cars;
}

function animate(time){
    
    for(let i=0; i<traffic.length; i++){
        traffic[1].update(road.borders,[]);
    }
    
    for(let i=0;i<cars.length;i++){
          cars[i].update(road.borders,traffic);
    }
    
    const bestCar = cars.find(c=>.y==Math.min(
                             ...cars.map(c=>y)
                             ));
    
    //car.update(road.borders,traffic);

    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;
    
    ctx.traslate(0,-bestCar.y+carCanvas.height*0.7);

    road.draw(ctx);
    
    
    for (let i=0; i<traffic.length; i++){
        traffic[i].draw(ctx,"red");
    }
    
    carCtx.globalAlpha=0.2;
    
     for (let i=0; i<cars.length; i++){
        cars[i].draw(ctx,"blue");
    }
    
    carCtx.globalAlpha=1;
    bestCar.draw(ctx,"blue",true);
   // car.draw(ctx,"blue");

    ctx.restore();
    
    networkCtx.lineDashOffset=-time/50;
    Visualizer.drawNetwork(networkCtx,bestCar.brain);
    requestAnimationFrame(animate);
}
