import { Pixel } from './pixel';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class DataService {  
  
  public columns: number = 200;
  public rows: number = 200;
  public data: Pixel[][];
  private randomFactor: number = 0.8;

  initBoard() {
    this.data = new Array<Array<Pixel>>();    
    for (let row = 0; row < this.rows; row++) {
      let arr = new Array<Pixel>();      
      for (let col = 0; col < this.columns; col++) {                    
        arr.push(new Pixel(row,col));
      }      
      this.data.push(arr);  
    }  
  }

  randomiseBoard() {
    for (let row = 0; row < this.rows; row++) {      
      for (let col = 0; col < this.columns; col++) {        
        let pixel = this.data[row][col];        
        let val = Math.random();        
        pixel.isMarked = val >= this.randomFactor;        
      }            
    } 
  }

  toggleState(row: number, col: number) {
    this.data[row][col].isMarked = !this.data[row][col].isMarked;  
  }
}
