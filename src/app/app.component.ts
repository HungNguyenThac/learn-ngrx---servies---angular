import { Component } from '@angular/core';
import { CompanyServiceService } from './core/services/company.service.service';

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

  userList = [
    { name: 'Nguyen Thac Hung', age: 18 },
    { name: 'Nguyen Dinh Toan', age: 19 },
    {
      name: 'Nguyen Duy Manh',
      age: 20,
    },
  ];

  addUser() {
    const fakeListUser = JSON.parse(JSON.stringify(this.userList));
    this.userList = [
      ...fakeListUser,
      {
        name: 'Nguyen Duc Huy',
        age: 21,
      },
    ];
  }
  trackById(index: number, user: any): number {
    return user.age;
  }
}
