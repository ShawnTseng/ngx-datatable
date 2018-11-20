import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doggy-table',
  templateUrl: './doggy-table.component.html',
  styleUrls: ['./doggy-table.component.scss']
})

export class DoggyTableComponent {
  /** 欄位 */
  @Input() columns: Array<any>;

  /** 資料列 */
  @Input() rows: Array<any>;
}
