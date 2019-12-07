export class Pixel {
  
  public row: number;
  public col: number;
  public isMarked: boolean;
  public color: string;

  constructor(row: number, col: number){
    this.row = row;
    this.col = col;
    this.isMarked = false;
    this.color = "gray";
  } 
}
