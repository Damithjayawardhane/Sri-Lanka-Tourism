import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navOpen = false;
  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.loadGoogleTranslate();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 700;
    if (!this.isMobile) {
      this.navOpen = false;
    }
  }

  loadGoogleTranslate() {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = () => {
      // Desktop widget
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,de,si,ta,fr,es,it,pt,ru,ja,ko,zh-CN,ar,hi',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false
      }, 'google_translate_element');

      // Mobile widget
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,de,si,ta,fr,es,it,pt,ru,ja,ko,zh-CN,ar,hi',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false
      }, 'google_translate_element_mobile');
    };
  }
}
