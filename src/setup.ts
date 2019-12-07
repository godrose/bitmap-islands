import { DataService } from './model/data-service';
import { autoinject } from "aurelia-framework";

@autoinject
export class Setup {
  public columns: number = 200;
  public rows: number = 200;

  constructor(private dataService : DataService) {

  }

  public randomise() : void {
    this.dataService.randomiseBoard();
  }
}
