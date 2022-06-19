import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';

import { RouterModule } from '@angular/router';
import { FormacaoComponent } from './formacao/formacao.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    FormacaoComponent,
    PortfolioComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'sobre', component: SobreComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
