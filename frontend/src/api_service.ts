import env from "../env";
export class paintingService {
  API_TOKEN = env.API_TOKEN;
  BASE_URL = env.API_BASE_URL;

  async getAllPaintings() {
    const responseJSON = await fetch(this.BASE_URL + "paintings");
    const response = await responseJSON.json();

    return response;
  }
}
