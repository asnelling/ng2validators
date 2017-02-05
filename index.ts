import {ValidatorFn, AbstractControl} from "@angular/forms";

export class Ng2Validators {

  /**
   * Among the children of `control` identified in `controls`, at least
   * `numTrue` must have truthish values.
   * @param numTrue
   * @param controls
   * @returns {(control:AbstractControl)=>{[p: string]: any}}
   */
  static someTrue(numTrue: number, ...controls: string[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => controls
      .filter(name => !!control.get(name).value).length < numTrue
      ? {someTrue: controls}
      : null;
  }

}
