import { NotFoundComponent } from './not-found/not-found.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'' , redirectTo:'dashboard' , pathMatch:'full' },
  {path:'dashboard' , component:DashboardComponent},
  {path:'add' , component:AddComponent},
  {path:'update/:id' , component:UpdateComponent},
  {path:'delete/:id' , component:DeleteComponent},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
