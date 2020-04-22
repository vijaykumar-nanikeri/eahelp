import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackByService {

  constructor() { }

  // Tracks for `id` in a list iterating using `*ngFor` for the better performance.
  /**
   * @param  {number} index
   * @param  {any} obj
   * @returns any
   */
  public trackById(index: number, obj: any): any {
    return obj.id;
  }

}
