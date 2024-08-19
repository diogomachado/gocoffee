import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  randomUUID() {
    return crypto.randomUUID();
  }
}
