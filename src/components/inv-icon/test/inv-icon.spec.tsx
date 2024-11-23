import { newSpecPage } from '@stencil/core/testing';
import { InvIcon } from '../inv-icon';

describe('inv-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InvIcon],
      html: `<inv-icon></inv-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <inv-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </inv-icon>
    `);
  });
});
