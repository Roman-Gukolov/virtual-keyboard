/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import lang from './lang.js';
import Key from './key.js';
import create from './create.js';
import * as storage from './storage.js';

const form = create('section', '', create('h1', 'title', 'RSS Virtual Keyboard'));

export default class Keyboard {
  constructor(symbolsOrder) {
    this.symbolsOrder = symbolsOrder;
    this.keysPressed = {};
    this.isCaps = false;
  }

  init(langCode) {
    this.keyBase = lang[langCode];
    this.output = create('textarea', 'output', null, form, ['placeholder', 'Напишите что-нибудь'], ['rows', 5], ['cols', 50]);
    this.container = create('div', 'keyboard', null, form, ['language', langCode]);
    document.body.prepend(form);
    return this;
  }

  generateLayout() {
    this.keyButtons = [];
    this.symbolsOrder.forEach((row, i) => {
      const rowElement = create('div', 'row', null, this.container, ['row', i + 1]);
      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => key.code === code);
        if (keyObj) {
          const keyButton = new Key(keyObj);
          this.keyButtons.push(keyButton);
          rowElement.appendChild(keyButton.div);
        }
      });
    });

    create('p', '', 'Клавиатура создана в операционной системе Windows', form);
    create('p', '', 'Для переключения языка комбинация: левыe ctrl + alt', form);

    document.addEventListener('keydown', this.handleEvent);
    document.addEventListener('keyup', this.handleEvent);
    this.container.onmousedown = this.preHandleEvent;
    this.container.onmouseup = this.preHandleEvent;
  }

    preHandleEvent = (e) => {
      e.stopPropagation();
      const keyDiv = e.target.closest('.key');
      if (!keyDiv) {
        return;
      }
      const { dataset: { code } } = keyDiv;
      keyDiv.addEventListener('mouseleave', this.resetButtonState);
      this.handleEvent({ code, type: e.type });
    }

    resetButtonState = ({ target: { dataset: { code } } }) => {
      if (code.match('Shift')) {
        this.shiftKey = false;
        this.toLower();
        this.keysPressed[code].div.classList.remove('active');
      }
      if (code.match(/Control/)) {
        this.ctrlKey = false;
      }
      if (code.match(/Alt/)) {
        this.altKey = false;
      }
      this.resetPressedButtons(code);
      this.output.focus();
    }

    resetPressedButtons = (targetCode) => {
      if (!this.keysPressed[targetCode]) {
        return;
      }
      if (!this.isCaps) {
        this.keysPressed[targetCode].div.classList.remove('active');
      }
      this.keysPressed[targetCode].div.removeEventListener('mouseleave', this.resetButtonState);
      delete this.keysPressed[targetCode];
    }

    handleEvent = (e) => {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      const { code, type } = e;
      const keyObj = this.keyButtons.find((key) => key.code === code);
      if (!keyObj) {
        return;
      }
      this.output.focus();

      if (type.match(/keydown|mousedown/)) {
        if (type.match(/key/)) {
          e.preventDefault();
        }

        if (code.match(/Shift/)) {
          this.shiftKey = true;
          this.toUpper();
        }

        keyObj.div.classList.add('active');

        if (code.match(/Caps/) && !this.isCaps) {
          this.isCaps = true;
          this.toUpper();
        } else if (code.match(/Caps/)) {
          this.isCaps = false;
          keyObj.div.classList.remove('active');
          this.toLower();
        }

        if (code.match(/Control/)) {
          this.ctrlKey = true;
        }
        if (code.match(/Alt/)) {
          this.altKey = true;
        }
        if ((code.match(/Control/) && this.altKey) || (code.match(/Alt/) && this.ctrlKey)) {
          this.changeLang();
        }

        if (!this.isCaps) {
          this.printKey(keyObj, this.shiftKey ? keyObj.shift : keyObj.small);
        } else if (this.isCaps) {
          if (this.shiftKey && keyObj.shift != null && keyObj.small.match(/[a-zа-яё]/)) {
            this.printKey(keyObj, keyObj.small);
          } else if (!this.shiftKey && keyObj.small.match(/[^a-zа-яё]/)) {
            this.printKey(keyObj, keyObj.small);
          } else {
            this.printKey(keyObj, keyObj.shift);
          }
        }
        this.keysPressed[keyObj.code] = keyObj;
      } else if (type.match(/keyup|mouseup/)) {
        if (!code.match(/Caps/)) {
          keyObj.div.classList.remove('active');
        }

        if (code.match(/Control/)) {
          this.ctrlKey = false;
        }
        if (code.match(/Alt/)) {
          this.altKey = false;
        }
        if (code.match(/Shift/)) {
          this.shiftKey = false;
          this.toLower();
        }
      }
    }

    changeLang = () => {
      const langs = Object.keys(lang);
      let langId = langs.indexOf(this.container.dataset.language);
      this.keyBase = langId + 1 < langs.length ? lang[langs[langId += 1]]
        : lang[langs[langId -= langId]];

      this.container.dataset.language = langs[langId];
      storage.set('lang', langs[langId]);

      this.keyButtons.forEach((button) => {
        const keyObj = this.keyBase.find((key) => key.code === button.code);
        if (!keyObj) {
          return;
        }
        button.shift = keyObj.shift;
        button.small = keyObj.small;
        button.letter.innerHTML = keyObj.small;
      });

      if (this.isCaps) {
        this.toUpper();
      }
    }

    toUpper() {
      this.keyButtons.forEach((button) => {
        if (button.shift != null && this.isCaps && button.small.match(/[^a-zA-Zа-яА-ЯёЁ]/) && !this.shiftKey) {
          button.letter.innerHTML = button.small;
        } else if (button.shift != null && this.isCaps && this.shiftKey && button.small.match(/[^a-zA-Zа-яА-ЯёЁ]/)) {
          button.letter.innerHTML = button.shift;
        } else if (button.shift != null && this.isCaps && !this.shiftKey) {
          button.letter.innerHTML = button.shift;
        } else if (button.shift != null && this.isCaps && this.shiftKey) {
          button.letter.innerHTML = button.small;
        } else if (button.shift != null) {
          button.letter.innerHTML = button.shift;
        }
      });
    }

    toLower() {
      this.keyButtons.forEach((button) => {
        if (button.shift != null) {
          if (this.isCaps) {
            if (!this.shiftKey && button.small.match(/[^a-zA-Zа-яА-ЯёЁ]/)) {
              button.letter.innerHTML = button.small;
            } else {
              button.letter.innerHTML = button.shift;
            }
          } else {
            button.letter.innerHTML = button.small;
          }
        }
      });
    }

    printKey(keyObj, symbol) {
      let cursorPos = this.output.selectionStart;
      const left = this.output.value.slice(0, cursorPos);
      const right = this.output.value.slice(cursorPos);

      const keysHandler = {
        Tab: () => {
          this.output.value = `${left}\t${right}`;
          cursorPos += 1;
        },
        ArrowLeft: () => {
          cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
        },
        ArrowRight: () => {
          cursorPos += 1;
        },
        ArrowUp: () => {
          const leftPosition = this.output.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [[1]];
          cursorPos -= leftPosition[0].length;
        },
        ArrowDown: () => {
          const leftPosition = this.output.value.slice(cursorPos).match(/^.*(\n).*$(?!\1)/) || [[1]];
          cursorPos += leftPosition[0].length;
        },
        Enter: () => {
          this.output.value = `${left}\n${right}`;
          cursorPos += 1;
        },
        Delete: () => {
          this.output.value = `${left}${right.slice(1)}`;
        },
        Backspace: () => {
          this.output.value = `${left.slice(0, -1)}${right}`;
          cursorPos -= 1;
        },
        Space: () => {
          this.output.value = `${left} ${right}`;
          cursorPos += 1;
        },
      };
      if (keysHandler[keyObj.code]) {
        keysHandler[keyObj.code]();
      } else if (keyObj.shift != null) {
        cursorPos += 1;
        this.output.value = `${left}${symbol || ''}${right}`;
      }
      this.output.setSelectionRange(cursorPos, cursorPos);
    }
}
