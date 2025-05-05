// getDatoCmsToken.ts
export const getDatoCmsToken = (): string => {
    console.log("cms token", import.meta.env.VITE_CMS_TOKEN);
    return import.meta.env.VITE_CMS_TOKEN ?? "";
};  
