import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent {
  companyForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.companyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      company_name: ['', [Validators.required]],
      descrição: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      const newCompany = this.companyForm.value;
      this.http.post('http://localhost:3000/companies', newCompany).subscribe({
        next: () => {
          alert('Empresa cadastrada com sucesso!');
          this.companyForm.reset();
        },
        error: () => {
          alert('Erro ao cadastrar empresa. Tente novamente.');
        },
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
