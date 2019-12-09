import { Router, RouteConfig } from 'aurelia-router';
import { DataService } from './model/data-service';
import { autoinject } from 'aurelia-framework';
import { Graph } from './graph';
import { Matrix } from './matrix';

@autoinject
export class Board {

  private context: any;
  private SIZE: number = 10;

  constructor(private dataService: DataService, private router: Router) {

  }

  attached() {
    const canvas:any = document.getElementById('myCanvas');
    this.context = canvas.getContext('2d');   
    this.render();  

    canvas.addEventListener('click', evt => {      
      var mousePos = this.getSquare(canvas, evt);
      let position = this.toData(mousePos);
      this.dataService.toggleState(position.row, position.col);      
      this.render();  
    }, false);
  }

  activate(params: any, routeConfig: RouteConfig) {
    if (this.context) {
      this.render();
    }    
  }

  public back() : void {
    this.router.navigateToRoute('home');
  }

  solve() {
    let graph = this.mapToGraph();
    let components = graph.calcConnectedComponents();
    components.forEach((component, componentIndex) => {
      component.forEach(nodeIndex => {
        let row = Math.floor(nodeIndex / this.dataService.columns);
        let col = nodeIndex % this.dataService.columns;        
        this.dataService.data[row][col].color = this.getColor(componentIndex);
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
    let data = this.dataService.data;
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      for (let j = 0; j < row.length; j++) {
        const element = row[j];
        if (element.isMarked) {
          nodes.push(this.getIndex(i, j));
        }
      }
    }
    let graph = new Graph(nodes);
    let cols = this.dataService.columns;
    let rows = this.dataService.rows;
    for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
      const row = data[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const element = row[colIndex];
        if (element.isMarked) {
          let neighbors = Matrix.getNeighbors(this.dataService.rows, this.dataService.columns, rowIndex, colIndex);
          neighbors.forEach(n => {     
            if (data[n.row][n.col].isMarked) {
              try {
                graph.addEdge(rowIndex * cols + colIndex, n.row * rows + n.col);
              } catch (error) {
                console.log(`${error} - row ${rowIndex} col ${colIndex} neighbor row ${n.row} neighbor col ${n.col}`)
              }
              
            }            
          })
        }
      }
    }
    return graph;
  }

  getIndex(row: number, col: number) : number {
    return row * this.dataService.columns + col;
  }

  private getSquare(canvas: any, evt: any) : any {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%this.SIZE,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%this.SIZE
    };
  }

  toData(mouse: any) {
    return {
      row : Math.floor(mouse.y / this.SIZE),
      col : Math.floor(mouse.x / this.SIZE)
    }
  }

  private render() {
    if (this == undefined) {
      return;
    }
    this.drawGrid();
    let data = this.dataService.data;
    for (let row = 0; row < this.dataService.rows; row++) {
      for (let col = 0; col < this.dataService.columns; col++) {
        let x = 1 + col * this.SIZE;         
        let y = 1 + row * this.SIZE;    
        if (data[row][col].isMarked) {                          
          this.fillSquare(x, y, data[row][col].color);
        }     
        else {
          this.fillSquare(x, y, "white");
        }   
      }      
    }    
    requestAnimationFrame(this.render);
  }

  private drawGrid() {
    for (var x = 0.5; x < (this.dataService.columns * this.SIZE) + 1; x += this.SIZE) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, this.dataService.columns * this.SIZE);
    }
    
    for (var y = 0.5; y < (this.dataService.rows * this.SIZE) + 1; y += this.SIZE) {
      this.context.moveTo(0, y);
      this.context.lineTo((this.dataService.rows * this.SIZE), y);
    }
    
    this.context.strokeStyle = "#ddd";
    this.context.stroke();
  }

  private fillSquare( x: number, y: number, color: string){
    this.context.fillStyle = color;
    this.context.fillRect(x,y,this.SIZE - 1,this.SIZE - 1);
  }

}

