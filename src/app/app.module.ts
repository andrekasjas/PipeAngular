import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';
import { VideoPipe } from './pipes/video.pipe';
import { PassPipe } from './pipes/pass.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    VideoPipe,
    PassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'es'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
