import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DetailsPostsComponent } from './components/posts/details-posts/details-posts.component';

const routes: Routes = [
  {path:'', 
  component:ContainerAppComponent,
  children:[
    { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
  { path:'post/:id', component: DetailsPostsComponent },
  { path: 'Inicio', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  {path: '', redirectTo:'/Inicio',
pathMatch:'full'}
  ]
},
  { path: 'perfil', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'IniciarSession', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'soli', loadChildren: () => import('./components/solicitud/solicitud.module').then(m => m.SolicitudModule) },
  { path: 'super', loadChildren: () => import('./components/supervisor/supervisor.module').then(m => m.SupervisorModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
