import { Component, Input } from '@angular/core';
import { Column } from './column';

@Component({
  selector: 'app-doggy-table',
  templateUrl: './doggy-table.component.html',
  styleUrls: ['./doggy-table.component.scss']
})

export class DoggyTableComponent {
  /** 欄位 */
  @Input() columns: Column[];

  /** 資料列 */
  @Input() rows: Array<any>;
}
