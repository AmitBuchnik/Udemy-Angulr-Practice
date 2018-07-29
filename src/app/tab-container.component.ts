import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  template: `
    <ng-template #defaultTabButtons>
      <div class="default-tab-buttons">
      </div>
    </ng-template>

    <ng-container *ngTemplateOutlet="headerTemplate ? headerTemplate : defaultTabButtons">
    </ng-container>
  `,
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }
}
