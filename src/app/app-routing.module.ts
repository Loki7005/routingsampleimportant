import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'aboutme', component: AboutmeComponent },
  { path:'contactme', component: ContactmeComponent },
  { path:'blog', loadChildren: () => import ('./blog/blog.module').then( m => m.BlogModule) },
  { path:'**', component: PageNotFoundComponent },
  /*{ path:'**', redirectTo:'home' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
