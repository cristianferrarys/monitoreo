import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  charters :any[] = [];
  charterSeleccionado :any ={};
  lat: number = 51.678418;
  lng: number = 7.809007;
  siguiendo: boolean = false;

  title = 'Cristian ';
  constructor(private afDB: AngularFireDatabase) {
    afDB.list('/usuarios').subscribe ((charters)=>{
      this.charters = charters;
      if(this.siguiendo){
        for(let charter of charters){
          if(charter.$key == this.charterSeleccionado.$key){
            this.lat = charter.lat;
            this.lng = charter.lng;
          }
        }

      }
    });
  
    console.log(this.charters);
  }


  charter_seleccionado(charter:any){
    this.lat = charter.lat;
    this.lng = charter.lng;
    this.siguiendo = true;
    this.charterSeleccionado = charter;
    
  }
  dejar_seguir(){
    this.siguiendo = false;
    this.charterSeleccionado = {};
  }

}

