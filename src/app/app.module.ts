import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { SomeUniversalService, SOME_WINDOW } from './tool.service';

function loadWindow(argoUniversal: SomeUniversalService) {
  return argoUniversal.nativeWindow;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgtUniversalModule,
  ],
  providers: [
    SomeUniversalService,
    {
      provide: SOME_WINDOW,
      useFactory: loadWindow,
      deps: [SomeUniversalService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
