import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

//pages
import { HomePage } from '../pages/home/home';
import { ProductosPage } from '../pages/productos/productos';
import { MiCuentaPage } from '../pages/mi-cuenta/mi-cuenta';

///providers
import { ServicesProvider } from '../providers/services/services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MiCuentaPage,
    ProductosPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MiCuentaPage,
    ProductosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider
  ]
})
export class AppModule {}
