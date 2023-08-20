import { IQuote } from '@qt/shared/domain';
import { EntitySchema } from 'typeorm';

export const QuoteEntitySchema = new EntitySchema<IQuote>({
  name: 'quote',
  columns: {
    id: {
      type: 'uuid',
      generated: 'uuid',
      primary: true
    },
    text: {
      type: String,
      nullable: false,
    },

    // TODO add missing properties
  },
});
