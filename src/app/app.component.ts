import { Component ,Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-analytics';
  @Input() employees: any;
  ngOnInit(){
    this.employees= [
      {
        id: 1,
        name: 'Richard Hendricks',
        email: 'richard@piedpiper.com',
      },
      {
        id: 2,
        name: 'Bertram Gilfoyle',
        email: 'gilfoyle@piedpiper.com',
      },
      {
        id: 3,
        name: 'Dinesh Chugtai',
        email: 'dinesh@piedpiper.com',
      },
    ]

  }
 

}