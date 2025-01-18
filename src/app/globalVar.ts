export type TempStorage = {
  mbti: string;
  phone: string;
  preferences: "low" | "medium" | "high"; //投资风险偏好;
  address: string; // ,
  personality: "gentle" | "rough";
};

// eslint-disable-next-line prefer-const
export let tempStorage: TempStorage = {
  mbti: "",
  phone: "",
  preferences: "low", //投资风险偏好;
  address: "",
  personality: "gentle",
};

export const setStorage = (newValue: TempStorage) => {
  tempStorage = newValue;
};

export const getStorage = () => tempStorage;
