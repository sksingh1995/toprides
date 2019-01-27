import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class MetaService {
  constructor(private meta: Meta) {}

  add(tags: { name: string; content: string }) {
    Object.keys(tags).forEach(tag => {
      console.log(tag);
    });
  }
}
