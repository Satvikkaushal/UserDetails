import { DataService } from './service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Users';
  users: any;
  userId: string;
  showInfo: boolean = false;

  constructor(private dataService: DataService) { }

  Sort(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => { this.users = data; this.users = this.users.data; this.users.sort(this.Sort("first_name")) })
  }

  onOptionsSelected(name: string) {
    this.showInfo = true;
    this.users.map(user => {
      user.first_name + " " + user.last_name === name ? this.userId = user.id : "";
    })
  };
}
