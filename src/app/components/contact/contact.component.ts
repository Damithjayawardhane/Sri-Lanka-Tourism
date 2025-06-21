import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Create email content
    const subject = encodeURIComponent(this.contactForm.subject || 'Contact from Sri Lanka Tourism Website');
    const body = encodeURIComponent(`
Name: ${this.contactForm.name}
Email: ${this.contactForm.email}
Subject: ${this.contactForm.subject}

Message:
${this.contactForm.message}
    `);

    // Open default email client
    const mailtoLink = `mailto:broofficemail@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');

    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  openWhatsApp() {
    const message = encodeURIComponent('Hello! I would like to get more information about Sri Lanka tourism.');
    const whatsappLink = `https://wa.me/94712621966?text=${message}`;
    window.open(whatsappLink, '_blank');
  }

  openEmail() {
    const mailtoLink = 'mailto:broofficemail@gmail.com?subject=Inquiry about Sri Lanka Tourism';
    window.open(mailtoLink, '_blank');
  }
}
