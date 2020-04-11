import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PoststableComponent } from './components/poststable/poststable.component';


const routes: Routes = [
  {path: "", component: PoststableComponent},
  {path: "post/:id", component: PostDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
