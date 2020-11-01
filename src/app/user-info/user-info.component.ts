import { DataService } from './../service/data.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnChanges {
  user: any = {};


  constructor(private dataService: DataService) { }
  ngOnInit() {
  }

  @Input() id: string;

  ngOnChanges() {
    this.dataService.getUser(this.id)
      .subscribe(data => { this.user = data; this.user = this.user.data; console.log(this.user) })
  }
}
