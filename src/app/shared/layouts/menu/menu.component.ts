import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
// import { MyScrollServiceService } from '../../shared/services/my-scroll-service.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/index';
import { ILang, TranslatesService } from '@shared/translates';
import { MyScrollServiceService } from '@shared/services/my-scroll-service.service';
import { _document } from '@angular/platform-browser/src/browser';

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

  public langList$: Observable<ILang[]>;
  public currentLang: string;

  @ViewChild('navbarResponsive') navbarResponsive: ElementRef;

  @HostListener('window:scroll', ['$event']) getNavbarCss(): void {
    if (window.pageYOffset > 150) {
      this.isTopOfPage = false;
      this.imageClass = 'sm';
    } else {
      this.isTopOfPage = true;
      this.getImageClass();
    }
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private elementRef: ElementRef,
              private _translatesService: TranslatesService,
              public breakpointObserver: BreakpointObserver,
              public myScrollService: MyScrollServiceService) {
  }

  ngOnInit() {
    this.isHomePage = this.isHomeUrl(this.router.url);
    this.langList$ = this._translatesService.getLangList();
    this.currentLang = this._translatesService.getCurrentLang();
    this.getImageClass();
  }


  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      } else if (event instanceof NavigationEnd) {
        this.isHomePage = this.isHomeUrl(event.url);
        const elem =  document.getElementById('navbarResponsive');
        elem.classList.remove('show');
        this.isHomePage ? this.myScrollService.scrollTo({ target: 'top' }) : this.myScrollService.scrollTo({ target: 'content' });
      }
    });
  }

  isHomeUrl(url: string): boolean {
    return url === '/' || url === '/startseite';
  }

  public changeLang(lang: string): void {
    this._translatesService.changeLang(lang);
    this.currentLang = lang;
  }

}
