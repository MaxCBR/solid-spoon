import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinedComponent } from './components/combined/combined.component';
import { Goal1Component } from './components/goal1/goal1.component';
import { Goal2Component } from './components/goal2/goal2.component';

const routes: Routes = [
  { path: 'goal1', component: Goal1Component },
  { path: 'goal2', component: Goal2Component },
  { path: 'both', component: CombinedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
