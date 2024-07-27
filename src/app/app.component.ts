import { Component } from '@angular/core';
import { GetempdataService } from './getempdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angassignment';

  searchTerm: string = '';

  emp_data: any = [];
  searchEmployees: any[] = [];

  constructor(private GetempdataService: GetempdataService) {}

  ngOnInit(): void {
    this.GetempdataService.getMenuData().subscribe(res => {
      console.log(res);
      this.searchEmployees = res.employee;
      this.emp_data = res.employee;;
    })
  }

  searcheEmp(): void {
    this.searchEmployees = this.emp_data.filter((employee: any) =>
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
