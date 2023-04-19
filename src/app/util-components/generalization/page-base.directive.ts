import {Directive} from '@angular/core';

@Directive()
export abstract class PageBaseDirective<T> {
  data: T[] = [];
  pageIndex: number = 0;
  length: number = 0;
  sortBy: string | undefined = '-createdAt';
  query: string | undefined = undefined;

  protected constructor(protected service: any) { }

  protected getFirstPage() {
    this.getPage(0);
  }

  protected getCurrentPage() {
    this.getPage(this.pageIndex);
  }

  protected getPage(page: number): void {
    this.service.getPage(page, this.query, this.sortBy).then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  protected setPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.getPage(event.pageIndex);
  }

  protected resetSearch() {
    this.query = undefined;
    this.getFirstPage();
  }
}
