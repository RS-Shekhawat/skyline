import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-admin-pagination',
  templateUrl: './pagination.component.html',
  styles: []
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() count: number;
  @Input() perPage: number;

  @Input() @Output() page = 1;
  countPages: number;

  minPage = 0;
  maxPage = 0;

  hasPrev = false;
  hasNext = false;

  iterator = [];

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  noOp() {
    return false;
  }

  onPageChange(page: number) {
    this.page = page;
    this.pageChanged.emit(page);
    this.updatePages();
  }

  ngOnInit() {
    this.updatePages();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updatePages();
  }

  updatePages() {
    this.countPages = Math.ceil(this.count / this.perPage);

    const delta = Math.min(2, this.countPages);
    if (this.page - delta > 0) {
      this.minPage = this.page - delta;
    } else {
      this.minPage = 1;
    }

    if (this.page + delta < this.countPages) {
      this.maxPage = this.minPage + 2 * delta;
    } else {
      this.maxPage = this.countPages;
    }

    this.hasPrev = this.page !== 1;
    this.hasNext = this.page !== this.countPages;

    const displayedPages = Math.min(2 * delta + 1, this.countPages, this.maxPage - this.minPage + 1) || 0;
    this.iterator = (new Array(displayedPages)).fill(1);
  }

}
