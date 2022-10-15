import { ComponentCustomProperties } from 'vue';
import { Utils } from '../utils/index';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $utils: Utils; // 这里填类型
  }
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties;
