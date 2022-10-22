//TO EXPORT:
//press cmd s when the browther is on. this will save the png img to download. 
//to change the defult folder just run the code using the line:
//npx canvas-sketch <NAME>.js --output=<FOLDER NAME>
//This will create <FILDER NAME> folder inside the project folder and wil lrun the project. 

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 800, 800 ],
  animate: true,
  //the defulte frame rate of canvasSketch is 24 fps, we can change it here: 
  fps:30,
};


const sketch = ({ context, width, height }) => {


  //with the animate this will be executed once, so declare global vars here: 
  let x = 0;
  let y= 0;

  //putting the lione here will make the canvas to not beeing filed with white after each refresh. 
  //you will have to put the value that the return got in the sketch function as well. 
  context.fillStyle = 'white';
  context.fillRect(0, 0, width, height);


  //adding property frame give us the number of the frame we are at. 
  return ({ context, width, height, frame }) => {
    //With animate this will be refreshed 60 time per second. 

    //finish the anmation at some point of frame;
    if (frame > 135) return;

    /*
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    */

    x+=10;

    if (x>460){
      y+=240;
      x=0;
    }

    context.fillStyle = (frame%2)? 'black' : 'white';
    context.strokeStyle = context.fillStyle;

    // Set line width
    context.lineWidth = 10;

    // Wall
    context.strokeRect(x+ 75, y+ 140, 150, 110);

    // Door
    context.fillRect(x+ 130, y+ 190, 40, 60);

    // Roof
    context.beginPath();
    context.moveTo(x+ 50, y+ 140);
    context.lineTo(x+ 150,y+  60);
    context.lineTo(x+ 250, y+ 140);
    context.closePath();
    context.stroke();



  };
};

canvasSketch(sketch, settings);
