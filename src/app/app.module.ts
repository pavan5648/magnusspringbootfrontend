import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    CreateComponent,
    UpdateComponent,
    SearchComponent,
    HomeComponent
  ],

  // importing modules 
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTreeModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
