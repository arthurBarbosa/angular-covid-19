import { Pais } from './models/pais.model';
import { Mundo } from './models/mundo.model';
import { Component, OnInit } from '@angular/core';
import { CovidapiService } from './services/covidapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mundo: Mundo;
  pais: Pais;

  constructor(private apiService: CovidapiService){

  }
  
  async ngOnInit() {
    this.mundo = await this.apiService.getInfoMundo();
    this.pais = await this.apiService.getInfoPais();
  }
}
