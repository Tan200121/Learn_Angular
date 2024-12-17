import { literalMap } from '@angular/compiler';
import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  link?: string;
  children?: MenuItem[]; // Menu con
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      children: [
        { label: 'Home 1 - index.html', link: 'index.html' },
        { label: 'Home 2 - index-2.html', link: 'index-2.html' },
        { label: 'Home 3 - index-3.html', link: 'index-3.html' },
        { label: 'Home 4 - index-4.html', link: 'index-4.html' },
      ],
    },
    { label: 'About', link: 'index.html#about' },
    {
      label: 'Drop Down',
      children: [
        { label: 'Drop Down 1', link: '#' },
        {
          label: 'Deep Drop Down',
          children: [
            { label: 'Deep Drop Down 1', link: '#' },
            { label: 'Deep Drop Down 2', link: '#' },
            { label: 'Deep Drop Down 3', link: '#' },
            {
              label: 'Deep Cross Down', // Thêm cấp 4 ở đây
              children: [
                { label: 'Deep Cross Down 1', link: '#' },
                { label: 'Deep Cross Down 2', link: '#' },
                { label: 'Deep Cross Down 3', link: '#' },
              ],
            },
          ],
        },
        { label: 'Drop Down 2', link: '#' },
      ],
    },
    { label: 'Portfolio', link: 'index.html#portfolio' },
    { label: 'Team', link: 'index.html#team' },
    { label: 'Blog', link: 'blog.html' },
    {
      label: 'Mega Menu',
      children: [
        {
          label: 'Column 1',
          children: [
            { label: 'Column 1 link 1', link: '#' },
            { label: 'Column 1 link 2', link: '#' },
            { label: 'Column 1 link 3', link: '#' },
          ],
        },
        {
          label: 'Column 2',
          children: [
            { label: 'Column 2 link 1', link: '#' },
            { label: 'Column 2 link 2', link: '#' },
            { label: 'Column 2 link 3', link: '#' },
          ],
        },
      ],
    },
    { label: 'Services', link: 'index.html#services' },
    { label: 'Contact', link: 'index.html#contact' },
  ];
}
