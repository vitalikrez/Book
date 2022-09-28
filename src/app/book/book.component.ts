import { Component, OnInit } from '@angular/core';
import { Book } from './book';
//import { myBooks } from './list-book';

import { BookServiceService } from '../../app/book-service.service'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookServiceService]

})
export class BookComponent implements OnInit {

  selectedItem!: Book;

  items: any;
  descriptions!: string;
  name!: string;
  author!: string;
  year!: number;
  pages!: number;
  publisher!: string;
  cover!: string;

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

  onSelectAdd(): void {
    const boxes = document.getElementsByClassName(
      'addBook',
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.display = 'block';
    }
  }

  removeAddBook() {
    const boxes = document.getElementsByClassName(
      'addBook',
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.display = 'none';
    }
  }

  constructor(private dataService: BookServiceService) { }

  addItem(name: string, author: string, year: number, pages: number, publisher: string, cover: string, descriptions: string) {
    if (name != null && author != null && year != null && pages != null && publisher != null && cover != null && descriptions != null) {
      this.dataService.addData(name, author, year, pages, publisher, cover, descriptions);
    }
    else
      alert('Заповніть, будь ласка, всі поля форми!!!');

  }

  ngOnInit() {
    this.items = this.dataService.getData()
  }



}