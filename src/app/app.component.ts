import { Component } from '@angular/core';
import { Geo, AppService } from './app.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'my-geo';
  private geoinfo: Geo;
  private lat: number;
  private lng: number;
  private currentIp: string;

  constructor(private service: AppService) {

  }

  ngOnInit() {
    this.service.getGeo()
      .subscribe((data: Geo) => {
        this.geoinfo = data;
        this.lat = data.lat;
        this.lng = data.lon;
        this.currentIp = data.query;
      });
  }

  onClick() {
    this.service.addGeo(this.geoinfo).subscribe((data) => {
      console.log(data);
    })
  }
}
