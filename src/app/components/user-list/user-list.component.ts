import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userList();
  }

  userList() {
    this.userService.userList().subscribe(
      res => {
        this.userService.data = res;
        this.userService.users=this.userService.data.users;
        console.log(this.userService.data.title);
      },
      err => console.log(err)
    )
  }
}
