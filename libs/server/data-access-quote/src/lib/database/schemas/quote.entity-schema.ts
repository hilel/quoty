import { IQuote } from '@qt/shared/domain';
import { EntitySchema } from 'typeorm';

export const QuoteEntitySchema = new EntitySchema<IQuote>({
  name: 'quote',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: true,
    },
    text: {
      type: String,
      nullable: false,
    },

    // TODO add missing properties
  },
});
