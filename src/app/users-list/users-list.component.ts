import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: any = []

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
   this.usersList = this.userService.getUsersList()
  }




}
