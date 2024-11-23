import { newE2EPage } from '@stencil/core/testing';

describe('inv-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<inv-icon></inv-icon>');

    const element = await page.find('inv-icon');
    expect(element).toHaveClass('hydrated');
  });
});
