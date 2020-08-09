import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authors = ['Aathmiya', 'Atharva', 'Advaita'];

  getAuthors(){
    return this.authors;
  }

  constructor() { }
}
