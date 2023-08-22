import type { Meta, StoryObj } from '@storybook/angular';
import { QuoteComponent } from './quote.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<QuoteComponent> = {
  component: QuoteComponent,
  title: 'QuoteComponent',
};
export default meta;
type Story = StoryObj<QuoteComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/quote works!/gi)).toBeTruthy();
  },
};
