import { GraphProvider } from '../../data';
import { DataService, Graph, Matrix } from '.';
import { autoinject } from 'aurelia-framework';

@autoinject
export class GraphService {
  
  constructor(private dataService: DataService, private graphProvider: GraphProvider) {

  }

  public async solve(nodes: number[], totalRows: number, totalColumns: number): Promise<number[][]> {
    let graph = this.mapToGraph(nodes);
    /*
    let result = await this.graphProvider.invokeSolution(nodes, totalRows, totalColumns);
    return result as number[][];
    */
    let components = graph.calcConnectedComponents();
    return components;
  }

  private mapToGraph(nodes: number[]) : Graph {    
    let graph = new Graph(nodes);
    let cols = this.dataService.columns;
    let rows = this.dataService.rows;
    let data = this.dataService.data;
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
}
