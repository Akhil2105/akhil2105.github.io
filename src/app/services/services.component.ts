import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  login2form: FormGroup;
  selectedGender= '';
  selectedDate: string = '';
  
  
 
  constructor(private fb: FormBuilder) {
    this.login2form = this.fb.group({
      username: [''],
      password: [''],
      email:  ['', [Validators.required, Validators.email]],
      selectedGender: ['']
    });
  } 

  openDatePicker() {
    const datepicker = document.getElementById('dob');
    if (datepicker) {
      datepicker.setAttribute('type', 'date');
    }
  }
 
 


  onSubmit(login2form: FormGroup) {
    
  }
  

  login1Submit(): void {
    
  }

  login2Submit(): void {
  
    
}

}