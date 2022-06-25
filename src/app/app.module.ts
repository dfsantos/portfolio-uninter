import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';

import { RouterModule } from '@angular/router';
import { FormacaoComponent } from './formacao/formacao.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatoComponent } from './contato/contato.component';
import { CapaComponent } from './capa/capa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    FormacaoComponent,
    PortfolioComponent,
    ContatoComponent,
    CapaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      /* Controla as rotas que devem ser utilizadas para exibir os conteúdos */
      { path: 'capa', component: CapaComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'formacao', component: FormacaoComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contato', component: ContatoComponent },
      { /* Essa é a rota padrão quando nenuma página é selecionada */
        path: '',
        redirectTo: '/capa',
        pathMatch: 'full'
      },
      { /* Essa rota força que a capa seja exibida quando alguma URL inválida é digitada */
        path: '**',
        redirectTo: '/capa',
      },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
