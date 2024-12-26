// src/apis/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 요청 인터셉터: Access Token 추가
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터: 토큰 갱신
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          // Refresh Token으로 새 Access Token 요청
          const response = await axios.post('https://sp-globalnomad-api.vercel.app/auth/tokens', { refreshToken });

          const newAccessToken = response.data.accessToken;
          localStorage.setItem('accessToken', newAccessToken);

          // 갱신된 Access Token으로 원래 요청 재시도
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        } catch (refreshError) {
          console.error('토큰 갱신 실패:', refreshError);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          throw refreshError;
        }
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
