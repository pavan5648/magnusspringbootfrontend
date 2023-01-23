import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, withPreloading } from '@angular/router';
import { observable, window } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import baseUrl from 'src/app/services/helper';
import { SearchService } from 'src/app/services/search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  // defining obj
  employees = null;
  employee = [];


  // object for saerch body
  public searchData = {
    firstName: '',
    mobile: ''
  };


  // initializing constructor
  constructor(
    private router: Router,
    private _category: SearchService,
    private _http: HttpClient,
    private _emp: SearchService
  ) { }

  ngOnInit(): void {

    // retive all employee at the initialize it
    this._http.get(`${baseUrl}/emp`).subscribe(
      (data: any) => {
        // success observable
        this.employees = data;
        this.employee = data;
        console.log(this.employees);
      },
      (error) => {
        // error observable
        console.log(error)
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )

  }



  // method for retriving employee
  dataa() {
    this._http.get(`${baseUrl}/emp`).subscribe(
      (data: any) => {
        // success
        this.employees = data;
        this.employee = data;
        console.log(this.employees);
      },
      (error) => {
        // error
        console.log(error)
        // Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )
  }

  // delete employee
  deleteEmp(eId: any) {
    this._emp.deleteEmployee(eId).subscribe(
      (data) => {
        // success observable
        if (this.employee != null) {
          // this.employees = this.employees.filter((emp: { eId: any; })=> emp.eId != eId);
          this.employee = this.employee.filter((emp: { eId: any; }) => emp.eId != eId)
          // this.employees = this.employee;
        }
        Swal.fire('Success', 'Employee Deleted !', 'success');
        this.dataa();

      },
      (error) => {
        // error observable
        console.log(error)
        Swal.fire('Error !!', 'Error in deleting !', 'error');
      }
    )

  }



  // search emplyee
  searchEmployee() {
    this._http.post(`${baseUrl}/search`, this.searchData).subscribe(
      (data: any) => {
        // seccess observable
        this.employees = data;
        // this.employee = data;
        console.log(data)
      },
      (error) => {
        // error observable
        console.log(error)
        // Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )
  }



}
