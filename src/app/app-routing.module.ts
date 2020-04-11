import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsListComponent} from './posts-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PoststableComponent } from './components/poststable/poststable.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "test", component: PostDetailsComponent },
  {path: "posts-list", component: PostsListComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
