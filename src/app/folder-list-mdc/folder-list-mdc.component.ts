import { Component, Input, OnInit } from '@angular/core';

interface Group {
  name: string;
  id: number;
}


@Component({
  selector: 'app-folder-list-mdc',
  templateUrl: './folder-list-mdc.component.html',
  styleUrls: ['./folder-list-mdc.component.css']
})
export class FolderListMdcComponent implements OnInit {

  @Input()
  public mode: string = 'mixed'; // 'folders', 'files', 'mixed'

  constructor() { }

  ngOnInit() {

  }


  public folders = [
    { name: 'Photos', icon: 'folder', addDate: 'Jan 9, 2015' },
    { name: 'Recipes', icon: 'folder', addDate: 'Jan 17, 2015' },
    { name: 'Work', icon: 'folder', addDate: 'Jan 28, 2015' },
  ];

  public files=[
    { name: 'Vacation Itinerary', icon: 'insert_drive_file', addDate: 'Jan 10, 2015' },
    { name: 'Kitchen Remodel', icon: 'insert_drive_file', addDate: 'Jan 20, 2015' }
  ];

  public filesAndFolders = this.folders.concat(this.files);

  public getItems() {
    return this.mode == 'folders' ? this.folders :
                 this.mode == 'files' ? this.files :
                 this.filesAndFolders;
  }
}
