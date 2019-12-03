import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  isExpanded: boolean = false;

  title = 'Baroudeurs Pur Beurre';
  navLinks = [
    { label: 'Accueil', routerLink: 'home' },
    { label: 'Nos Articles', routerLink: 'flow' },
    { label: 'Le Périple', routerLink: 'journey' },
    { label: 'Où en Sommes Nous ?', routerLink: 'timeline' },
    { label: 'Contact', routerLink: 'contact' }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // The collapsible content is about to be shown
    $("#navbarToggler").on('show.bs.collapse', () => {
      this.isExpanded = true;
      this.cdr.detectChanges();
    });

    // The collapsible content is now hidden
    $("#navbarToggler").on('hidden.bs.collapse', () => {
      this.isExpanded = false;
      this.cdr.detectChanges();
    });
  }

  isHome() {
    return window.location.pathname === '/home';
  }
}
