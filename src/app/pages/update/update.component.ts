import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _search: SearchService
  ) { }

  // variable for store id
  eId = undefined;

  emp: any;

  // creating object of employee
  public employee = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    city: '',
    gender: '',
    dateOfBirth: '',
    mobile: '',
    aws: '',
    devOps: '',
    fullStackDeveloper: '',
    middleware: '',
    webServices: '',
    qaAutomation: '',
  }

  ngOnInit(): void {
    // extracting id from url path
    this.eId = this._route.snapshot.params['eId'];

    // retriving single employee on initializing 
    this._search.sindleEmployee(this.eId).subscribe(
      (data: any) => {
        this.emp = data;
        console.log(this.emp)
      },
      (error) => {
        console.log(error)
      }
    )

  }

  // update data method
  public updateData() {
    this._search.updateEmployee(this.emp).subscribe(
      (data) => {
        // success observable
        Swal.fire('Success', 'Data Updated !', 'success');
        this.router.navigate(['dashboard/search']);
      },
      (error) => {
        // error observable
        console.log(error)
      }
    )
  }

}
