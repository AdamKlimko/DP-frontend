import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'pie-chart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Customer Relations',
    icon: 'people-outline',
    children: [
      {
        title: 'Customers',
        icon: 'person-outline',
        link: '/pages/customers',
      },
      {
        title: 'Customer Orders',
        icon: 'shopping-bag-outline',
        link: '/pages/customer-orders',
      },
      {
        title: 'Shipments',
        icon: 'car-outline',
        link: '/pages/shipments',
      },
    ],
  },
  {
    title: 'Manufacturing',
    icon: 'settings-outline',
    children: [
      {
        title: 'Production Orders',
        icon: 'settings-2-outline',
        link: '/pages/production-orders',
      },
      {
        title: 'Product Reservations',
        icon: 'cube-outline',
        link: '/pages/product-reservations',
      },
      {
        title: 'Semi-Product Reserv...',
        icon: 'pantone-outline',
        link: '/pages/semi-product-reservations',
      },
    ],
  },
  {
    title: 'Procurement',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'Purchase Orders',
        icon: 'clipboard-outline',
        link: '/pages/purchase-orders',
      },
      {
        title: 'Purchase Requisitions',
        icon: 'pricetags-outline',
        link: '/pages/purchase-requisitions',
      },
    ],
  },
  {
    title: 'Storage',
    icon: 'archive-outline',
    children: [
      {
        title: 'Products',
        icon: 'cube-outline',
        link: '/pages/products',
      },
      {
        title: 'Semi Products',
        icon: 'pantone-outline',
        link: '/pages/semi-products',
      },
    ],
  },
];
