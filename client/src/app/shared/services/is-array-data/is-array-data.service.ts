import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsArrayDataService {

  constructor() { }

  // Tests if the input is an array, if so has it any entries in it.
  /**
   * @param  {any} input
   * @param  {string='data'} key
   * @returns boolean
   */
  public isArrayData(input: any, key: string = 'data'): boolean {
    let isArrayData: boolean = false;

    if (input && (input !== null)) {
      if (input instanceof Object) {
        if (input[key] !== undefined) {
          if (Array.isArray(input[key])) {
            if (input[key].length) {
              isArrayData = true;
            }
          }
        }
      } else if (Array.isArray(input)) {
        if (input.length) {
          isArrayData = true;
        }
      }
    }

    return isArrayData;
  }

}
