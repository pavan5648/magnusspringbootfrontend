import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr != undefined || tokenStr != '' || tokenStr != null) {
      this.router.navigate(['dashboard']);
    }
  }


  formSubmit() {
    console.log('login btn clicked');

    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login...
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);
          //redirect to dashboard dashboard

          this.router.navigate(['dashboard/home']);
          this.login.loginStatusSubject.next(true);


        });
      },
      (error) => {
        console.log('Error !');
        console.log(error.error.message)
        console.log(error);

        if (error.message == "Http failure response for http://localhost:8080/jala/api/v1/login: 0 Unknown Error") {
          this.snack.open('RR_CONNECTION_REFUSED', '', {
            duration: 3000,
          });
        } else {
          this.snack.open(error.error.message, '', {
            duration: 3000,
          });
        }

      }
    );
  }


}
