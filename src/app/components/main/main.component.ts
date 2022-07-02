import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USER } from './user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  users: USER[] = [];

  ngOnInit(): void {
    this.http.get<any>('https://62bfbe5ac134cf51cec377c5.mockapi.io/api/v1/user').subscribe(data => {
      console.log(data);
    
      this.users = data;
    });
  }

  // goi API show ra giao dien
  title = "Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.";
// https://62bfbe5ac134cf51cec377c5.mockapi.io/api/v1/user



}
