export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";
export const INCREMENT = "INCREMENT";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action) {
  // OK 이제 작업을 하자!
  // 작업의 종류에 따라서 다른 작업을 해야 해!
  switch (action.type) {
    case LOG_IN:
      // 뚝딱뚝딱
      return { ...prevState, isLoggedIn: true };
    case LOG_OUT:
      // 뚝딱뚝딱
      // 작업이 다 반영된 상태를 리턴해 주면 됨
      return { ...prevState, isLoggedIn: false };
    default:
      return prevState;
  }
}

export default authReducer;
