import { NgModule } from '@angular/core';
import { NavigationCancellationCode, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { UpdateComponent } from './pages/update/update.component';
import { AdminGuard } from './services/admin.guard';


// Array of routes
const routes: Routes = [
  // login page 
  {
    path: 'login',
    component: LoginComponent,
  },
  // Root page / landing page
  {
    path: '',
    component: LoginComponent,
  },
  // dashboard 
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AdminGuard],
    // children node of dashboard
    children:[
      // dashbord/home
      {
        path:'home',
        component:HomeComponent
      },
      // dashboard/create
      {
        path:'create',
        component:CreateComponent
      },
      // dashboard/search
      {
        path:'search',
        component:SearchComponent
      },

      // dashboard/update/(employeeId)
      {
        path:'update/:eId',
        component:UpdateComponent
      }

    ]
  },
  
  {
    path:'navbar',
    component:NavbarComponent,
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
