//How to setup?
//download nodeJS and NPM. 
//open a new folder.
//get in the folder in terminal
//run: npx canvas-sketch-cli <NAME>.js --new --open
//This will create a file with <NAME> and open a new window of browther. 
//Open the file in text editore like sublime or VScode. 

//to OPen exsisting file just run: canvas-sketch <NAME>.js --open


//THEN YOU WILL GET A FILE WITH THIS BASE:

//importing canva-sketch.
const canvasSketch = require('canvas-sketch');

//the size for canvas will be created by sketch. 
const settings = {
  dimensions: [ 2048, 2048 ],
  //add this line to call render function every time the screen refreshes (usually 60per sec)
  animate:true,
};

const sketch = () => {
  // return the rending function. - where the drawing happens. 
  //values are defined in sketch. 
  return ({ context, width, height }) => { 
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);


    //ADD CONTENT HERE!! 



  };
};

//initializer. calls the sketch with both functions. 
canvasSketch(sketch, settings);
