import { Component } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { Companies } from 'src/interface/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  companies: Companies[] = [];
  selectedCompanies: Companies | null = null;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  selectCompany(company: Companies): void {
    this.selectedCompanies = company;
  }
}
