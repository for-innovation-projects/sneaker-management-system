/* 代码为自动生成、请勿手动修改 */

namespace IApi {
  export type Name = string;
  export type Phone = string;
  export type Detail = string;

  export interface AddressBase {
    name: Name;
    phone: Phone;
    detail: Detail;
  }

  export type Name = string;
  export type Phone = string;
  export type Detail = string;
  export type Id = number;
  export type UpdateTime = string;

  export interface AddressOut {
    name: Name;
    phone: Phone;
    detail: Detail;
    id: Id;
    update_time: UpdateTime;
  }

  export type Name = string;
  export type Phone = string;
  export type Detail = string;
  export type Id = string;

  export interface AddressUpdate {
    name: Name;
    phone: Phone;
    detail: Detail;
    id: Id;
  }

  export type Id = number;
  export type Location = string;
  export type Url = string;
  export type Path = string;

  export interface BannerBase {
    id: Id;
    location: Location;
    url: Url;
    path: Path;
  }

  export type File = string;

  export interface BodyUploadFileApiWechatbannerPcUploadPost {
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
  export type Data = unknown[];
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
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  export interface UserLoginResponse {
    access_token: AccessToken;
    token_type: TokenType;
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
  export type Phone = string;
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
    receive_name?: ReceiveName;
    receive_code?: ReceiveCode;
    phone: Phone;
  }

  export type Code = number;
  export type Data = AddressOut[] | AddressOut[][];
  export type Name = string;
  export type Phone = string;
  export type Detail = string;
  export type Id = number;
  export type UpdateTime = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasAddressAddressOut {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  export type Code = number;
  export type Data = BannerBase[] | BannerBase[][];
  export type Id = number;
  export type Location = string;
  export type Url = string;
  export type Path = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasBannerBannerBase {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  export type Code = number;
  export type Data = WeChatUserInformationOut[] | WeChatUserInformationOut[][];
  export type Openid = string;
  export type Name = string;
  export type IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;
  export type Phone = string;
  export type Id = number;
  export type CreateTime = string;
  export type IsDeleted = number;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasUserWeChatUserInformationOut {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  export interface WeChatUserInformationOut {
    openid: Openid;
    name: Name;
    id_code: IdCode;
    balance: Balance;
    receive_name?: ReceiveName;
    receive_code?: ReceiveCode;
    phone: Phone;
    id: Id;
    create_time: CreateTime;
    is_deleted: IsDeleted;
  }

  export type Code = number;
  export type Data = WithdrawalOut[] | WithdrawalOut[][];
  export type Openid = string;
  export type WithdrawalMoney = string;
  export type Id = number;
  export type UserId = number;
  export type CreateTime = string;
  export type IdCode = string;
  export type ReceiveCode = string;
  export type Status = number;
  export type Name = string;
  export type Reason = string;
  export type Phone = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasWithdrawalWithdrawalOut {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }
  export interface WithdrawalOut {
    openid: Openid;
    withdrawal_money?: WithdrawalMoney;
    id: Id;
    user_id: UserId;
    create_time: CreateTime;
    id_code: IdCode;
    receive_code?: ReceiveCode;
    status: Status;
    name?: Name;
    reason?: Reason;
    phone?: Phone;
  }

  export type PhoneNumber = string;

  export interface SendCodeRequest {
    phone_number: PhoneNumber;
  }

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
  export type Name = string;
  export type IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;
  export type Phone = string;

  export type Openid = string;
  export type Name = string;
  export type IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;
  export type Phone = string;
  export type Id = number;
  export type CreateTime = string;
  export type IsDeleted = number;

  export type Openid = string;
  export type WithdrawalMoney = string;

  export interface WithdrawalCreate {
    openid: Openid;
    withdrawal_money?: WithdrawalMoney;
  }

  export type Openid = string;
  export type WithdrawalMoney = string;
  export type Id = number;
  export type UserId = number;
  export type CreateTime = string;
  export type IdCode = string;
  export type ReceiveCode = string;
  export type Status = number;
  export type Name = string;
  export type Reason = string;
  export type Phone = string;

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
  export type Name = string;
  export type Phone = string;
  export type IdCode = string;
  export type IsDeleted = number;
  export type Page = number;
  export type PageSize = number;

  export interface UserGetUsersApiWechatuserPcWechatGetParams {
    name?: Name;
    phone?: Phone;
    id_code?: IdCode;
    is_deleted?: IsDeleted;
    page?: Page;
    page_size?: PageSize;
  }

  export type UserGetUsersApiWechatuserPcWechatGetResponses =
    ResultSchemaListSchemasUserWeChatUserInformationOut;
  export type Code = number;
  export type Data = WeChatUserInformationOut[] | WeChatUserInformationOut[][];
  export type Openid = string;
  export type Name = string;
  export type IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;
  export type Phone = string;
  export type Id = number;
  export type CreateTime = string;
  export type IsDeleted = number;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Id = number;

  export interface UserUnbanWechatUserApiWechatuserPcWechatPostParams {
    id?: Id;
  }

  export type UserUnbanWechatUserApiWechatuserPcWechatPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Id = number;

  export interface UserBanWechatUserApiWechatuserPcWechatDeleteParams {
    id?: Id;
  }

  export type UserBanWechatUserApiWechatuserPcWechatDeleteResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Id = number;
  export type Balance = string;

  export interface UserModifyBalanceApiWechatuserPcWechatPatchParams {
    id?: Id;
    balance?: Balance;
  }

  export type UserModifyBalanceApiWechatuserPcWechatPatchResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
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
  export type Openid = string;

  export interface UserWechatAuthenticationApiWechatuserInformationGetParams {
    openid?: Openid;
  }

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
  export type Phone = string;
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
  export type BannerUploadFileApiWechatbannerPcUploadPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type BannerGetBannersApiWechatbannerPc_GetResponses =
    ResultSchemaListSchemasBannerBannerBase;
  export type Code = number;
  export type Data = BannerBase[] | BannerBase[][];
  export type Id = number;
  export type Location = string;
  export type Url = string;
  export type Path = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type FileId = number;

  export interface BannerDeleteFileApiWechatbannerPc_DeleteParams {
    file_id?: FileId;
  }

  export type BannerDeleteFileApiWechatbannerPc_DeleteResponses = ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type BannerGetBannersApiWechatbanner_GetResponses =
    ResultSchemaListSchemasBannerBannerBase;
  export type Code = number;
  export type Data = BannerBase[] | BannerBase[][];
  export type Id = number;
  export type Location = string;
  export type Url = string;
  export type Path = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type AddressCreateAddressApiWechataddressPcAddressPostBody =
    AddressBase;
  export type Name = string;
  export type Phone = string;
  export type Detail = string;

  export type AddressCreateAddressApiWechataddressPcAddressPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Id = number;

  export interface AddressDeleteAddressApiWechataddressPcAddressDeleteParams {
    id?: Id;
  }

  export type AddressDeleteAddressApiWechataddressPcAddressDeleteResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type AddressUpdateAddressApiWechataddressPcAddressPatchBody =
    AddressUpdate;
  export type Name = string;
  export type Phone = string;
  export type Detail = string;
  export type Id = string;

  export type AddressUpdateAddressApiWechataddressPcAddressPatchResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Name = string;
  export type Phone = string;
  export type Address = string;
  export type Page = number;
  export type PageSize = number;

  export interface AddressGetAddressesApiWechataddressPcAddressesGetParams {
    name?: Name;
    phone?: Phone;
    address?: Address;
    page?: Page;
    page_size?: PageSize;
  }

  export type AddressGetAddressesApiWechataddressPcAddressesGetResponses =
    ResultSchemaListSchemasAddressAddressOut;
  export type Code = number;
  export type Data = AddressOut[] | AddressOut[][];
  export type Name = string;
  export type Phone = string;
  export type Detail = string;
  export type Id = number;
  export type UpdateTime = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Openid = string;
  export type Page = number;
  export type PageSize = number;

  export interface WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParams {
    openid?: Openid;
    page?: Page;
    page_size?: PageSize;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponses =
    ResultSchemaListSchemasWithdrawalWithdrawalOut;
  export type Code = number;
  export type Data = WithdrawalOut[] | WithdrawalOut[][];
  export type Openid = string;
  export type WithdrawalMoney = string;
  export type Id = number;
  export type UserId = number;
  export type CreateTime = string;
  export type IdCode = string;
  export type ReceiveCode = string;
  export type Status = number;
  export type Name = string;
  export type Reason = string;
  export type Phone = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBody =
    WithdrawalCreate;
  export type Openid = string;
  export type WithdrawalMoney = string;

  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Name = string;
  export type Phone = string;
  export type IdCode = string;
  export type ReceiveCode = string;
  export type Status = number;
  export type Page = number;
  export type PageSize = number;

  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParams {
    name?: Name;
    phone?: Phone;
    id_code?: IdCode;
    receive_code?: ReceiveCode;
    status?: Status;
    page?: Page;
    page_size?: PageSize;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponses =
    ResultSchemaListSchemasWithdrawalWithdrawalOut;
  export type Code = number;
  export type Data = WithdrawalOut[] | WithdrawalOut[][];
  export type Openid = string;
  export type WithdrawalMoney = string;
  export type Id = number;
  export type UserId = number;
  export type CreateTime = string;
  export type IdCode = string;
  export type ReceiveCode = string;
  export type Status = number;
  export type Name = string;
  export type Reason = string;
  export type Phone = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Id = number;

  export interface WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchParams {
    id?: Id;
  }

  export type WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type UserId = number;
  export type Page = number;
  export type PageSize = number;

  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParams {
    user_id?: UserId;
    page?: Page;
    page_size?: PageSize;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponses =
    ResultSchemaListSchemasWithdrawalWithdrawalOut;
  export type Code = number;
  export type Data = WithdrawalOut[] | WithdrawalOut[][];
  export type Openid = string;
  export type WithdrawalMoney = string;
  export type Id = number;
  export type UserId = number;
  export type CreateTime = string;
  export type IdCode = string;
  export type ReceiveCode = string;
  export type Status = number;
  export type Name = string;
  export type Reason = string;
  export type Phone = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
}
