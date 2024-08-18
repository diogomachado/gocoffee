import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cost = 19.99;
  email = '';

  handleOnClick(event: boolean) {
    console.log('Clicked on card', event);
  }

  handleChangeEmail(event: any) {
    console.log('Email changed', event);
  }

  openDialog() {
    window.alert('Seu e-mail é o ' + this.email);
  }
}
