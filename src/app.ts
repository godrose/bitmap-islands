import { Graph } from './graph';
import { Matrix } from './matrix';
import { Pixel } from './pixel';

export class App {

  public columns: number = 200;
  public rows: number = 200;
  public data: Pixel[][];
  private context: any;
  private SIZE: number = 10;
  public width;
  public height;
  
  attached() {
    const canvas:any = document.getElementById('myCanvas');
    this.context = canvas.getContext('2d');   
    this.generate();

    canvas.addEventListener('click', evt => {      
      var mousePos = this.getSquare(canvas, evt);
      let position = this.toData(mousePos);
      this.data[position.row][position.col].isMarked = !this.data[position.row][position.col].isMarked;  
      this.render();  
}, false);
  }

  toData(mouse: any) {
    return {
      row : Math.floor(mouse.y / this.SIZE),
      col : Math.floor(mouse.x / this.SIZE)
    }
  }

  generate() {  
    this.width = this.columns * this.SIZE;
    this.height = this.rows * this.SIZE;
    this.populateData();    
    this.render();
  }

  clear() {
    this.generate();
  }

  randomise() {
    for (let row = 0; row < this.rows; row++) {      
      for (let col = 0; col < this.columns; col++) {        
        let pixel = this.data[row][col];        
        let val = Math.random();        
        pixel.isMarked = val >= 0.8;        
      }            
    }    
    this.render();
  }

  solve() {
    let graph = this.mapToGraph();
    let components = graph.calcConnectedComponents();
    components.forEach((component, componentIndex) => {
      component.forEach(nodeIndex => {
        let row = Math.floor(nodeIndex / this.columns);
        let col = nodeIndex % this.columns;        
        this.data[row][col].color = this.getColor(componentIndex);
      })
    });
    this.render();
  }

  getColor(index: number) : string {
    var colors = ['red', 'blue', 'green', 'yellow'];
    return colors[index % colors.length];
  }

  mapToGraph() : Graph {
    let nodes = [];
    for (let i = 0; i < this.data.length; i++) {
      const row = this.data[i];
      for (let j = 0; j < row.length; j++) {
        const element = row[j];
        if (element.isMarked) {
          nodes.push(this.getIndex(i, j));
        }
      }
    }
    let graph = new Graph(nodes);
    let cols = this.columns;
    let rows = this.rows;
    for (let rowIndex = 0; rowIndex < this.data.length; rowIndex++) {
      const row = this.data[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const element = row[colIndex];
        if (element.isMarked) {
          let neighbors = Matrix.getNeighbors(this.rows, this.columns, rowIndex, colIndex);
          neighbors.forEach(n => {     
            if (this.data[n.row][n.col].isMarked) {
              graph.addEdge(rowIndex * cols + colIndex, n.row * rows + n.col);
            }            
          })
        }
      }
    }
    return graph;
  }

  getIndex(row: number, col: number) : number {
    return row * this.columns + col;
  }  

  private populateData() {
    this.data = new Array<Array<Pixel>>();
    for (let row = 0; row < this.rows; row++) {
      let arr = new Array<Pixel>();      
      for (let col = 0; col < this.columns; col++) {                    
        arr.push(new Pixel(row,col));
      }      
      this.data.push(arr);  
    }    
  }
  
  private render() {
    this.drawGrid();
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        let x = 1 + col * this.SIZE;         
        let y = 1 + row * this.SIZE;    
        if (this.data[row][col].isMarked) {                          
          this.fillSquare(x, y, this.data[row][col].color);
        }     
        else {
          this.fillSquare(x, y, "white");
        }   
      }      
    }    
    requestAnimationFrame(this.render);
  }

  private getSquare(canvas: any, evt: any) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%this.SIZE,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%this.SIZE
    };
  }
  
  private drawGrid() {
    for (var x = 0.5; x < (this.columns * this.SIZE) + 1; x += this.SIZE) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, this.columns * this.SIZE);
    }
    
    for (var y = 0.5; y < (this.rows * this.SIZE) + 1; y += this.SIZE) {
      this.context.moveTo(0, y);
      this.context.lineTo((this.rows * this.SIZE), y);
    }
    
    this.context.strokeStyle = "#ddd";
    this.context.stroke();
  }
  
  private fillSquare( x: number, y: number, color: string){
    this.context.fillStyle = color;
    this.context.fillRect(x,y,this.SIZE - 1,this.SIZE - 1);
  }
}
