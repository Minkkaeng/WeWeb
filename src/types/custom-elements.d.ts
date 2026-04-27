import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'fw-hero': any;
      'fw-product-card': any;
      'fw-button': any;
      'fw-banner': any;
      'fw-cart-sidebar': any;
      'fw-features': any;
      'fw-footer': any;
      'fw-scroll-progress': any;
    }
  }
}

declare module '@packages/ui' {
  const content: any;
  export default content;
}

declare module '@packages/utils' {
  export const clsx: (...args: any[]) => string;
  export const twMerge: (...args: any[]) => string;
  export const formatDate: (date: any) => string;
}
