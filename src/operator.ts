import { Parameter } from './parameter';

export abstract class OperatorBase {    
  abstract name: string;
  abstract displayName: string;
  abstract apply(parameters: Parameter[]) : any;
}


