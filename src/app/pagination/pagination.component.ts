import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() data: any[];
  @Input() itemsByPage = 5;
  @Input() templateRef: TemplateRef<HTMLElement>;
  pagesData: any[];
  pages = [];
  page: any[];
  /**
   * Active index of array pages
   */
  activePage = 0;
  /**
   * Page selected in html pagination
   */
  selectedPage = 1;

  constructor() {
  }

  ngOnInit() {
    this.getPages();
    this.page = this.pages[this.activePage];
  }

  getPages() {
    if(!this.data) {
      return;
    }
    this.pagesData = [...this.data];
    while (this.pagesData.length) {
      this.pages.push(this.pagesData.splice(0, this.itemsByPage));
    }
  }

  showPage(index: number) {
    this.activePage = index;
    this.selectedPage = index + 1;
    this.page = this.pages[this.activePage];
  }

  showPreviousPage() {
    this.activePage = this.activePage - 1;
    this.selectedPage = this.selectedPage - 1;
    this.page = this.pages[this.activePage];
  }

  showNextPage() {
    this.activePage = this.activePage + 1;
    this.selectedPage = this.selectedPage + 1;
    this.page = this.pages[this.activePage];
  }
}
