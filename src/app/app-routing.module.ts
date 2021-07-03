import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'comments/:id', component: PostCommentsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
