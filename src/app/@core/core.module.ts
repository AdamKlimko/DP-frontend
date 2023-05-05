import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import {of as observableOf} from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  LayoutService,
  SeoService,
} from './utils';
import {config} from '../config';


export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: config.apiUrl,
        login: {
          endpoint: '/auth/login',
          method: 'post',
          redirect: {
            success: '/pages/',
            failure: null,
          },
        },
        logout: {
          endpoint: '/auth/logout',
          method: 'post',
          redirect: {
            success: '/auth/login',
            failure: '/auth/login',
          },
        },
        refreshToken: {
          endpoint: 'refresh-tokens',
          method: 'post',
          redirect: {
            success: null,
            failure: null,
          },
        },
        token: {
          class: NbAuthJWTToken,
          key: 'tokens.access.token',
        },
      }),
    ],
    forms: {
      login: { rememberMe: false },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  LayoutService,
  SeoService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
