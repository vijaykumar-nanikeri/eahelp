import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlatCheckObjectService {

  constructor() { }

  // Flat tests or traverse through the object, to find a leaf key has a value.
  /**
   * @param  {object} root
   * @param  {} [...levels]
   * @returns any
   */
  public flatCheckObject(root: object, [...levels]): any {
    let current: any = Object.assign({}, root);
    for (let level of levels) {
      if (current[level] !== undefined) {
        current = current[level];
      }
    }

    return (typeof (current) !== 'object' ? current : undefined);
  }

}
