import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomePageComponent } from './view/parent-views/home-page/home-page.component';
import { AboutUsComponent } from './view/parent-views/about-us/about-us.component';
import { ContactUsComponent } from './view/parent-views/contact-us/contact-us.component';
import { OurServicesComponent } from './view/parent-views/our-services/our-services.component';

const routes: Routes = [];
routes.push(
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'services', component: OurServicesComponent},

)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())  
  ]
})
export class AppRoutingModule { }
