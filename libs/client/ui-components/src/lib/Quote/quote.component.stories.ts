import type { Meta, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { randUuid, randQuote } from '@ngneat/falso';

import { QuoteComponent } from './quote.component';
import { IQuote } from '@qt/shared/domain';

const meta: Meta<QuoteComponent> = {
  component: QuoteComponent,
  title: 'QuoteComponent',
};
export default meta;
type Story = StoryObj<QuoteComponent>;

/**
 * Falso's `randQuoteItem` function is perfect, but it wasn't as visually
 * pleasing to see filler text while designing. Instead, this uses
 * legitimate English language for the to-do item, and insert a random
 * `completed` value
 */
const randQuoteItem = () => {
  // const { id, text } = randProduct();
  return {
    id: randUuid(),
    text: randQuote()
  };
};

export const Primary: Story = {
  render: (args: QuoteComponent) => ({
    props: args,
  }),
  args: {
    quote: randQuoteItem() as IQuote
  },
  argTypes: {
    triggerDelete: {
      action: 'delete',
    },
    triggerEdit: {
      action: 'edit',
    },
    triggerToggleComplete: {
      action: 'toggleComplete',
    }
  }
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/quote works!/gi)).toBeTruthy();
  },
};
