import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileViewComponent } from './file-view/file-view.component';
import { LogViewComponent } from './log-view/log-view.component';


const routes: Routes = [
  { path: '', component: FileViewComponent },
  { path: 'log', component: LogViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModules = [FileViewComponent, LogViewComponent];
