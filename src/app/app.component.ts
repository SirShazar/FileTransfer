import { Component } from '@angular/core';
import { UserService } from './services/user.service';



@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FileTransfer';

  isAdmin: boolean = false;

  constructor(private _userService: UserService) { 
    this.isAdmin = this._userService.isAdmin();


  }

}
