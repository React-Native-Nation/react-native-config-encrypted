import Config from '../src/index';

describe('Config', () => {
  it('should set the key', () => {
    const key = 'jamesjara';
    Config.config({
      key,
    });
    expect(Config.key).toBe(key);
  });
  it('should encrypt an decrypt same value', () => {
    const value = 'jamesjara';
    const encrypted = Config.encrypt(value);
    expect(encrypted).toBeDefined();
    const decrypted = Config.decrypt(encrypted);
    expect(decrypted).toBe(value); 
  });  
});
