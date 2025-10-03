import {baseApi} from "@/app/api/baseApi.ts";
import type {LoginArgs, LoginResponse, MeResponse} from "@/features/auth/api/authApi.types.ts";

export const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getMe: build.query<MeResponse, void>({
            query: () => `auth/me`,
        }),
        login: build.mutation<LoginArgs, LoginResponse>({
            query: payload => ({
                url: 'auth/login',
                method: 'post',
                body: {...payload, accessToken: '3m'}
            }),
        }),
    }),
})

export const { useGetMeQuery } = authApi