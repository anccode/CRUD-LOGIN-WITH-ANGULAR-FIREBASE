import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {PostI} from '../../../shared/models/post.interface';
import {PostService} from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  private image : any;
  constructor(private postSvc:PostService) { }

  public newPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  addNewPost(data: PostI){
    this.postSvc.preAddAndUpdatePost(data);
    Swal.fire(
      'Solicitud Enviada',
      'Te avisaremos cuando este revisado',
      'success'
    )
  }

  handleImage(event:any):void{
    this.image = event.target.files[0];
  }
}
