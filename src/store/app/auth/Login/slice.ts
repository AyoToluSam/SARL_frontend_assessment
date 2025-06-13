import authApi from "@/store/api/authApi";
import { setEncryptedData } from "@/utils/encrypt";

const loginSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const {
            data: { data },
          } = await queryFulfilled;

          localStorage.setItem("token", data.token);

          setEncryptedData("lgn_dta", data.user_data);
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = loginSlice;

export default loginSlice;
