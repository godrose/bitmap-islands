import { Stack } from 'stack-typescript';

export class Graph {

  private numberOfVertices: number;
  private adjacencyList: Map<number, Array<number>>;

  constructor(nodes: number[]) {
    this.numberOfVertices = nodes.length;

    this.adjacencyList = new Map<number, Array<number>>();
   
    nodes.forEach(n => {
      this.adjacencyList.set(n, new Array<number>());
    })       
  }  

  addEdge(src : number, dest: number): void {  
        let source = this.adjacencyList.get(src);
        if (source == undefined)
        {
          console.log("source is undefined")
        }
        if (source.includes(dest) == false) {
          source.push(dest);
        }
        
        let destination = this.adjacencyList.get(dest);
        if (destination == undefined)
        {
          console.log("source is undefined")
        }
        if (destination.includes(src) == false) {
          destination.push(src);
        }            
    }

  runIterativeDFS(node: number) : number[] {
    let retValue :number[] = [];

    let visitedList = new Map<number, boolean>();
    this.adjacencyList.forEach((value, key) => {
      visitedList.set(key, false);
    })
   
    let stack = new Stack<number>();
    stack.push(node); 

    while (stack.top) {      
      let current = stack.pop(); 
      if (visitedList.get(current) == false) {
        retValue.push(current);
        visitedList.set(current, true);
      }
      this.adjacencyList.get(current).forEach(elem => {
        if (visitedList.get(elem) == false) {
          stack.push(elem);
        }        
      })                                
    }
    return retValue;
  }

  runDFS(node: number, visited : Map<number, boolean> ) : number[] {
        // Mark the current node as visited and print it 
        visited.set(node,true);
        let retValue = new Array<number>();
        retValue.push(node);

        this.adjacencyList.get(node).forEach(element => {
          if (!visited.get(element)) {            
               retValue = retValue.concat(this.runDFS(element, visited));
            }
        });              
        return retValue;
  }  

    calcConnectedComponents() : Array<Array<number>> {

        // Mark all the vertices as not visited 
        let visited = new Map<number, boolean>();
        this.adjacencyList.forEach((value, key) => {
          visited.set(key, false);
        })
        let retValue : Array<Array<number>> = new Array<Array<number>>();
        this.adjacencyList.forEach((value, key) => {
          const element = visited.get(key);
          if (!element) {
            let component = this.runIterativeDFS(key);            
            retValue.push(component);
            component.forEach(element => {
              if (!visited.get(element)) {
                visited.set(element, true);
              }
            });
          }
        })  
        return retValue;                            
    }
}
