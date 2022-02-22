import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CompanyServiceService } from './../services/company.service.service';
import { ICompany } from './../services/user.interface';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  listCompany: ICompany[] = [];
  companyDetail!: ICompany;

  constructor(private companyService: CompanyServiceService) {}

  ngOnInit(): void {
    this.companyService.FetchListCompany();
    this.listCompany = this.companyService.getListCompany();
    this.companyDetail = this.listCompany[0];
  }

  @Output() select = new EventEmitter();

  selectCompany(company: ICompany) {
    this.companyDetail = company;
    console.log(this.companyService.console());
  }
}
