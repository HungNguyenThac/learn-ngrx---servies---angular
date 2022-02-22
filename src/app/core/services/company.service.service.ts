import { Injectable, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { companyList } from './fakeData';
import { ICompany } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor() {}

  companyList: ICompany[] = [];

  FetchListCompany() {
    of(companyList).subscribe((rs) => (this.companyList = rs));
  }

  getListCompany(): ICompany[] {
    return this.companyList;
  }

  console() {
    console.log('services', this.companyList);
  }
}
