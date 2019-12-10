import { IGraphProvider } from './../../contracts/';
import { HttpClient, json } from 'aurelia-fetch-client';
import environment from 'environment';

export class GraphProvider implements IGraphProvider {
  private client = new HttpClient()
      .configure(x => {
        x.useStandardConfiguration().withBaseUrl(environment.webApiUri)
      });

  async invokeSolution(nodes: number[], totalRows: number, totalColumns: number) : Promise<any> {
    let response = await this.client.fetch('/api/graph/solve',
     { "method" : "POST",
     "body" : json({
      indexes: nodes,
      totalRows, 
      totalColumns
     })
    });
    return await response.json();
  }
}
