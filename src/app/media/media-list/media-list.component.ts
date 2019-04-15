import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { Observable } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaListComponent implements OnInit {

  @Input() mediaGallery: any;

  public items: GalleryItem[];

  public galleryConfig$: Observable<{
    width: number,
    height: number
  }>;

  constructor(public media: MediaObserver,
              public gallery: Gallery,
              public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.items = this.mediaGallery.files.map(item => {
      return {type: 'thumbnail', data: item};
    });

    this.galleryConfig$ = this.media.asObservable().pipe(
      map((res: MediaChange[]) => {
        let config;
        console.log(res[0].mqAlias);
        switch (res[0].mqAlias) {
          case 'xs':
            config = {
              width: 160,
              height: 160
            };
            break;
          case 'sm':
            config = {
              width: 320,
              height: 200
            };
            break;
          case 'md':
            config = {
              width: 640,
              height: 480
            };
            break;
          default:
            config = {
              width: 800,
              height: 600
            };
            break;
        }
        return config;
      })
    );
  }

}
