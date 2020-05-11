import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class SomeUniversalService {
  private _window: Window;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadWindow();
  }

  get nativeWindow(): any {
    return this._window;
  }

  private loadWindow(): void {
    if (isPlatformServer(this.platformId)) {
      this._window = this.mockWindow as any;
    } else {
      this._window = window;
    }
  }

  private mockStorages = {
    getItem: (key: string): string => {
      return 'mockGetItem';
    },
    setItem: (key: string, value: string) => {
      'mockSetItem';
    },
    removeItem: (key: string) => {
      'mockDeleteItem';
    },
    clear: () => {
      'mockClearItem';
    },
  };

  private mockDocument = {
    addEventListener: (type: string, listener: any) => '',
    removeEventListener: (type: string, listener: any) => '',
    getElementById: (id: string) => '',
  };

  private mockWindow = {
    navigator: {
      userAgent: 'fakeAgent',
    },
    location: {
      href: 'mockHref',
      search: 'mockSearch',
    },
    localStorage: this.mockStorages,
    sessionStorage: this.mockStorages,
    screen: {
      width: '',
      height: '',
    },
    document: this.mockDocument,
  };
}

export const SOME_WINDOW = new InjectionToken('SOME_WINDOW');
