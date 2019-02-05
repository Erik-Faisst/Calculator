import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'alert',
  templateUrl: 'alert.html',
  styleUrls: ['./alert.css'],
})
export class Alert {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Ungültig',
      message: 'Ihre eingabe war Ungültig.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
