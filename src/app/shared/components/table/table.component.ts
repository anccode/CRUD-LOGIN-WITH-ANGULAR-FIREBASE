import { Component,OnInit,ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import {PostService} from '../../../components/posts/post.service';
import { PostI } from '../../models/post.interface';

import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from './../modal/modal.component';

export interface PeriodicElement{
  name:string;
  position:number;
  weight:number;
  symbol:string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[]=['title','docente', 'fecha','actions'];;
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatPaginator,{static:true})paginator: MatPaginator;
  @ViewChild(MatSort,{static:true})sort:MatSort;
  @Input() post:PostI;
  constructor(private postSvc: PostService, public dialog: MatDialog) { }

  ngOnInit(): void { 
    this.postSvc.getAllPosts().subscribe(posts => (this.dataSource.data=posts))
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  onEditPost(post:PostI){
    console.log('edit Post', post);
    this.openDialog(post);
    
  }
  onDeletePost(post:PostI){

    Swal.fire({
      title:'Estas seguro que quieres eliminar',
      text:`nose podra recuperar`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d60',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si Por Favor!'
    }).then(result=>{
      
      //elimina una fila de la tabla
      if(result.value){
        this.postSvc.deletePostById(post).then(()=>{
          Swal.fire('Eliminado!','Tu Practica a sido eliminado.','success');
        }).catch((error)=>{
          Swal.fire('Deleted!','There was an error deleting this post.','error');
        });
      }
    })
    
  }
  onNewPost(){
    this.openDialog();
  }

  openDialog(post?:PostI):void{
    const config ={
      data:{
        message:post ? 'Editar': 'Solicitud de Practica',
        content: post
      }
    };
    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result ${result} `)
    })
  }
}

