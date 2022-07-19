import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { PostI } from '../../../shared/models/post.interface';
import { PostService } from './../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post:PostI;

  constructor(private postSvc: PostService) { }

  public editPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.initValuesForm();
  }

  editPost(post:PostI){
    console.log('Img', this.image);
    if(this.image == this.imageOriginal){
      this.postSvc.editPostById(post);
      //call method(post)
    }else{
      this.postSvc.editPostById(post);
      //call method(post,this.image)
    }
    
  }

  handleImage(event: any):void{
    this.image = event.target.files[0];
  }

  private initValuesForm():void{
    this.editPostForm.patchValue({
      id: this.post.id,
      nombre: this.post.title, 
    });
  }

}
