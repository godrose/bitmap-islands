import {Pixel} from './pixel';

export class App {

  public width: number = 1000;
  public height: number = 1000;
  public data: Pixel[][];
  private context: any;
  private RATIO: number = 10;
  
  attached() {
    const canvas:any = document.getElementById('myCanvas');
    this.context = canvas.getContext('2d');   
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
    this.render();
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

  private getSquare(canvas: any, evt: any) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%this.RATIO,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%this.RATIO
    };
  }
  
  private drawGrid() {
    for (var x = 0.5; x < (this.width * this.RATIO) + 1; x += this.RATIO) {
      this.context.moveTo(x, 0);
        this.context.lineTo(x, this.width * this.RATIO);
    }
    
    for (var y = 0.5; y < (this.height * this.RATIO) + 1; y += this.RATIO) {
      this.context.moveTo(0, y);
      this.context.lineTo((this.height * this.RATIO), y);
    }
    
    this.context.strokeStyle = "#ddd";
    this.context.stroke();
  }
  
  private fillSquare( x: number, y: number){
    this.context.fillStyle = "gray"
    this.context.fillRect(x,y,this.RATIO - 1,this.RATIO - 1);
  }
}
