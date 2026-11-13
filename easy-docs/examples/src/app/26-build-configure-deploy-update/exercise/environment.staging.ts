import {environment as production} from '../environments/environment';

export const environment: typeof production = {
  apiUrl: 'https://staging-api.silkroad-museum.example',
  showDebugPanel: true,
};
