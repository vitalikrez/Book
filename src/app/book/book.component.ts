import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { myBooks } from './list-book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  books = myBooks;

  selectedItem!: Book;

  onSelect(item: Book): void {
    
    this.selectedItem = item;
    const boxes = document.getElementsByClassName(
      'infoBook',
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.display = 'block';
    }
  }


  remove() {
      const boxes = document.getElementsByClassName(
        'infoBook',
      ) as HTMLCollectionOf<HTMLElement>;

      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = 'none';
      }
      



  }

  constructor() { }

  ngOnInit(): void {

  }

}
