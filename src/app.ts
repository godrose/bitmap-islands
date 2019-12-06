import {Pixel} from './pixel';

export class App {

  public width: number;
  public height: number;
  public data: Pixel[][];
  private context: any;
  
  attached() {
    const canvas:any = document.getElementById('myCanvas');
    this.context = canvas.getContext('2d');
    this.render();

    canvas.addEventListener('click', evt => {      
      var mousePos = this.getSquare(canvas, evt);
      this.data[mousePos.x][mousePos.y].isMarked = true;    
}, false);
  }

  generate() {  
    this.populateData();
    const canvas:any = document.getElementById('myCanvas');
    this.drawGridOnCanvas(canvas); 
  }

  private populateData() {
    this.data = new Pixel[this.height][this.width];
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.data[i][j]) {
          this.fillSquare(i, j);
        }        
      }      
    }
  }

  private drawGridOnCanvas(canvas) : any {        
    this.drawGrid();    
  }

  private render() {
    this.drawGrid()
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const element = new Pixel(i, j);
        this.data[i][j] = element;
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




