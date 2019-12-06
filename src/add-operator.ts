import { OperatorBase } from "./operator";
import { Parameter } from "parameter";

export class AddOperator extends OperatorBase {
  name: string = "Add";  
  displayName: string = "+";
  apply(parameters: Parameter[]) {
    let sum : number = 0.0;
    parameters.forEach(element => {
      sum+=+element.value;
    });
    return sum;
  }
}

export class SubOperator extends OperatorBase {
  name: string = "Sub";  
  displayName: string = "-";
  apply(parameters: Parameter[]) {
    return parameters[0].value - parameters[1].value;
  }
}

export class MulOperator extends OperatorBase {
  name: string = "Mul";  
  displayName: string = "*";
  apply(parameters: Parameter[]) {
    let product = 1.0;
    parameters.forEach(element => {
      product*=element.value;
    });
    return product;
  }
}

  export class DivOperator extends OperatorBase {
    name: string = "Div";  
    displayName: string = "/";
    apply(parameters: Parameter[]) {
      return parameters[0].value / parameters[1].value;
    }
  }

