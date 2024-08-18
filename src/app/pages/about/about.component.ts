import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

interface CardInfo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  cards: CardInfo[] = [
    {
      id: 1,
      title: '1. Escolha seu kit',
      description: 'Escolha o kit que melhor se adequa ao seu estilo de vida.',
      imageUrl: 'https://picsum.photos/220/120',
    },
    {
      id: 2,
      title: '2. Pagamento',
      description: 'Pague o valor do seu kit e receba o kit de grão especial.',
      imageUrl: 'https://picsum.photos/220/120',
    },
    {
      id: 3,
      title: '3. Aguarde o recebimento',
      description:
        'O recebimento do seu kit será enviado para o seu email registrado.',
      imageUrl: 'https://picsum.photos/220/120',
    },
  ];
}
