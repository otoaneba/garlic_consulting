import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './view/parent-views/home-page/home-page.component';

const routes: Routes = [];
routes.push(
  {path: '', component: HomePageComponent}
)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
