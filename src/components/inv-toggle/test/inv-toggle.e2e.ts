import { newE2EPage } from '@stencil/core/testing';

describe('inv-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<inv-toggle></inv-toggle>');

    const element = await page.find('inv-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
