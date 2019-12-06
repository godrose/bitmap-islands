export class Graph {

  private numberOfVertices: number;
  private adjacencyList: Array<Array<number>>;

  constructor(v: number) {
    this.numberOfVertices = v;

    this.adjacencyList = new [][this.numberOfVertices];

    // Create a new list for each vertex 
    // such that adjacent nodes can be stored 

    for (let index = 0; index < this.numberOfVertices; index++) {      
      this.adjacencyList.push(new Array<number>());      
    }    
  }  

  addEdge(src : number, dest: number): void {
        // Add an edge from src to dest. 
        this.adjacencyList
        //adjListArray[src].Add(dest);

        // Since graph is undirected, add an edge from dest 
        // to src also 
        //adjListArray[dest].Add(src);
    }
}
