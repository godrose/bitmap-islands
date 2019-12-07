export class Matrix {  
  public static getNeighbors(totalRows: number, totalColumns: number, row: number, col: number) : any[] {
    let retValue = [];
    let rowCandidates = [];
    rowCandidates.push(row);
    if (row === 0) {      
      rowCandidates.push(1);
    }
    else if (row === totalRows - 1) {
      rowCandidates.push(row-1);
    }
    else {
      rowCandidates.push(row-1);
      rowCandidates.push(row+1);
    }
    
    let colCandidates = [];
    colCandidates.push(col);
    if (col === 0) {
      colCandidates.push(1);
    }
    else if (col === totalColumns - 1) {
      colCandidates.push(col-1);
    }
    else {
      colCandidates.push(col-1);
      colCandidates.push(col+1);
    }
    rowCandidates.forEach(r => {
      colCandidates.forEach(c => {
        if (row != r || col != c) {
          retValue.push({
            row: r,
            col: c
          })
        }        
      })
    });
    return retValue;
  }
}
