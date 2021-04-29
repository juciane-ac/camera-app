import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tirar-foto',
  templateUrl: './tirar-foto.page.html',
  styleUrls: ['./tirar-foto.page.scss'],
})
export class TirarFotoPage implements OnInit {

  constructor(private camera: Camera) { }

  photo: string = '';

  ngOnInit() {
  }

  takePicture() {
    this.photo = '';

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base64Image;
    }, (err) => {
     });
  }
  

}
