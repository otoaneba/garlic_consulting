import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Contact } from './contact-form';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public model = new Contact("G", "test@test.com", "hello", "6785550000")
  public form: FormGroup = this.formBuilder.group({
    firstName: [null],
    interests: [null]
  });
  constructor(private formBuilder: FormBuilder) {}
}
