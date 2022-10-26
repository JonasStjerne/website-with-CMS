import env from "../env";
export default class apiService {
  static async getAllPaintings() {
    const responseJSON = await fetch(env.API_BASE_URL + "paintings?populate=*");
    const response = await responseJSON.json();

    return response;
  }

  static async getAboutContent() {
    const reposneJson = await fetch(env.API_BASE_URL + "about?populate=*");
    const response = await reposneJson.json();

    return response;
  }
}
