import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template: `
    <li>
      <a [href]="link">{{ label }}</a>
    </li>
  `,
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() link: string = '#'; // Nhận link từ component cha
  @Input() label: string = ''; // Nhận label từ component cha
}
