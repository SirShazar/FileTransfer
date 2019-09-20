import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private _userService: UserService) { 
    this.isAdmin = this._userService.isAdmin();
  }

  ngOnInit() {
  }
}
