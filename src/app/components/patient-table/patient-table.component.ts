import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {
  
  @Input() employees: any;

  constructor() { }

  ngOnInit(): void {
  }

}
