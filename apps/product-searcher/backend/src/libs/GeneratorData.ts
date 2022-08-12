// eslint-disable-next-line import/no-extraneous-dependencies
import {
  randImg, randNumber, randProductDescription, randProductName, randUrl
} from '@ngneat/falso';

import { GeneratorData, Options } from './interfaces/index';

export class GeneratorDataFalso implements GeneratorData {
  private readonly UNDEFINED_PROBABILITY = 0.3;

  randProductName ( opts?: Options ) {
    return Math.random() >= this.UNDEFINED_PROBABILITY && opts?.randUndefined === true
      ? undefined
      : randProductName();
  }

  randProductDescription ( opts?: Options ) {
    return Math.random() >= this.UNDEFINED_PROBABILITY && opts?.randUndefined === true
      ? undefined
      : randProductDescription();
  }

  randProductPrice ( opts?: Options ) {
    const price = randNumber( { min: 0, max: 50000 } );
    return Math.random() >= this.UNDEFINED_PROBABILITY && opts?.randUndefined === true
      ? undefined
      : new Intl.NumberFormat( 'es-CL', { style: 'currency', currency: 'CLP' } ).format( price );
  }

  randProductUnit ( opts?: Options ) {
    const quantity = randNumber( { min: 1, max: 3000 } );
    const unit = [
      'kg',
      'g',
      'ml',
      'l',
      'unidad',
      'unidades',
      'u'
    ];
    return Math.random() >= this.UNDEFINED_PROBABILITY && opts?.randUndefined === true
      ? undefined
      : `${ quantity } ${ unit[ randNumber( { min: 0, max: unit.length - 1 } ) ] }`;
  }

  randImg ( opts?: Options ) {
    return Math.random() >= this.UNDEFINED_PROBABILITY && opts?.randUndefined === true
      ? undefined
      : randImg();
  }

  randUrl ( opts?: Options ) {
    return Math.random() >= this.UNDEFINED_PROBABILITY && opts?.randUndefined === true
      ? undefined
      : randUrl();
  }
}
