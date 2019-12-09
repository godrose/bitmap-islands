import { Pixel } from './pixel';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class DataService {  
  
  private _columns: number = 200;
  get columns(): number {
    return this._columns;
  }
  set columns(value: number) {
    this._columns = value;
    this.initBoard();
  }

  private _rows: number = 200;
  get rows(): number {
    return this._rows;
  }
  set rows(value: number) {
    this._rows = value;
    this.initBoard();
  }  
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
