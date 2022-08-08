class NeuralNetwork {
  constructor(neuronCounts){ 
  this.levels =[];
   for (let i = 0; i < neuronCounts.length; i++) {
    this.levels.push(new Level(neuronCounts[i+1]));
  }
 }
  
 static feedFoward (givenInputs,network){
  let outputs =level.feedFoward(givenInputs,network.levels[0]);
  for(let i=1; i<network.levels.length; i++){
    outputs =level.feedFoward(outputs,network.levels[i]);
  }
  return outputs;
 }
  //mutate the network 
  
     static mutate(network,amount=1){
        network.levels.forEach(level => {
          for(let i=0; i<level.biases.length;i++){
               //linear interpolation
             level.biases[i]=lerp(
             level.biases[i],
             Math.random()*2-1,
               amount 
            )
          }
          
          for(let i=0; i<level.weights.length;i++){
               for(let j=0; j<level.weights[i].lenghts;j++){
                  level.weights[i][j]=lerp(
                    level.weights[i][j],
                    Math.random()2*1)
                 amount
                 )
               }
          }
        });
     }
}



class Level {
  constructor(inputCount, outputCount) { 
  this.inputs = new Array(inputCount);
  this.outputs = new Array(outputCount);
  this.biases = new Array(outputCount);
   
  this.weights = [];
  for(let i=0; i<inputCount; i++) {
    this.weights[i] = new Array(outputCount);
    }
Level.#randomize(this);
  }
  static #randomize(level) {
    for(let i=0; i<level.inputs.length; i++){
      for( let j=0; j<level.outputs.length; j++){
        level.weights[i][j] = Math.random() * 2 - 1;
      }
    }
    for(let i=0; i<level.outputs.length; i++){
      level.biases[i] = Math.random() * 2 - 1;
    }

    static feedFoward (givenInputs,Level){
      for(let i=0; i<Level.inputs.length; i++){
        Level.inputs[i] = givenInputs[i];
      }
    for(let i=0; i<Level.outputs.length; i++){
      let sum = 0;
      for(let j=0; j<Level.inputs.length; j++){
        sum += Level.inputs[j] * Level.weights[j][i];
      }
      if(sum > Level.biases[i]){
        Level.outputs[i] = 1;
      }else{
        Level.outputs[i] = 0;
      }
     }
     return Level.outputs;
    }
  }

