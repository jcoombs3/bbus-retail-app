import { Item } from '@backbase/foundation-ang/web-sdk';
import * as modelMock from '../../../../dist/apps/retail-app/page-model-mock.json';

export const pageModel: Item = {
  name: 'bb-retail-app-ang-_-6b67a46a27a6',
  properties: {
    'render.requires': 'render-bb-ssr',
    src: '/api/portal/static/items/bb-retail-app-ang/index.hbs',
    'render.strategy': 'render-bb-widget-3',
    label: 'Retail App Container',
    title: 'Retail App Container',
    thumbnailUrl: '/api/portal/static/items/bb-retail-app-ang/icon.png',
    area: '0',
    order: 0,
  },
  children: modelMock.children[0].children,
};
