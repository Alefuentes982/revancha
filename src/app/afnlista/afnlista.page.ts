import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonContent, MenuController } from "@ionic/angular";

@Component({
  selector: 'app-afnlista',
  templateUrl: './afnlista.page.html',
  styleUrls: ['./afnlista.page.scss'],
})
export class AfnlistaPage implements OnInit {
  @ViewChild('content', { static: false }) content!: IonContent;

  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(500);
    }
  }

  participantes: any[] = [];

  public cantParticipantes: number = 10;
  public paginaActual: number = 1;
  public totalPaginas: number = 0;
  public intercambia: string = '';

  constructor(private http: HttpClient, private menuCtrl: MenuController) { }



  ngOnInit() {
    this.cargarParticipantes();
  }

  public cambiaColor(color: string) {
    if (color === 'verde') {
      this.intercambia = 'green';
    } else if (color === 'rojo') {
      this.intercambia = 'red';
    }
  }

  public cargarParticipantes() {
    /*console.log("aqui estamos1")*/
    this.http.get<any[]>('./../../assets/datos.json').subscribe((data) => {
      this.participantes = data;

      //calculoeltotalde páginas
      this.totalPaginas = Math.ceil(this.participantes.length / this.cantParticipantes);
      console.log("totalde paginas: " + this.totalPaginas);

    }, error => {
      console.error('Error en carga de datosde participantes', error);
    });
  }


  public paginados() {
    const inicio = (this.paginaActual - 1) * this.cantParticipantes;
    const fin = inicio + this.cantParticipantes;
    return this.participantes.slice(inicio, fin);
  }

  anterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  siguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
    }
  }

  cerrarMenu() {
    this.menuCtrl.close();
  }


}

