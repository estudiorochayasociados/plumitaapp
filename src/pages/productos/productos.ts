import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";
import { ServicesProvider } from "../../providers/services/services";
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage( {
  name: 'productos'
})
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public services: ServicesProvider,
    private storage: Storage,
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');  
  }

}
