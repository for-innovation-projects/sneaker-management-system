/* 代码为自动生成、请勿手动修改 */

namespace IApi {
  export type File = string;

  export interface BodyUploadFileApiUpload_Post {
    file: File;
  }

  export type Location = (string | number)[];
  export type Message = string;
  export type ErrorType = string;
  export type Detail = ValidationError[];

  export interface HTTPValidationError {
    detail?: Detail;
  }
  export interface ValidationError {
    loc: Location;
    msg: Message;
    type: ErrorType;
  }

  export type ProductName = string;
  export type ProductCode = string;
  /**
   * Product ID
   */
  export type ProductId = number;
  /**
   * Size of the product
   */
  export type Size = string;
  /**
   * Number of the product
   */
  export type Number = number;
  /**
   * Status of the product
   */
  export type Status = number;
  /**
   * Price of the product
   */
  export type Price = string;
  /**
   * 报价描述
   */
  export type Description = string;
  /**
   * 最终单价
   */
  export type FinallyPrice = string;
  /**
   * 实物不符合原因
   */
  export type Reason = string;
  /**
   * 产品信息
   */
  export type ProductInfos = ProductInfoBase[];
  /**
   * 产品链接
   */
  export type ProductUrls = string[];

  export interface ProductCreateReq {
    product_name: ProductName;
    product_code: ProductCode;
    product_infos: ProductInfos;
    product_urls: ProductUrls;
  }
  export interface ProductInfoBase {
    product_id: ProductId;
    size: Size;
    number: Number;
    status: Status;
    price: Price;
    description: Description;
    finally_price: FinallyPrice;
    reason: Reason;
  }

  /**
   * Product ID
   */
  export type ProductId = number;
  /**
   * Size of the product
   */
  export type Size = string;
  /**
   * Number of the product
   */
  export type Number = number;
  /**
   * Status of the product
   */
  export type Status = number;
  /**
   * Price of the product
   */
  export type Price = string;
  /**
   * 报价描述
   */
  export type Description = string;
  /**
   * 最终单价
   */
  export type FinallyPrice = string;
  /**
   * 实物不符合原因
   */
  export type Reason = string;

  export type Code = string;
  export type Name = string;
  export type Phone = string;
  export type IdCode = string;
  export type VerifyCode = string;

  export interface RegistryRequest {
    code: Code;
    name: Name;
    phone: Phone;
    id_code: IdCode;
    verify_code: VerifyCode;
  }

  export type Code = number;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchema {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }

  export type Code = number;
  export type Data = UserLoginResponse | UserLoginResponse[];
  export type AccessToken = string;
  export type TokenType = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaUserLoginResponse {
    code: number;
    data?: UserLoginResponse;
    total?: Total;
    msg?: Msg;
  }
  export interface UserLoginResponse {
    access_token: AccessToken;
    token_type: TokenType;
  }

  export type Code = number;
  export type Data = UserOut | UserOut[];
  export type CreateTime = string;
  export type UpdateTime = string;
  export type Name = string;
  export type Avatar = string;
  export type Sex = number;
  export type Phone = string;
  export type Id = number;
  export type Version = number;
  export type IsDeleted = number;
  export type RoleName = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaUserOut {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  /**
   * 查询数据的数据模型
   */
  export interface UserOut {
    create_time?: CreateTime;
    update_time?: UpdateTime;
    name: Name;
    avatar?: Avatar;
    sex?: Sex;
    phone?: Phone;
    id: Id;
    version: Version;
    is_deleted: IsDeleted;
    role_name?: RoleName;
  }

  export type Code = number;
  export type Data = WeChatLoginResponse | WeChatLoginResponse[];
  export type Openid = string;
  export type SessionKey = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaWeChatLoginResponse {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  export interface WeChatLoginResponse {
    openid: Openid;
    session_key: SessionKey;
  }

  export type Code = number;
  export type Data = WeChatUserInformation | WeChatUserInformation[];
  export type Openid = string;
  export type Name = string;
  export type IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaWeChatUserInformation {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  export interface WeChatUserInformation {
    openid: Openid;
    name: Name;
    id_code: IdCode;
    balance: Balance;
    receive_name: ReceiveName;
    receive_code: ReceiveCode;
  }

  export type Code = number;
  export type Data = SysLogOut[] | SysLogOut[][];
  export type Url = string;
  export type Method = string;
  export type Ip = string;
  export type Params = string;
  export type SpendTime = string;
  export type CreateTime = string;
  export type Id = number;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasSysLogSysLogOut {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  /**
   * 查询数据的数据模型
   */
  export interface SysLogOut {
    url: Url;
    method: Method;
    ip: Ip;
    params?: Params;
    spend_time?: SpendTime;
    create_time?: CreateTime;
    id: Id;
  }

  export type PhoneNumber = string;

  export interface SendCodeRequest {
    phone_number: PhoneNumber;
  }

  export type Url = string;
  export type Method = string;
  export type Ip = string;
  export type Params = string;
  export type SpendTime = string;
  export type CreateTime = string;
  export type Id = number;

  /**
   * 查询数据的数据模型
   */
  export type Username = string;
  export type Password = string;

  /**
   * 登录
   */
  export interface UserLogin {
    username: Username;
    password: Password;
  }

  export type AccessToken = string;
  export type TokenType = string;

  export type CreateTime = string;
  export type UpdateTime = string;
  export type Name = string;
  export type Avatar = string;
  export type Sex = number;
  export type Phone = string;
  export type Id = number;
  export type Version = number;
  export type IsDeleted = number;
  export type RoleName = string;

  /**
   * 查询数据的数据模型
   */
  export type Location = (string | number)[];
  export type Message = string;
  export type ErrorType = string;

  export type PhoneNumber = string;
  export type Code = string;

  export interface VerifyCodeRequest {
    phone_number: PhoneNumber;
    code: Code;
  }

  export type Openid = string;
  export type Name = string;
  export type IdCode = string;

  export interface WeChatAuthReq {
    openid: Openid;
    name: Name;
    id_code: IdCode;
  }

  export type Code = string;
  export type Phone = string;
  export type VerifyCode = string;

  export interface WeChatLoginRequest {
    code: Code;
    phone: Phone;
    verify_code: VerifyCode;
  }

  export type Openid = string;
  export type SessionKey = string;

  export type Openid = string;

  export interface WeChatUserBase {
    openid: Openid;
  }

  export type Openid = string;
  export type Name = string;
  export type IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;

  export type UserLoginForAccessTokenApiWechatuserPcLoginPostBody = UserLogin;
  export type Username = string;
  export type Password = string;

  /**
   * 登录
   */
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponses =
    ResultSchemaUserLoginResponse;
  export type Code = number;
  export type Data = UserLoginResponse | UserLoginResponse[];
  export type AccessToken = string;
  export type TokenType = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserWechatLoginApiWechatuserLoginPostBody = WeChatLoginRequest;
  export type Code = string;
  export type Phone = string;
  export type VerifyCode = string;

  export type UserWechatLoginApiWechatuserLoginPostResponses =
    ResultSchemaWeChatLoginResponse;
  export type Code = number;
  export type Data = WeChatLoginResponse | WeChatLoginResponse[];
  export type Openid = string;
  export type SessionKey = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostBody =
    WeChatAuthReq;
  export type Openid = string;
  export type Name = string;
  export type IdCode = string;

  export type UserWechatAuthenticationApiWechatuserAuthenticationPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserWechatAuthenticationApiWechatuserReceivePostBody =
    WeChatAuthReq;
  export type Openid = string;
  export type Name = string;
  export type IdCode = string;

  export type UserWechatAuthenticationApiWechatuserReceivePostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserWechatAuthenticationApiWechatuserReceivePatchBody =
    WeChatAuthReq;
  export type Openid = string;
  export type Name = string;
  export type IdCode = string;

  export type UserWechatAuthenticationApiWechatuserReceivePatchResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserWechatAuthenticationApiWechatuserInformationGetBody =
    WeChatUserBase;
  export type Openid = string;

  export type UserWechatAuthenticationApiWechatuserInformationGetResponses =
    ResultSchemaWeChatUserInformation;
  export type Code = number;
  export type Data = WeChatUserInformation | WeChatUserInformation[];
  export type Openid = string;
  export type Name = string;
  export type IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostBody =
    SendCodeRequest;
  export type PhoneNumber = string;

  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserVerifyCodeApiWechatuserVerifyCodePostBody = VerifyCodeRequest;
  export type PhoneNumber = string;
  export type Code = string;

  export interface ResponseVerifyCodeApiWechatuserVerifyCodePost {
    [k: string]: unknown;
  }

  export type UserRegistryApiWechatuserRegistryPostBody = RegistryRequest;
  export type Code = string;
  export type Name = string;
  export type Phone = string;
  export type IdCode = string;
  export type VerifyCode = string;

  export interface ResponseRegistryApiWechatuserRegistryPost {
    [k: string]: unknown;
  }

  export type OrderAddProductsApiWechatorderProductsPostBody = ProductCreateReq;
  export type ProductName = string;
  export type ProductCode = string;
  /**
   * Product ID
   */
  export type ProductId = number;
  /**
   * Size of the product
   */
  export type Size = string;
  /**
   * Number of the product
   */
  export type Number = number;
  /**
   * Status of the product
   */
  export type Status = number;
  /**
   * Price of the product
   */
  export type Price = string;
  /**
   * 报价描述
   */
  export type Description = string;
  /**
   * 最终单价
   */
  export type FinallyPrice = string;
  /**
   * 实物不符合原因
   */
  export type Reason = string;
  /**
   * 产品信息
   */
  export type ProductInfos = ProductInfoBase[];
  /**
   * 产品链接
   */
  export type ProductUrls = string[];

  export type OrderAddProductsApiWechatorderProductsPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Page = number;
  export type PageSize = number;

  export interface LogRootApiLogListGetParams {
    page?: Page;
    page_size?: PageSize;
  }

  export type LogRootApiLogListGetResponses =
    ResultSchemaListSchemasSysLogSysLogOut;
  export type Code = number;
  export type Data = SysLogOut[] | SysLogOut[][];
  export type Url = string;
  export type Method = string;
  export type Ip = string;
  export type Params = string;
  export type SpendTime = string;
  export type CreateTime = string;
  export type Id = number;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UploadUploadFileApiUpload_PostResponses = ResultSchemaUserOut;
  export type Code = number;
  export type Data = UserOut | UserOut[];
  export type CreateTime = string;
  export type UpdateTime = string;
  export type Name = string;
  export type Avatar = string;
  export type Sex = number;
  export type Phone = string;
  export type Id = number;
  export type Version = number;
  export type IsDeleted = number;
  export type RoleName = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
}
