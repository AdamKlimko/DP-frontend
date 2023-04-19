import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Customers',
    icon: 'person-outline',
    link: '/pages/customers',
    home: true,
  },
  {
    title: 'Customer Orders',
    icon: 'shopping-cart-outline',
    link: '/pages/customer-orders',
    home: true,
  },
  {
    title: 'Products',
    icon: 'cube-outline',
    link: '/pages/products',
    home: true,
  },
  //  TBD
  // {
  //   title: 'Product Reservations',
  //   icon: 'cube-outline',
  //   link: '/pages/product-reservations',
  //   home: true,
  // },
];
