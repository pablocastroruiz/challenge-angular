import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pages: number;
  prevNext: boolean = false;
  pagesList: number[];
  selectedPage: number = 1;

  @Input() elements: number;//Total of elements
  @Input() pagesOnNav: number;//Limit the pages to display
  @Input() elemsPerPage: number;
  @Output() pageSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.setPages();
    this.calcPages();
  }

  pageClick(page: number): void{
    if(page < 1 || page > this.pages)
      return;
    this.selectedPage = page;
    this.pageSelected.emit(page);
    if(this.prevNext){
      this.calcPages();
    }
  }

  pageSelectedAction(): void{
    this.pageSelected.emit()
  }

  setPages(): void{
    this.pages = Math.ceil(this.elements / this.elemsPerPage);
    //To not display more pages than the available.
    this.pagesOnNav = this.pages < this.pagesOnNav ? this.pages : this.pagesOnNav;
    this.prevNext = this.pages > this.pagesOnNav;
  }
  
  calcPages(): void{
    let indexFill = this.selectedPage;
    let pagesGap = Math.floor(this.pagesOnNav / 2)
    if(this.selectedPage - pagesGap > 0){
      indexFill -= pagesGap;
    } else if (this.selectedPage - pagesGap <= 0) {
      indexFill = 1;
    }
    if (this.selectedPage + pagesGap > this.pages) {
      indexFill = this.pages - this.pagesOnNav + 1;
    }
    this.pagesList = new Array(this.pagesOnNav).fill(indexFill).map((value, index) => {
      return value + index;
    });
    
  }
}
