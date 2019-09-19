import { Component, Input, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { NodeInterface } from '../interfaces/node.interface';

interface FolderListItemInterface extends NodeInterface {
  icon?: string;
}


@Component({
  selector: 'app-folder-list-mdc',
  templateUrl: './folder-list-mdc.component.html',
  styleUrls: ['./folder-list-mdc.component.css']
})
export class FolderListMdcComponent implements OnInit {

  @Input()
  public mode: string = 'mixed'; // 'folders', 'files', 'mixed'

  constructor(private _fileService: FileService) { }

  ngOnInit() {

  }



  public getItems(folderName): FolderListItemInterface[] {
    let nodes: FolderListItemInterface[] = [];

    nodes = folderName ? this._fileService.getFolderNodesByNodeName(folderName) : this._fileService.getRootFolders();

    if (this.mode == 'folder') {
      nodes = nodes.filter(node => node.isFolder && !node.isRoot);
    } else if (this.mode == 'files') {
      nodes = nodes.filter(node => !node.isFolder);
    }
    // else nodes is mixed state of nodes

    // Add icons as appropriate
    nodes.forEach(node => node.icon = node.isFolder ? 'folder' : 'file-blah');

    return nodes;
  }

  public folderClicked(event) {
    console.log(event);
  }
}
