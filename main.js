//car physics
//road generation
//sensors
// collision detection
// neural network
// genetic algorithm

const canvas= document.getElementById('myCanvas');
canvas.width=200;
const ctx= canvas.getContext("2d");
const road= new road(canvas.width/2,canvas.width*0.9);
const car = Car(road.getLaneCenter(1),100,30,50,"KEYS");
//lets add traffic using arrays
const traffic=[
    new Car (road.getLaneCenter(1),-100,30,50,"DUMMY,2")
];
animate();
function animate(){
    
    for(let i=0; i<traffic.length; i++){
        traffic[1].update(road.borders);
    }
    
    car.update(road.borders);
    canvas.height=window.innerHeight;
    ctx.traslate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    for (let i=0; i<traffic.length; i++){
        traffic[i].draw(ctx);
    }
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}
