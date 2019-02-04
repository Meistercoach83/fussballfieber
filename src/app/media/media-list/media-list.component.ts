import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryConfig, GalleryItem } from '@ngx-gallery/core';
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
  public galleryConfig$: Observable<GalleryConfig>;

  constructor(media: MediaObserver, public gallery: Gallery, public lightbox: Lightbox) {
    this.galleryConfig$ = media.media$.pipe(
      map((res: MediaChange) => {
        if (res.mqAlias === 'sm' || res.mqAlias === 'xs') {
          return {
            thumbWidth: 80,
            thumbHeight: 80
          };
        }
        return {
          thumbWidth: 120,
          thumbHeight: 90
        };
      })
    );
  }

  ngOnInit() {
    this.items = this.mediaGallery.files.map(item => {
      return {type: 'thumbnail', data: item};
    });
  }

}
