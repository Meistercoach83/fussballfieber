import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MyScrollServiceService } from '../../services/my-scroll-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  public imageSize;
  public imageClass = '';
  public isHomePage: boolean;
  public isTopOfPage = true;
  public showLogo: boolean;

  @ViewChild('navbarResponsive', { static: true }) navbarResponsive: ElementRef;

  @HostListener('window:scroll', ['$event']) getNavbarCss(): void {
    if (window.pageYOffset > 150) {
      this.isTopOfPage = false;
      this.imageClass = 'sm';
    } else {
      this.isTopOfPage = true;
      this.getImageClass();
    }
    this.showLogo = window.pageYOffset > window.innerHeight;
  }

  getImageClass() {
    this.breakpointObserver.observe(['(max-width:560px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.imageClass = 'xs';
      }
    });

    this.breakpointObserver.observe(['(max-width:767px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.imageClass = 'sm';
      }
    });

    this.breakpointObserver.observe(['(min-width:768px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.imageClass = 'lg';
      }
    });

    this.breakpointObserver.observe(['(min-width:1200px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.imageClass = 'xl';
      }
    });
  }

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver,
    public myScrollService: MyScrollServiceService) {
  }

  ngOnInit() {
    this.isHomePage = this.isHomeUrl(this.router.url);
    this.getImageClass();
  }

  hideMenu() {
    const elem = document.getElementById('navbarResponsive');
    elem.classList.remove('show');
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      this.hideMenu();
      if (event instanceof NavigationStart) {
      } else if (event instanceof NavigationEnd) {
        this.isHomePage = this.isHomeUrl(event.url);
        this.isHomePage ? this.myScrollService.scrollTo({ target: 'top' }) : this.myScrollService.scrollTo({ target: 'content' });
      }
    });
  }

  isHomeUrl(url: string): boolean {
    return url === '/' || url === '/startseite';
  }

}
