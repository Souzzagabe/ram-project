import axios from "axios";

class MainService {
  chargeAmount(page: number, limit: number): Promise<any> {
    return axios.get("https://boasorte.teddybackoffice.com.br/users", {
      params: { page, limit },
    });
  }

  deleteUser(id: number): Promise<any> {
    return axios.delete(`https://boasorte.teddybackoffice.com.br/users/${id}`);
  }
}

export default new MainService();
