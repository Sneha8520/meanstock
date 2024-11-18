import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-aemployee-profile',
  templateUrl: './aemployee-profile.component.html',
  styleUrl: './aemployee-profile.component.scss',
  providers: [MessageService]
})
export class AemployeeProfileComponent {

  employees: any[] = [];
  displayConfirmDialog = false;
  selectedEmployee: any;

  constructor(public router: Router,public employeeService: EmployeeService,private messageService: MessageService) {}
  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
      }
    });
  }


  editEmployee(employee: any): void {
    this.router.navigate(['/employee-edit', employee._id]);
  }

  confirmDelete(employee: any) {
    this.displayConfirmDialog = true;
    this.selectedEmployee = employee;
  }

  onDelete(): void {
    const employeeId = this.selectedEmployee._id;
    if (employeeId) {
      this.employeeService.deleteEmployee(employeeId).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Delete successfully!',
          });
          this.loadEmployees(); // Reload employees list after deletion
          this.displayConfirmDialog = false; // Close dialog after deletion
        },

        error: (error) => {
          console.error('Error deleting employee:', error);
        }
      });
    }
  }


}
