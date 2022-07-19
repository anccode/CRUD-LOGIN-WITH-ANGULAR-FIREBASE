import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-posts',
  templateUrl: './details-posts.component.html',
  styleUrls: ['./details-posts.component.scss']
})
export class DetailsPostsComponent implements OnInit {
  @Input() post:PostI;
  public post$: Observable<PostI>;

  constructor(private route: ActivatedRoute, private postSvc :PostService) { }

  ngOnInit(): void {
    const idPost  = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost);
    }

    editPost(post:PostI){
        this.postSvc.editPostById(post);
        this.initValuesForm();
    }
    public editPostForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
    })
    private initValuesForm():void{
      this.editPostForm.patchValue({
        id: this.post.id,
        title: this.post.title,
      })
    }
  

}
