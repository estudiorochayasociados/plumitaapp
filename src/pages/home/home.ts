import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { ProductosPage } from "../productos/productos";
import { ServicesProvider } from "../../providers/services/services";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  error: string;
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public services: ServicesProvider,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get("user").then(val => {
      if (val == true) {
        this.move_page(ProductosPage);
      }
    });
  }

  iniciar_sesion() {
    this.services
      .get(
        "http://192.168.0.212/plumita/api/index.php?op=usuarios&accion=validar&email=" +
          this.email +
          "&password=" +
          this.password +
          ""
      )
      .subscribe(data => {
        if (data.status == true) {
          this.storage.set("user", data.status);
          this.move_page(ProductosPage);
        } else {
          this.show_alert(
            "Ups!",
            "Este usuario no existe, si necesitas registrarte hacer click debajo del boton en la sección de registro de usuario."
          );
        }
      });
  }

  show_alert(title, subtitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ["OK"]
    });
    alert.present();
  }

  move_page(page) {
    this.navCtrl.push(page);
  }
}
