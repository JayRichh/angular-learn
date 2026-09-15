import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  // signal = writable reactive value. Read with count(), write with set/update.
  readonly count = signal(0);
  readonly step = signal(1);

  // TODO(human): derive `doubled` and `parity` from count using computed().
  // computed() is lazy + memoized: only recalculates when a signal it read changes.
  // parity should be 'even' | 'odd'.

  constructor() {
    // effect() runs whenever any signal read inside it changes. Use for side effects, never for state.
    effect(() => console.log('count is now', this.count()));
  }

  increment() {
    this.count.update(c => c + this.step());
  }

  reset() {
    this.count.set(0);
  }
}
