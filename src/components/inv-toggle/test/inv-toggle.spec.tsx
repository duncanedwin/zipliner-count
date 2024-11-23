import { newSpecPage } from '@stencil/core/testing';
import { InvToggle } from '../inv-toggle';

describe('inv-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InvToggle],
      html: `<inv-toggle></inv-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <inv-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </inv-toggle>
    `);
  });
});
