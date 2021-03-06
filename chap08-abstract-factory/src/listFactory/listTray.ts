import { Tray } from "../factory/tray";

export class ListTray extends Tray {
  constructor(caption: string) {
    super(caption);
  }

  makeHTML(): string {
    let html = `<li>\n`;
    html = html.concat('', `${this.caption}\n`);
    html = html.concat('', `<ul>\n`);
    this.tray.forEach((e) => html = html.concat('', e.makeHTML()));
    html = html.concat('', `</ul>\n`);
    html = html.concat('', `</li>\n`);
    return html;
  }
}
