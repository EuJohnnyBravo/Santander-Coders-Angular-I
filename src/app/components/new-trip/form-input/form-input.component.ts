import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
})
export class FormInputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() classList: string = '';
  @Input() control!: FormControl;

  get errorMessage(): string {
    if (this.control.errors) {
      if (this.control.errors['required']) {
        return 'Campo obrigatório';
      } else if (this.control.errors['minlength']) {
        return `Mínimo de ${this.control.errors['minlength'].requiredLength} caracteres`;
      } else if (this.control.errors['email']) {
        return this.control.errors['email'] ? 'Email inválido' : '';
      }
    }
    return '';
  }
}
