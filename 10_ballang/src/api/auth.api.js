class AuthAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  // signUp: 회원가입을 수행합니다
  async signUp(data) {
    const path = "/auth/sign-up";

    const response = await this.#axios.post(path, data);
    const result = response.data.result;

    return result;
  }

  // logIn: 로그인을 수행합니다.
  async logIn() {
    const path = "/auth/log-in";
    const data = { email: "blabla@blabla.com", password: "somePassword" };

    const response = await this.#axios.post(path, data);
    const result = response.data.result;

    return result;
  }

  // logOut: 로그아웃을 수행합니다.
  async logOut() {
    const path = "/auth/log-out";

    const response = await this.#axios.delete(path);
    const result = response.data.result;

    return result;
  }

  // refreshToken: accessToken을 리프레시합니다.
  async refreshToken() {
    const path = "/auth/refresh-token";

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }
}

export default AuthAPI;
