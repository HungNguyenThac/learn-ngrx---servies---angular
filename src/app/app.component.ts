import { CompanyServiceService } from './core/services/company.service.service';
import { ICompany } from './core/services/user.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private companyService: CompanyServiceService) {}

  onSelected() {
    console.log('app', this.companyService.getListCompany());
  }
}
