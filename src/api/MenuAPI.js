// 8. API 서비스 (src/api/menuApi.js)
// 실제 API 호출 대신 목업 데이터 사용
import { menuItemsData } from '../data/menuData';

export const fetchMenuItems = () => {
  return new Promise((resolve) => {
    // API 호출을 시뮬레이션하기 위한 setTimeout
    setTimeout(() => {
      resolve(menuItemsData);
    }, 500);
  });
};
