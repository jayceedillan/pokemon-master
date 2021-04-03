import apiService from '@/services/ApiService';
export default {


    async getImageUrl(url: string): Promise<string> {

        const imageUrl = await apiService.getAll(url);
        debugger
        return imageUrl.data.sprites.back_default;

    },
}