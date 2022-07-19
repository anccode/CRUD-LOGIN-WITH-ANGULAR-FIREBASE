import { Component, OnInit } from '@angular/core';
import {PostI} from '../../shared/models/post.interface';
import { PostService } from './../posts/post.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {
  public posts$:Observable<PostI[]>;
  constructor(private postSvc:PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postSvc.getAllPosts()
  }

}
