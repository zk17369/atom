import _Icon from './src/icon.vue';
console.log("🚀 ~ file: index.ts ~ line 2 ~ _Icon", _Icon)
import { withInstall } from '@atom/utils/with-install';

const Icon = withInstall(_Icon);
export default Icon;

export * from './src/icon';

declare module 'vue' {
  export interface GlobalComponents {
    AtIcon: typeof Icon;
  }
}
