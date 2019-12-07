import { Graph } from './graph';
import {Pixel} from './pixel';

export class App {

  public columns: number = 1000;
  public rows: number = 1000;
  public data: Pixel[][];
  private context: any;
  private RATIO: number = 10;
  
  attached() {
    const canvas:any = document.getElementById('myCanvas');
    this.context = canvas.getContext('2d');   
    this.generate();

    canvas.addEventListener('click', evt => {      
      var mousePos = this.getSquare(canvas, evt);
      this.data[mousePos.x][mousePos.y].isMarked = !this.data[mousePos.x][mousePos.y].isMarked;  
      this.render();  
}, false);
  }

  generate() {  
    this.populateData();    
    this.render();
  }

  solve() {
    let graph = this.mapToGraph();
    let components = graph.calcConnectedComponents();
    components.forEach(component => {
      
    });

  }

  mapToGraph() : Graph {
    let graph = new Graph(this.columns * this.rows);
    for (let i = 0; i < this.data.length; i++) {
      const row = this.data[i];
      for (let j = 0; j < row.length; j++) {
        const element = row[j];
        if (element.isMarked) {
          let neighbors = this.getNeighbors(i, j);
          neighbors.forEach(n => {
            graph.addEdge(i * this.columns + j, n.row * this.columns + n.col);
          })
        }
      }
    }
    return graph;
  }

  getNeighbors(i: number, j: number) : any[] {
    let retValue = [];
    let rowCandidates = [];
    if (i === 0) {
      rowCandidates.push(1);
    }
    else if (i === this.rows) {
      rowCandidates.push(i-1);
    }
    else {
      rowCandidates.push(i-1);
      rowCandidates.push(i+1);
    }

    let colCandidates = [];
    if (i === 0) {
      colCandidates.push(1);
    }
    else if (i === this.columns) {
      colCandidates.push(i-1);
    }
    else {
      colCandidates.push(i-1);
      colCandidates.push(i+1);
    }
    rowCandidates.forEach(row => {
      colCandidates.forEach(col => {
        retValue.push({
          row: row,
          col: col
        })
      })
    });
    return retValue;
  }

  private populateData() {
    this.data = new Array<Array<Pixel>>();
    for (let i = 0; i < this.rows; i++) {
      let arr = new Array<Pixel>();      
      for (let j = 0; j < this.columns; j++) {
        let val = Math.random();        
        let pixel = new Pixel(i,j);
        //TODO: This creates strange output
        //pixel.isMarked = val >= 0.95;
        arr.push(pixel);
      }      
      this.data.push(arr);  
    }    
  }
  
  private render() {
    this.drawGrid();
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
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
    for (var x = 0.5; x < (this.columns * this.RATIO) + 1; x += this.RATIO) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, this.columns * this.RATIO);
    }
    
    for (var y = 0.5; y < (this.rows * this.RATIO) + 1; y += this.RATIO) {
      this.context.moveTo(0, y);
      this.context.lineTo((this.rows * this.RATIO), y);
    }
    
    this.context.strokeStyle = "#ddd";
    this.context.stroke();
  }
  
  private fillSquare( x: number, y: number){
    this.context.fillStyle = "gray"
    this.context.fillRect(x,y,this.RATIO - 1,this.RATIO - 1);
  }
}
