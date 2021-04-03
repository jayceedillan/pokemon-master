import axios from 'axios'
import notification from '@/services/NotificationService';

const apiClient = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

apiClient.interceptors.response.use(
  (response: any) => {

    if (

      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error: any) => {

    switch (error.response.status) {
      case 400:
        notification.show('custom-template', 'Error', error.response.data.error[0].message, '');
        return
      case 401:
        notification.show('custom-template', 'Error', error.response.data.error.message, '');
        return
      case 403:
        // this.$router.push('/')
        return
    }

    return Promise.reject(error.response);

  }
);
export default {
  async getAll(url: string) {
    return apiClient.get(url)
  },

}
