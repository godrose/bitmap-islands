import { Router } from 'aurelia-router';
import { DataService } from './model';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Home {

    get width(): number {
        return this.dataService.columns;
    }
    set width(value: number) {
        this.dataService.columns = value;
    }  

    get height(): number {
      return this.dataService.rows;
  }
  set height(value: number) {
      this.dataService.rows = value;
  }   

  constructor(private dataService: DataService, private router : Router) {    
  }

  attached() {
    this.dataService.initBoard();
  }

  randomise() {    
    this.dataService.randomiseBoard(); 
    this.router.navigateToRoute('board');
  }

  draw() {
    this.dataService.initBoard();
    this.router.navigateToRoute('board');
  }

}
