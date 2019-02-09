import { Injectable, Inject, PLATFORM_ID, APP_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  public isBrowser: Boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  setItem(key: string, val: any) {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(val));
    }
  }

  getItem(key: string) {
    if (this.isBrowser) {
      return JSON.parse(localStorage.getItem(key));
    }

    return null;
  }

  removeItem(key: string) {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  removeAll(key: string) {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
