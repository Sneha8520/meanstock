import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  providers: [MessageService]
})
export class EmployeeTableComponent {
  employeeForm: FormGroup;
  employeeId: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public employeeService: EmployeeService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.loadEmployee();
    this.employeeForm = new FormGroup({
      employeeName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/),  // Only letters and spaces allowed
      ]),
      technology: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/),  // Only letters and spaces allowed
      ]),
      experience: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),  // Only numbers allowed
      ]),
      skill: new FormControl(0, [Validators.required]),
      attitude: new FormControl(0, [Validators.required]),
      communciation: new FormControl(0, [Validators.required]),
      goal: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/),  // Only letters and spaces allowed
      ]),
      feedback: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/),  // Only letters and spaces allowed
      ]),
    });

  }

  loadEmployee(): void {
    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe({
        next: (data) => {
          this.employeeForm.patchValue(data);
        },
        error: (error) => {
          console.error('Error loading employee:', error);
        },
      });
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      if (this.employeeId) {
        this.updateEmployee();
      } else {
        this.addEmployee();
      }
    } else {
      this.employeeForm.markAllAsTouched();
      this.messageService.add({  // Use messageService to show messages
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill in all required fields.',
      });
    }
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Employee added successfully!',
        });
        setTimeout(() => {
          this.router.navigate(['/employee-profile']);
        }, 500);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add employee. Please try again.',
        });
      },
    });
  }


  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employeeId, this.employeeForm.value).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Employee  Updated successfully!',
        });
        setTimeout(() => {
          this.router.navigate(['/employee-profile']);
        }, 500);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add employee. Please try again.',
        });
      },
    });
  }

  onCancel(): void {
    this.employeeForm.reset();
    this.messageService.add({
      severity: 'info',
      summary: 'Cancelled',
      detail: 'Form reset successfully.',
    });
  }
}
