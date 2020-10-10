import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
// import { ExplainingComponent } from './components/explaining/explaining.component';
// import { MyWorldComponent } from './components/my-world/my-world.component';
// import { LivingComponent } from './components/living/living.component';
// import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  // { path: '/hemofiliyi-anlamak', component: ExplainingComponent },
  // { path: '/hemofili-dunyam', component: MyWorldComponent },
  // { path: '/hemofili-dunyasinda-yasamak', component: LivingComponent },
  // { path: '/budunyanindestekcileri', component: SupportComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
