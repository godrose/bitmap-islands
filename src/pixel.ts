export class Pixel {
  
  public row: number;
  public col: number;
  public x: number;
  public y: number;
  public isMarked: boolean;

  constructor(row: number, col: number, x: number, y: number){
    this.row = row;
    this.col = col;
    this.x = x;
    this.y = y;
  } 
}
