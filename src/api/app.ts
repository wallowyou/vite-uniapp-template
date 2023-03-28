import request from "@/utils/http";
// 测试获取验证码
export const getRandomImage = (key:string) => {
  return request.get(`/api/randomImage/${key}`);
}