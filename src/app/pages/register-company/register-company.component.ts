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
  entityRegistration: string[] = ['Cartório', 'Junta Comercial', 'OAB', 'RFB'];
  successMessage: string = '';
  errorMessage: string = '';
  uf = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.companyForm = this.fb.group({
      responsible: ['', [Validators.required]],
      cpf: ['', [Validators.required], Validators.pattern(/^\d{11}$/)],
      dataNascimento: ['', Validators.required],
      name: ['', Validators.required],
      entityRegistration: ['', Validators.required],
      cep: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      neighborhood: ['', Validators.required],
      complement: [''],
      city: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      const newCompany = this.companyForm.value;
      this.http.post('http://localhost:3000/companies', newCompany).subscribe({
        next: () => {
          this.successMessage = 'Empresa cadastrada com sucesso!';
          this.errorMessage = '';
          this.companyForm.reset();
        },
        error: () => {
          this.errorMessage = 'Erro ao cadastrar empresa. Tente novamente.';
          this.successMessage = '';
        },
      });
    } else {
      this.markFormFieldsAsTouched();
    }
  }

  markFormFieldsAsTouched(): void {
    Object.keys(this.companyForm.controls).forEach((field) => {
      const control = this.companyForm.get(field);
      control?.markAsTouched();
    });
  }
}
