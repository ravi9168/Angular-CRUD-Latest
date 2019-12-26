import { Employee } from '../model/emplopee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employees= this.empService.getEmployees();
  }

}
