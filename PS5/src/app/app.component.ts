







import { Component } from '@angular/core';
import { CONTACTS} from './CONTACTS-MOCK';
import {CONTACT} from './CONTACT';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS591 Contacts';
  contacts = CONTACTS;
  private selectedContact: CONTACT;


  selectContact(contact: CONTACT) {
    this.selectedContact = contact;

  }
}
