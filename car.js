class Car{
    constructor(x,y,width,height,controlType){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        
        this.speed-=0;
        this.acceleration=0-2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0;
        //continue
        this.damaged=false;
        
        

        this.sensor =new Sensor(this);
        this.controls=new Controls(controlType);

    }   
    update(roadBorders){
        
      if (!this.damaged){
      this.#move();
      this.polygon=this.#createPolygon();
      this.damaged=this.#assessDamage(roadBorders); 
      }  
      this.sensor.update(roadBorders);
    }
    
    #assessDamage(roadBorders)
    {
        for( let i=0, i<roadBorders, i++){
            if(polysIntersect(this.polygon,roadBorders[i])){
                return true;
            }
        }
        return false;
    }
    
    
    
    
    
    #createPolygon(){
         const point = [];
         const rad=Math.hypot(this.width,this.height)/2;
         const alpha=Math.atan2(this.width,this.height);
         points.push(
             x:this.x-Math.sin(this.angle-alpha)*rad,
             y:this.y-Math.sin(this.angle-alpha)*rad
    });
         points.push(
             x:this.x-Math.sin(this.angle+alpha)*rad,
             y:this.y-Math.sin(this.angle+alpha)*rad
    });
         points.push(
             x:this.x-Math.sin(Math.PI+this.angle-alpha)*rad,
             y:this.y-Math.sin(Math.PI+this.single-alpha)*rad
    });
         points.push(
             x:this.x-Math.sin(Math.PI+this.angle+alpha)*rad,
             y:this.y-Math.sin(Math.PI+this.single+alpha)*rad
    });
         return points;
}
    
    
#move(){
    if(this.controls.foward){
        this.speed+=this.acceleration;
    }
    if (this.controls.revserse){
        this.speed-=this.acceleration;
    }
    if(this.speed>this.maxSpeed){
        this.speed=this.maxSpeed;
    }
    if(this.speed<-this.maxSpeed/2){
        this.speed=-this.maxSpeed/2;
    }

 if (this.speed>0){
     this.speed -=this.friction;
 }
 if (this.speed<0){
     this.speed+=this.friction;
 }
if(Math.abs(this.speed)<this.friction){
         this.speed=0;
     }
   //this allows us to flip the controls of the car
     if(this.speed!=0){
         const flip=this.speed>0?1:-1;

     }

     // this affects the behaviour of the car steering from right to left 
if (this.controls.left){
  //this.x-=2;
  this.angle +=0.03*flip;

}
if(this.controls.right){
   // this.x+=2;
   this.angle -=0.03*flip;
}
//the angle is working according to the unit circle

    this.x-=Math.sin(this.angle)*this.speed;
    this.y-Math.cos(this.angle)*this.speed;
}


    draw(ctx){
        
        //changes color upon contact with the borders 
        
        if(this.damaged){
            ctx.fillStyle="gray";
        }else{
            ctx.fillStyle="black";
        }
        
        
        
        ctx.beginpath();
        ctx.moveTo(this.polygon[0].x,this.polygon[0]-y);
        for (let i=1; i<this.polygon.length,i++){
              ctx.lineTo(this.polygon[1].x,this.polygon[1]-y);
        }
            ctx.fill();
            
        
        /* ctx.save();
        ctx.translate(this.x,this.y);//translate the car to the center of the canvas
        ctx.rotate(-this.angle);//rotate the car according to the angle
       
        ctx.beginPath();
        ctx.rect(
                -this.width/2,
                -this.height/2,
                this.width,
                this.height
                );
                ctx.fill();
 

                ctx.restore(); 
        */

                this.sensor.draw(ctx);
  }

}
