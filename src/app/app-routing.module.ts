import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './view/parent-views/home-page/home-page.component';
import { AboutUsComponent } from './view/parent-views/about-us/about-us.component';

const routes: Routes = [];
routes.push(
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent}
)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
