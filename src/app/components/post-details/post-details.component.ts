import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: any;
  constructor(private  postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPostDetails(8348).subscribe(
      (res) => {
        this.postDetails= res
      }
    )
  }

}
