import { CurrencyRendererPipe } from './currency-renderer.pipe';

describe('CurrencyRendererPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format USD amounts properly', () => {
    const pipe = new CurrencyRendererPipe();
    expect(pipe.transform(12.558)).toBe('$12.56');
  });

});
