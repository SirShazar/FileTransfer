import { Component, OnInit } from '@angular/core';

export interface Group {
  name: string;
  id: number;
}
export interface Section {
  name: string;
  id: number;
  email: string;
  permissions: Group[];
}



@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  folders: Section[] = [
    {
      name: 'Payload 1',
      id: 123,
      email: 'tom@pl1.abc.edu',
      permissions: null
    },
    {
      name: 'Payload 2',
      id: 234,
      email: 'pl2@researchio.io',
      permissions: [{
        name: 'PL2 Managers',
        id: 987
      },
      {
        name: 'PL2 Researchers',
        id: 986
      }]
    },
    {
      name: 'Payload 3',
      id: 345,
      email: null,
      permissions: null
    },
    {
      name: 'Payload 4',
      id: 456,
      email: null,
      permissions: null
    },
  ];
}
