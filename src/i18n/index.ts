import I18nLib from 'i18n-js';

import locales from './locales';

I18nLib.translations = locales;
I18nLib.locale = 'en';

export default class I18n {
  // tslint:disable-next-line
  public static t(key: string, options?: object): string {
    return I18nLib.t(key, options);
  }

  public static setLocale(locale: string): void {
    I18nLib.locale = locale;
  }
}
