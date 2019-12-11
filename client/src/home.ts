import { Router } from 'aurelia-router';
import { DataService } from './model';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Home {

  get rows(): number {
    return this.dataService.rows;
  }

  set rows(value: number) {
    this.dataService.rows = value;
  }   

  get columns(): number {
    return this.dataService.columns;
  }
  set columns(value: number) {
    this.dataService.columns = value;
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
