import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  acceptedPolicy : boolean = false;
  warnTextPolicy : boolean = false;
  messageSubmitted : boolean = false;

  onSubmit(ngForm: NgForm){
    if(ngForm.valid && ngForm.submitted && this.acceptedPolicy){
      console.log(this.contactData);
      this.contactData.name = '';
      this.contactData.email = '';
      this.contactData.message = '';
      this.acceptedPolicy = false;
    }
  }

  acceptPolicy(){
    if(!this.acceptedPolicy){
      this.acceptedPolicy = true;
      this.warnTextPolicy = true;
    }else {
      this.acceptedPolicy = false;
    }
    
  }
}
