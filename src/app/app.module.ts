import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';

import { RouterModule } from '@angular/router';
import { FormacaoComponent } from './formacao/formacao.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatoComponent } from './contato/contato.component';
import { CapaComponent } from './capa/capa.component';

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
    RouterModule.forRoot([
      { path: 'capa', component: CapaComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'formacao', component: FormacaoComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contato', component: ContatoComponent },
      {
        path: '',
        redirectTo: '/capa',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
