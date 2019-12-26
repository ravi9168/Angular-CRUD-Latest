import { Routes, RouterModule } from "@angular/router";
import { Employee } from "./../model/emplopee.model";

import { Component, HostListener, ViewChild, OnInit } from "@angular/core";
import { BsDatepickerDirective } from "ngx-bootstrap/datepicker";
import { Department } from "./../model/department.model";

import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { EmployeeService } from "./employee.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false })
  datepicker: BsDatepickerDirective; // hide on scrool datepicker

  datePickerConfig: Partial<BsDatepickerConfig>;
  minDate: Date;
  maxDate: Date;
  bsInlineValue = new Date();
  gender = "male";
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" }
  ];
  constructor(private empService: EmployeeService, private route: Router) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 20);

    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        showWeekNumbers: false,
        isAnimated: true,
        adaptivePosition: true,
        dateInputFormat: "DD/MM/YYYY",
        selectFromOtherMonth: true
      }
    );
  }

  ngOnInit() {}

  @HostListener("window:scroll") // hide on scrool datepicker
  onScrollEvent() {
    this.datepicker.hide();
  }

  saveEmployee(): void {
    this.empService.saveEmployee(this.employee);
    console.log(this.employee);
    this.route.navigate(["list"]);
  }

  togglePreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
