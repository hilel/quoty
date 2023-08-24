import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle as faCircleOutline, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';

import { IQuote } from '@qt/shared/domain';

@Component({
  selector: 'qt-quote',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent {
  @Input() quote: IQuote | undefined;
  @Output() toggleComplete = new EventEmitter<IQuote>();
  @Output() editQuote = new EventEmitter<IQuote>();
  @Output() deleteQuote = new EventEmitter<IQuote>();

  faCheck = faCheck;
  faCircleOutline = faCircleOutline;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

    /**
   * Simply emit the opposite of the current completed value
   */
    triggerToggleComplete() {
      this.toggleComplete.emit(this.quote);
    }
  
    /**
     * Emit the current quote data so that a service or parent component
     * knows what to work with.
     */
    triggerEdit() {
      this.editQuote.emit(this.quote);
    }
  
    /**
     * Emit the current quote data, although only the ID will most likely
     * be needed for deletion.
     */
    triggerDelete() {
      this.deleteQuote.emit(this.quote);
    }
}
