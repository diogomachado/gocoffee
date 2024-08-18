import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({
    required: true,
  })
  imageUrl: string | undefined;
  @Input({
    required: true,
  })
  title: string | undefined;
  @Input() description: string | undefined;

  @Output() onClick = new EventEmitter<boolean>();

  handleClick() {
    this.onClick.emit(true);
  }
}
