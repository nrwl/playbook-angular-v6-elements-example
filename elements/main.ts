import { registerAsCustomElements } from '@angular/elements';
import { ProductInfoCardComponent } from '../src/app/product-info-card.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ElementsModule } from './elements.module';

registerAsCustomElements(
  [ProductInfoCardComponent],
  () => platformBrowserDynamic().bootstrapModule(ElementsModule)
).catch(e => {
  console.log(e);
});
