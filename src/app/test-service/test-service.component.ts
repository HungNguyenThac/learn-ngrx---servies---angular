import { CompanyServiceService } from './../core/services/company.service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css'],
})
export class TestServiceComponent implements OnInit {
  constructor(private compnanyService: CompanyServiceService) {}

  ngOnInit(): void {}
}
