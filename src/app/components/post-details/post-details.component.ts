import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: any;
  constructor(private  postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let postId = this.route.snapshot.params.id;
    this.postsService.getPostDetails(postId).subscribe(
      (res) => {
        this.postDetails= res
      }
    )
  }

}
