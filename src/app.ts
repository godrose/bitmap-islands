import {Pixel} from './pixel';

export class App {

  public width: number;
  public height: number;
  public data: Pixel[][];
  private context: any;
  
  attached() {
    const canvas:any = document.getElementById('myCanvas');
    this.context = canvas.getContext('2d');
    this.width = 1000;
    this.height = 1000;
    this.populateData();
    this.render();

    canvas.addEventListener('click', evt => {      
      var mousePos = this.getSquare(canvas, evt);
      this.data[mousePos.x][mousePos.y].isMarked = true;  
      this.render();  
}, false);
  }

  generate() {  
    this.populateData();    
    this.drawGrid(); 
  }

  private populateData() {
    this.data = new Array<Array<Pixel>>();
    for (let i = 0; i < this.height; i++) {
      let arr = new Array<Pixel>();      
      for (let j = 0; j < this.width; j++) {
        arr.push(new Pixel(i, j));
      }      
      this.data.push(arr);
    }    
  }
  
  private render() {
    this.drawGrid();
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.data[i][j].isMarked) {
          this.fillSquare(i, j);
        }        
      }      
    }    
    requestAnimationFrame(this.render);
  }

  private getSquare(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%10,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%10
    };
  }
  
  private drawGrid() {
    for (var x = 0.5; x < 10001; x += 10) {
      this.context.moveTo(x, 0);
        this.context.lineTo(x, 10000);
    }
    
    for (var y = 0.5; y < 10001; y += 10) {
      this.context.moveTo(0, y);
      this.context.lineTo(10000, y);
    }
    
    this.context.strokeStyle = "#ddd";
    this.context.stroke();
  }
  
  private fillSquare( x, y){
    this.context.fillStyle = "gray"
    this.context.fillRect(x,y,9,9);
  }
}
