import { PrintBanner } from './print/printBanner'

class Main {
  main(): void {
    const p = new PrintBanner('Hello');
    p.printWeak();
    p.printStrong();
  }
}

const m = new Main();
m.main();
