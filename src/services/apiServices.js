import axios from "axios";

import { config } from "../config/config";

const packageJson = require("../../package.json");

export const invokeApi = async (url, params, cookies) => {
  try {
    let headers = {
      "Content-Type": "application/json",

      appversion: packageJson.version,

      platform: "web",
    };

    if (
      cookies &&
      cookies[config.cookieName] &&
      cookies[config.cookieName].token &&
      cookies[config.cookieName].loginUserId
    ) {
      headers.Authorization = "Bearer " + cookies[config.cookieName].token;

      headers.loginUserId = cookies[config.cookieName].loginUserId;
    }

    if (
      cookies &&
      cookies[config.sessionCookie] &&
      cookies[config.sessionCookie].sessionId
    ) {
      headers.sessionId = cookies[config.sessionCookie].sessionId;
    }

    return await axios.post(url, params, { headers: headers });
  } catch ({ response }) {
    return response;
  }
};

export const invokeFormDataApi = async (url, formData, cookies) => {
  try {
    let headers = {
      "Content-Type": "multipart/form-data",
      appversion: packageJson.version,
      platform: "web",
    };
    if (
      cookies &&
      cookies[config.cookieName] &&
      cookies[config.cookieName].token &&
      cookies[config.cookieName].loginUserId
    ) {
      headers.Authorization = "Bearer " + cookies[config.cookieName].token;
      headers.loginUserId = cookies[config.cookieName].loginUserId;
    }
    if (
      cookies &&
      cookies[config.sessionCookie] &&
      cookies[config.sessionCookie].sessionId
    ) {
      headers.sessionId = cookies[config.sessionCookie].sessionId;
    }
    return await axios.post(url, formData, { headers: headers });
  } catch ({ response }) {
    return response;
  }
};

export const apiList = {
  //User
  userLogin: "/user/login",
  userAdd: "/user/addUser",
  getUsers: "/user/getUsers",
  getUser: "/user/getUser",
  updateUser: "/user/updateUser",
  updateUserRoles: "/user/updateUserRoles",
  deleteUser: "/user/deleteUser",

  //Sign-Up
  signup: "/user/signup",

  // traffic tracking
  addWebTraffic: "/web/addWebTraffic",

  //change password api
  changePassword: "/user/changePassword",

  //sendbulkemail
  sendBulkEmail: "/sendBulkEmail",

  //Area api
  getcountrypincodemapping: "/university/getCountryPincodeMapping",

  //Product
  addProduct: "/product/addProduct",
  getAllProducts: "/product/getAllProducts",
  getProduct: "/product/getProduct",
  updateProduct: "/product/updateProduct",
  deleteProduct: "/product/deleteProduct",
  updateProductGallery: "/product/updateProductGallery",

  //getProductByOgUrl
  getProductByOgUrl: "/product/getProductByOgUrl",

  //Category Type
  addCategory: "/product/addCategory",
  getAllCategory: "/product/getAllCategory",
  getCategory: "/product/getCategory",
  updateCategory: "/product/updateCategory",
  deleteCategory: "/product/deleteCategory",

  //Subcategory
  addSubCategory: "/product/addSubCategory",
  getAllSubCategory: "/product/getAllSubCategory",
  getSubCategory: "/product/getSubCategory",
  updateSubCategory: "/product/updateSubCategory",
  deleteSubCategory: "/product/deleteSubCategory",

  //Order Product
  getAllProductOrder: "/product/getAllProductOrder",
  getAllOrderTrack: "/product/getAllOrderTrack",

  //Payment Order
  generateOrder: "/product/generateOrder",
  addProductOrder: "/product/addProductOrder",

  //User Address
  addAddress: "/user/addAddress",
  getAddress: "/user/getAddress",
  getAllAddress: "/user/getAllAddress",
  updateAddress: "/user/updateAddress",
  deleteAddress: "/user/deleteAddress",

  //Lead Types
  getLeadTypes: "/university/getLeadTypes",

  //Lead
  getLeadFiles: "/leadFile/getLeadFiles",
  addLeadFile: "/leadFile/addLeadFile",
  getLeadAnalytics: "/university/getLeadAnalytics",
  getLeadHistory: "/leads/getThirdPartyLeads",
  getLead: "/university/getLead",
  addLead: "/university/addLead",
  updateLeadStatus: "/university/updateLeadStatus",
  getLeads: "/university/getLeads",
};
