import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss'],
})
export class RegisterCompanyComponent {
  companyForm: FormGroup;
  entities: string[] = ['Cartório', 'Junta Comercial', 'OAB', 'RFB'];
  successMessage: string = '';
  errorMessage: string = '';
  isModalVisible: boolean = false;
  states = [
    { uf: 'AC' },
    { uf: 'AL' },
    { uf: 'AP' },
    { uf: 'AM' },
    { uf: 'BA' },
    { uf: 'CE' },
    { uf: 'DF' },
    { uf: 'ES' },
    { uf: 'GO' },
    { uf: 'MA' },
    { uf: 'MT' },
    { uf: 'MS' },
    { uf: 'MG' },
    { uf: 'PA' },
    { uf: 'PB' },
    { uf: 'PR' },
    { uf: 'PE' },
    { uf: 'PI' },
    { uf: 'RJ' },
    { uf: 'RN' },
    { uf: 'RS' },
    { uf: 'RO' },
    { uf: 'RR' },
    { uf: 'SC' },
    { uf: 'SP' },
    { uf: 'SE' },
    { uf: 'TO' },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.companyForm = this.fb.group({
      responsible: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', Validators.required],
      name: ['', Validators.required],
      entityRegistration: ['', Validators.required],
      cep: ['', [Validators.required]],
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
          this.successMessage = 'Solicitaçao cadastrada com sucesso';
          this.errorMessage = '';
          this.isModalVisible = true;
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

  closeModal(): void {
    this.isModalVisible = false;
  }
}
