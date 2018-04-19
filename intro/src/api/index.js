import ajax from './ajax'


// [1、获取E宠主页广告列表](##获取E宠主页广告列表)<br/>
export const reqAdvert = () => ajax('/api/index')
// [2、获取E宠分类列表](#获取E宠分类列表)<br/>
export const reqListTab = () => ajax('/api/classify')
// [3、获取E宠品牌列表](#获取E宠品牌列表)<br/>
export const reqListBrand = () => ajax('/api/brand')
// [4、获取轮播图广告和每日疯抢](#获取轮播图广告和每日疯抢)<br/>
export const reqImgDay = () => ajax('/api/carousel')
// [5、获取一次性验证码](#4获取一次性验证码)<br/>
export const reqDispos = () => ajax('/api/captcha')
// [6、用户名密码登陆](#4用户名密码登陆)<br/>
export const reqLogin = ({name,pwd}) => ajax('/api/login_pwd',{name,pwd},'POST')
// [7、发送短信验证码](#5发送短信验证码)<br/>
export const reqMessage = (phone) => ajax('/api/sendcode',{phone})
// [8、手机号验证码登陆](#6手机号验证码登陆)<br/>
export const reqPhoneN = ({phone,code}) => ajax('/api/login_sms',{phone,code},'POST')
// [9、根据会话获取用户信息](#7根据会话获取用户信息)<br/>
export const reqUserMsg = () => ajax('/api/userinfo')
