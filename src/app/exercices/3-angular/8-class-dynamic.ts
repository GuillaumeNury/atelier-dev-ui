import { NgClass } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-with-host-binding',
  template: ` <p>WithHostBinding</p> `,
})
export class WithHostBindingComponent {
  @HostBinding('class') class = 'my-class';

  @HostBinding('class.other-class')
  otherClass = true;
}

@Component({
  selector: 'app-with-host',
  template: ` <p>WithHost</p> `,
  host: {
    class: 'my-class',
    '[class.other-class]': 'otherClass',
  },
})
export class WithHostComponent {
  otherClass = true;
}

@Component({
  selector: 'app-conditional-class',
  imports: [NgClass],
  template: `
    <p [class.u-textBold]="isBold">WithConditionalClass</p>
    <p [ngClass]="isBold ? 'u-textBold' : ''">WithConditionalClass</p>
    <p [ngClass]="{ 'u-textBold': isBold }">WithConditionalClass</p>

    <p [style.--some-var]="12"></p>
    <p [style.color]="'red'"></p>
  `,
})
export class WithNgClassComponent {
  isBold = true;
}
