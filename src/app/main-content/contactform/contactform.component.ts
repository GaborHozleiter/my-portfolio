import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService } from '../../translate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  changeLanguage = inject(TranslateService);
  mailTest = true;
  acceptedPolicy : boolean = false;
  warnTextPolicy : boolean = false;
  messageSubmitted : boolean = false;

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: ''
  }
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  acceptPolicy(){
    if(!this.acceptedPolicy){
      this.acceptedPolicy = true;
      this.warnTextPolicy = true;
    }else {
      this.acceptedPolicy = false;
    }
  }
  

      onSubmit(ngForm: NgForm) {
        if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
          this.http.post(this.post.endPoint, this.post.body(this.contactData))
            .subscribe({
              next: (response) => {
                this.acceptedPolicy = false;
                ngForm.resetForm();
              },
              error: (error) => {
                console.error(error);
              },
              complete: () => console.info('send post complete'),
            });
        } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
    
          ngForm.resetForm();
        }
      }
}
