import { autoinject, PLATFORM } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

@autoinject
export class App {      
  public configureRouter(config: RouterConfiguration, router: Router): void {    
    config.title = 'Islands detection';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: PLATFORM.moduleName('home') },
      { route: 'board',            name: 'board',      moduleId: PLATFORM.moduleName('board'), nav: true, title: 'Board' }     
    ]);
  }                   
}
