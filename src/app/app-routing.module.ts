import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TalkSubmissionComponent} from './talk-submission/talk-submission.component';

const routes: Routes = [
  {path: 'talk-submission', component: TalkSubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
