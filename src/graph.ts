export class Graph {

  private numberOfVertices: number;
  private adjacencyList: Array<Array<number>>;

  constructor(v: number) {
    this.numberOfVertices = v;

    this.adjacencyList = [];
   
    for (let index = 0; index < this.numberOfVertices; index++) {      
      this.adjacencyList.push(new Array<number>());      
    }    
  }  

  addEdge(src : number, dest: number): void {        
        this.adjacencyList[src].push(dest);
        this.adjacencyList[dest].push(src);       
    }

  runDFS(v: number, visited : boolean[] ) : number[] {
        // Mark the current node as visited and print it 
        visited[v] = true;
        var retValue = new Array<number>();
        retValue.push(v);

        this.adjacencyList[v].forEach(element => {
          if (!visited[element]) {            
               retValue.concat(this.runDFS(element, visited));
            }
        });              
        return retValue;
  }

    calcConnectedComponents() : Array<Array<number>> {
        // Mark all the vertices as not visited 
        var visited: boolean[] = new Array(this.numberOfVertices);
        var retValue : Array<Array<number>> = new Array<Array<number>>();
        for (let index = 0; index < this.numberOfVertices; index++) {          
          const element = visited[index];
          if (!visited) {
            var component = this.runDFS(index, visited);
            retValue.push(component);
          }
        }   
        return retValue;             
    }
}
