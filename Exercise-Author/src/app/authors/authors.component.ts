import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  title = "Authors";

  authors;

  authorCount;

  getTitle(){
    return this.title;
  }

  getAuthors(){
    return this.authors;
  }


  constructor(service:AuthorsService) {

    this.authors = service.getAuthors();
    this.authorCount = this.authors.length;
  }

  ngOnInit(): void {
  }

}
