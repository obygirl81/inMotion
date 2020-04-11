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
  dataSource = new PostsDataSource(this.postsService);
  displayedColumns = ['id', 'slug', 'status', 'title', 'date'];
  
  constructor(private  postsService: PostsService) { }

  ngOnInit(): void {
  }
  logData(data){
    console.log(data)
  }

}

export class PostsDataSource extends DataSource<any> {
  constructor(private postsService: PostsService) {
    super();
  }
  connect(): Observable<Posts[]> {
    return this.postsService.getPosts(1);
  }
  disconnect() {}
}
