import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {

  technicalContacts = [
    {
      title: 'Government Offices',
      phone: ' Raise Technical Issue via Login',
      email: ' -'
    },
    {
      title: 'Empanelled Hospitals',
      phone: ' N/A',
      email: ' wbhshospitalassist@gmail.com'
    }
  ];

  giaContact = {
    phone: '18001028014',
    email: 'support.hshed-wb@nic.in'
  };

  prbContact = {
    phone: '18005726506',
    email: 'wbhsprj@gmail.com'
  };

  officials = [
    {
      name: 'Sri Khalid Aizaz Anwar, IAS',
      designation: 'Secretary to the Finance Department',
      email: '-'
    },
    {
      name: 'Sri Avik Roy, WBA & AS',
      designation: 'Deputy Secretary',
      email: 'as2med.fd-wb@gov.in'
    },
    {
      name: 'Sri Swayambhu Dey, WBA & AS',
      designation: 'OSD & Ex-Officio Deputy Secretary',
      email: 'cabfna009-wb@gov.in'
    },
    {
      name: 'Sri Angshuman Chakraborty, WBA & AS',
      designation: 'Accounts Officer',
      email: 'as3med.fd-wb@bangla.gov.in'
    },
    {
      name: 'Sri Tarun Kumar Haldar, WBSS',
      designation: 'Deputy Secretary',
      email: 'as1med.fd-wb@bangla.gov.in'
    },
    {
      name: 'Sri Gopal Chandra Pakhira, WBSS',
      designation: 'Deputy Secretary',
      email: 'N/A'
    }
  ];

}