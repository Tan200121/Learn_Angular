import { Component, OnInit } from '@angular/core';

// Interface cho menu item
interface MenuItem {
  label: string;
  link?: string;
  children?: MenuItem[]; // Menu con
  expanded?: boolean; // Trạng thái mở/đóng
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Dữ liệu menu nhiều cấp với kiểu MenuItem
  menuItems: MenuItem[] = [
    { 
      label: 'Home', 
      link: 'index.html' 
    },
    { 
      label: 'About', 
      link: '#about' 
    },
    {
      label: 'Services',
      children: [
        { label: 'Web Development', link: '#web' },
        { 
          label: 'Mobile Apps', 
          children: [
            { label: 'Android', link: '#android' },
            { label: 'iOS', link: '#ios' },
          ]
        },
      ],
    },
    { 
      label: 'Portfolio', 
      link: '#portfolio' 
    },
    { 
      label: 'Contact', 
      link: '#contact' 
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Toggle mở/đóng submenu
  toggleMenu(item: MenuItem): void {
    item.expanded = !item.expanded; // Đảo trạng thái mở/đóng
  }
}
