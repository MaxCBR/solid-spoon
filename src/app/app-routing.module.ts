import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Goal1Component } from './components/goal1/goal1.component';
import { Goal2Component } from './components/goal2/goal2.component';

const routes: Routes = [
  { path: 'goal1', component: Goal1Component },
  { path: 'goal2', component: Goal2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
