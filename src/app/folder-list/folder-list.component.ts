import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public getItems(folderName): string[] {
    const blah: string[] = [];
    return blah;
  }

  // public getItems(folderName): FolderListItemInterface[] {
  //   let nodes: FolderListItemInterface[] = [];

  //   nodes = folderName ? this._fileService.getFolderNodesByNodeName(folderName) : this._fileService.getRootFolders();

  //   if (this.mode == 'folder') {
  //     nodes = nodes.filter(node => node.isFolder && !node.isRoot);
  //   } else if (this.mode == 'files') {
  //     nodes = nodes.filter(node => !node.isFolder);
  //   }
  //   // else nodes is mixed state of nodes

  //   // Add icons as appropriate
  //   nodes.forEach(node => node.icon = node.isFolder ? 'folder' : 'file-blah');

  //   return nodes;
  // }

}
