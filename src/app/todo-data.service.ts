import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

someMethod(){
  return 'service user';
}

}
