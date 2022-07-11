/* eslint-disable @next/next/no-img-element */

import React from 'react';

import { Str } from '../../functions';
import { Button, ButtonColor, ButtonProps } from '../molecules/button';

import noImage from '../../../public/no-image.png';
import styles from '../../../styles/organisms/product-card.module.scss';

export interface ProductCardProps {
  name: string,
  description: string | null,
  price: string,
  unit: string,
  image: string,
  source: string,
  loading?: 'eager' | 'lazy'
}

export function ProductCard ( product: ProductCardProps ) {
  const props: ButtonProps = {
    color: ButtonColor.Primary,
    onClick: () => console.info( 'Add to card' ),
    text: 'Agregar al Carrito'
  };

  const onErrorImage = ( evt: React.SyntheticEvent<HTMLImageElement, Event> ) => {
    evt.currentTarget.style.background = 'none';
    evt.currentTarget.src = noImage as unknown as string;
  };

  return (
    <article className={`${ styles[ 'scr-product-card' ] }`} role={'listitem'}>
      <a className={`${ styles[ 'scr-product-card__figure' ] }`} href={product.source} target={'_blank'} rel={'noopener noreferrer'} >
        <img
          className={`${ styles[ 'scr-product-card__img' ] }`}
          src={product.image}
          alt={product.name}
          loading={product.loading ?? 'eager'}
          onError={onErrorImage}
        />
      </a>
      <section className={`${ styles[ 'scr-product-card__body' ] }`}>
        <header className={`${ styles[ 'scr-product-card__header' ] }`}>
          <p className={`${ styles[ 'scr-product-card__name' ] }`}>{product.name}</p>
          <p className={`${ styles[ 'scr-product-card__description' ] }`}>{Str.truncate( product.description ?? '', 41 )}</p>
        </header>
        <div>
          <span className={`${ styles[ 'scr-product-card__price' ] }`}>{product.price}</span>
          <span className={`${ styles[ 'scr-product-card__unit' ] }`}>{product.unit}</span>
        </div>
        <footer className={`${ styles[ 'scr-product-card__footer' ] }`}>
          <Button {...props}/>
        </footer>
      </section>
    </article>
  );
}
