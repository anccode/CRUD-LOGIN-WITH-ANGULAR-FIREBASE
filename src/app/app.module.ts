import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importacion a firebase

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BUCKET} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';

//termina

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';
import { _MatMenu } from '@angular/material/menu';
import { environment } from 'src/environments/environment';

import { AngularFireAuthModule} from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';
import { DetailsPostsComponent } from './components/posts/details-posts/details-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
    DetailsPostsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NewPostModule,
    MaterialModule,
    ReactiveFormsModule,
    EditPostModule
  ],
  entryComponents: [ModalComponent],
  providers: [{
    //storage de firebase link de tu firebasestorage'gs://blog-a4136.appspot.com'
    provide:BUCKET,useValue:'gs://practicas-upeu-8a97d.appspot.com'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
