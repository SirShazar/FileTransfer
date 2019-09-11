import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcIconModule, MdcListModule } from '@angular-mdc/web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FtTreeComponent } from './ft-tree/ft-tree.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { FolderListMdcComponent } from './folder-list-mdc/folder-list-mdc.component';


@NgModule({
  declarations: [
    AppComponent,
    FtTreeComponent,
    FolderListComponent,
    FolderListMdcComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkTreeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatTreeModule,
    MdcIconModule,
    MdcListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
