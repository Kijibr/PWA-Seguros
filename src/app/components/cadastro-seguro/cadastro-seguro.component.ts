import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarcaCarro } from 'src/app/models/MarcaCarro';
import { Seguro } from 'src/app/models/Seguro';
import { MarcaCarroService } from 'src/app/services/marca-carro.service';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarro$: Observable<MarcaCarro[]>

  constructor(
    private marcaCarroService: MarcaCarroService,
    private seguroService: SeguroService
  ) { }

  ngOnInit() {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  cadastrar() {
    this.seguro.id = this.seguro.placaCarro;
    this.seguroService.cadastrar(this.seguro)
  }

}
