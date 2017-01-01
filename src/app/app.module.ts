import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IosKeyboardComponent} from '../components/ios-keyboard/ios-keyboard';
import {IosKeyboardKeyComponent} from '../components/ios-keyboard-key/ios-keyboard-key';

@NgModule({
  declarations: [
    MyApp,
    IosKeyboardKeyComponent,
    IosKeyboardComponent,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IosKeyboardKeyComponent,
    IosKeyboardComponent,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
