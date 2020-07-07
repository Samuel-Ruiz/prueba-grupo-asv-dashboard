import { StatusToStatusMessagePipe } from './status-to-status-message.pipe';

describe('StatusToStatusMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new StatusToStatusMessagePipe();
    expect(pipe).toBeTruthy();
  });
});
