import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name:'',
    to_name: 'Alain',
    from_email: '',
    subject: '',
    message: '',
  });
  constructor(private fb:FormBuilder){ }
  
  async send() {
    let response = await emailjs.send('service_vmx3aos','template_xwcf0ls',{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
      }, '3o0zBmMMWvWuTWl0c');

    alert('Your message has been sent! I will try to get back to you asap.');
    this.form.reset();
  }
  
}
