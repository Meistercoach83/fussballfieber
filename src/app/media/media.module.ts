import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mediaRoutes } from './media.routing';
import { MediaIndexComponent } from './media-index/media-index.component';
import { MediaBerichteComponent } from './media-berichte/media-berichte.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { MediaListComponent } from './media-list/media-list.component';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { MediaItemComponent } from './media-list/media-item/media-item.component';

@NgModule({
  declarations: [
    MediaIndexComponent,
    MediaBerichteComponent,
    MediaListComponent,
    MediaItemComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    RouterModule.forChild(mediaRoutes)
  ]
})
export class MediaModule { }
