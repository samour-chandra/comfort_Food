import { SET_TIME } from "../config.js";

// Loding nite 5sc er besi time nile error dibe
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(
          `☠️ :Request 🕛 timed out. Please check your internet connection`
        )
      );
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(SET_TIME)]);
    const data = await res.json();
    if (!res.ok)
      throw new Error(
        `⚠️: Something (${data.message}) went wrong while processing your request.`
      );
    return data;
  } catch (err) {
    throw err;
  }
};
