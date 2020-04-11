import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Posts } from '../../models/posts.model';


@Component({
  selector: 'poststable',
  templateUrl: './poststable.component.html',
  styleUrls: ['./poststable.component.css']
})
export class PoststableComponent implements OnInit {
  //dataSource = new PostsDataSource(this.postsService);
  dataSource = [];
  displayedColumns = ['id', 'slug', 'status', 'title', 'date'];
  
  constructor(private  postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts(1).subscribe(
      (res) => {
        this.dataSource = res;
        this.postsService.getPosts(2).subscribe(
          (res) => {
            this.dataSource = this.dataSource.concat(res)
          }
        )
      }
    )
    
  }
}