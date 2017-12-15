const {interactor, button, textarea} = require('./interactor')
const wrap = require('./wordwrap')

describe('the interactor', () => {
  xit('shows the wrapped text in the text area', () => {
      const aButton = button('button1');
      const aTextArea = textarea('textarea1');
      const anInteractor = interactor(wrap, aButton, aTextArea);

      anInteractor.doWrap('hola', 2);

      const actual = document.findElementById('textarea1')[0].innerHTML
      expect(actual).toBe('ho\nla');
  });

  it('shows the wrapped text in the text area', () => {
      const aButton = button('button1');
      const aTextArea = textarea('textarea1');

      spyOn(aTextArea, 'show');

      const anInteractor = interactor(wrap, aButton, aTextArea);
      anInteractor.doWrap('hola', 2);

      expect(aTextArea.show).toHaveBeenCalledWith('ho\nla')
  });

  it('shows the wrapped text in the text area', () => {
      const aButton = button('button1');
      const aTextArea = textarea('textarea1');
      const wasTextShown = false;
      const shownText = null;

      spyOn(aTextArea, 'show');

      const stubWrap = () => {}; // Stub function

      const anInteractor = interactor(stubWrap, aButton, aTextArea);

      anInteractor.doWrap();

      expect(aTextArea.show).toHaveBeenCalled();
  });
});