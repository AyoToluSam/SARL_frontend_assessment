import { getEncryptedData } from "@/utils/encrypt";

export const useAuth = () => {
  const token = localStorage.getItem("token");

  const loginData = getEncryptedData("lgn_dta");

  return {
    user: loginData,
    token,
  };
};
