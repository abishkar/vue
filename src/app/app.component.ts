import { Component ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { 

  }

  title = 'data-analytics';
  @Input() patients: any;
  ngOnInit(){

    this.patients= [];

     this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(resp => {
      console.log(resp);
      this.patients=resp;
      
    });

    
  

    

  }
 

}
