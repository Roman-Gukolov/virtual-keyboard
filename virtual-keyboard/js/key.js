/* eslint-disable import/extensions */
import create from './create.js';

export default class Key {
  constructor({ small, shift, code }) {
    this.code = code;
    this.small = small;
    this.shift = shift;

    this.letter = create('div', 'letter', small);
    this.div = create('div', 'key', this.letter, null, ['code', this.code]);
  }
}
