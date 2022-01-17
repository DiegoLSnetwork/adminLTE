import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  constructor( public userService: UserService) { }

  ngOnInit(): void {
    this.userList();
  }

  userList(){
    this.userService.userList().subscribe(
      res => {
        this.userService.users = res;
      },
      err => console.log(err)
    )
  }

}
