// getDatoCmsToken.ts
export const getDatoCmsToken = (): string => {
    return import.meta.env.VITE_CMS_TOKEN ?? "";
};  
