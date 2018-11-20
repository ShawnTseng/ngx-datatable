import { Component, Input } from '@angular/core';
import { Column } from './column';

@Component({
  selector: 'app-doggy-table',
  templateUrl: './doggy-table.component.html',
  styleUrls: ['./doggy-table.component.scss']
})

export class DoggyTableComponent {
  @Input()
  set columns(val: Column[]) {
    if (val) {
      this._columns = val;
    }
  }

  get columns() {
    return this._columns;
  }

  @Input()
  set rows(val: Array<any>) {
    if (val) {
      this._rows = val;
    }
  }

  get rows() {
    return this._rows;
  }

  private _columns: Column[] = [];

  private _rows: Array<any>;
}
