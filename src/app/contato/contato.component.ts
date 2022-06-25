import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass']
})
export class ContatoComponent {

  /* Propriedade para controlar a exibição da mensagem de confirmação */
  showToast = false;

  /* Prepara componente para vincular aos inputs for formulário */
  contatoForm = this.formBuilder.group({
    nome: '',
    email: '',
    mensagem: '',
  });

  /* Cria uma propriedade para o form builder */
  constructor(
    private formBuilder: FormBuilder
  ) { }

  /* Método que captura o evento de submit do form */
  onSubmit(): void {
    console.log('Form submetido!', this.contatoForm.value);

    /* Exibe mensagem de confirmação */
    this.showToast = true;

    /* Limpa o formulário */
    this.contatoForm.reset();
  }

}
