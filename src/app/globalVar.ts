export type TUser = {
  mbti: string;
  pet: string; // 精神动物
  phone: string; // +区号手机号;
  preferences: "low" | "medium" | "high"; //投资风险偏好;
  address: string; // solana地址,
  monitors: string[]; // 我要监控的solana地址
  personality: "gentle" | "rough"; // gentle:温柔 rough:毒舌;
};

// eslint-disable-next-line prefer-const
export let tempUserStorage: TUser = {
  mbti: "",
  phone: "",
  preferences: "low", //投资风险偏好;
  address: "",
  personality: "gentle",
  pet: "",
  monitors: [],
};

export const setStorage = (newValue: TUser) => {
  tempUserStorage = newValue;
};

export const getStorage = () => tempUserStorage;
