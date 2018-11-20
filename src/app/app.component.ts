import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: Array<string>;

  rows: Array<any>;

  constructor() {
    this.initialTestData();
  }

  /** 測試資料 */
  initialTestData() {
    this.columns = [];
    this.columns.push('品號名稱');
    this.columns.push('場內庫存');
    this.columns.push('客戶庫存');

    this.rows = [];
    this.rows.push(['test001', 10, 20]);
    this.rows.push(['test002', 15, 10]);
  }
}
