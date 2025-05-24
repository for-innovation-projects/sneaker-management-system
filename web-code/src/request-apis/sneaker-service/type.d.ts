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

  export type File = string;

  export interface BodyUploadFileApiWechatorderUploadPost {
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

  export type Openid = string;
  export type ProductIds = number[];

  export interface OrderCreate {
    openid: Openid;
    product_ids: ProductIds;
  }

  export type Id = number;
  export type UserId = number;
  export type Status = number;
  export type DeliverySite = string;
  export type TrackingCode = string;
  export type AddressId = number;
  export type FinallyCost = number;
  export type CreateTime = string;
  export type UpdateTime = string;
  export type Id1 = number;
  export type UserId1 = number;
  export type ProductName = string;
  export type ProductCode = string;
  export type Description = string;
  export type CreateTime1 = string;
  export type UpdateTime1 = string;
  export type Id2 = number;
  export type Size = string;
  export type Number = number;
  export type Status1 = number;
  export type Price = number;
  export type Description1 = string;
  export type FinallyPrice = number;
  export type Reason = string;
  export type ProductInfos = ProductInfoResponse[];
  export type Url = string;
  export type ProductUrls = ProductUrlResponse[];
  export type Status2 = number;
  export type Products = ProductResponse[];
  export type DeliveryName = string;
  export type DeliveryPhone = string;
  export type ReturnAddress = string;
  export type Name = string;
  export type Phone = string;

  export interface OrderDetailResponse {
    id: Id;
    user_id: UserId;
    status: Status;
    delivery_site?: DeliverySite;
    tracking_code?: TrackingCode;
    address_id?: AddressId;
    finally_cost?: FinallyCost;
    create_time: CreateTime;
    update_time?: UpdateTime;
    products: Products;
    delivery_name?: DeliveryName;
    delivery_phone?: DeliveryPhone;
    return_address?: ReturnAddress;
    name?: Name;
    phone?: Phone;
  }
  export interface ProductResponse {
    id: Id1;
    user_id: UserId1;
    product_name: ProductName;
    product_code: ProductCode;
    description?: Description;
    create_time: CreateTime1;
    update_time?: UpdateTime1;
    product_infos?: ProductInfos;
    product_urls?: ProductUrls;
    status: Status2;
  }
  export interface ProductInfoResponse {
    id: Id2;
    size: Size;
    number: Number;
    status: Status1;
    price: Price;
    description?: Description1;
    finally_price: FinallyPrice;
    reason?: Reason;
  }
  export interface ProductUrlResponse {
    url: Url;
  }

  export type FinallyCost = number;
  export type Status = number;
  export type AddressId = number;

  export interface OrderUpdate {
    finally_cost?: FinallyCost;
    status: Status;
    address_id?: AddressId;
  }

  export type UserId = number;
  /**
   * openid
   */
  export type Openid = string;
  /**
   * 产品名称
   */
  export type ProductName = string;
  /**
   * 货号
   */
  export type ProductCode = string;
  /**
   * 瑕疵描述
   */
  export type Description = string;
  /**
   * 产品尺寸
   */
  export type Size = string;
  /**
   * 产品数量
   */
  export type Number = number;
  /**
   * 产品信息列表
   */
  export type ProductInfos = ProductInfoCreate[];
  /**
   * 产品图片链接
   */
  export type Url = string;
  /**
   * 图片路径
   */
  export type Path = string;
  /**
   * 产品链接列表
   */
  export type ProductUrls = ProductUrlCreate[];

  export interface ProductCreate {
    user_id?: UserId;
    openid: Openid;
    product_name: ProductName;
    product_code: ProductCode;
    description?: Description;
    product_infos: ProductInfos;
    product_urls?: ProductUrls;
  }
  export interface ProductInfoCreate {
    size: Size;
    number: Number;
  }
  export interface ProductUrlCreate {
    url: Url;
    path: Path;
  }

  /**
   * 产品尺寸
   */
  export type Size = string;
  /**
   * 产品数量
   */
  export type Number = number;

  export type Id = number;
  export type Size = string;
  export type Number = number;
  export type Status = number;
  export type Price = number;
  export type Description = string;
  export type FinallyPrice = number;
  export type Reason = string;

  export type Size = string;
  export type Number = number;
  export type Status = number;
  export type Price = number;
  export type Description = string;
  export type FinallyPrice = number;
  export type Reason = string;

  export interface ProductInfoUpdate {
    size?: Size;
    number?: Number;
    status?: Status;
    price?: Price;
    description?: Description;
    finally_price?: FinallyPrice;
    reason?: Reason;
  }

  export type Id = number;
  export type UserId = number;
  export type ProductName = string;
  export type ProductCode = string;
  export type Description = string;
  export type CreateTime = string;
  export type UpdateTime = string;
  export type Id1 = number;
  export type Size = string;
  export type Number = number;
  export type Status = number;
  export type Price = number;
  export type Description1 = string;
  export type FinallyPrice = number;
  export type Reason = string;
  export type ProductInfos = ProductInfoResponse[];
  export type Url = string;
  export type ProductUrls = ProductUrlResponse[];
  export type Status1 = number;

  /**
   * 产品图片链接
   */
  export type Url = string;
  /**
   * 图片路径
   */
  export type Path = string;

  export type Url = string;

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
  }

  export type Code = number;
  export type Data = WeChatUserInformationOut | WeChatUserInformationOut[];
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
  export type AdminImage = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaWeChatUserInformationOut {
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
    admin_image?: AdminImage;
  }

  export type Code = number;
  export type Data = boolean | boolean[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaBool {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }

  export type Code = number;
  export type Data = unknown[] | unknown[][];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListT {
    code: Code;
    data?: Data;
    total?: Total;
    msg?: Msg;
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
  export type Data = OrderDetailResponse[] | OrderDetailResponse[][];
  export type Id = number;
  export type UserId = number;
  export type Status = number;
  export type DeliverySite = string;
  export type TrackingCode = string;
  export type AddressId = number;
  export type FinallyCost = number;
  export type CreateTime = string;
  export type UpdateTime = string;
  export type Id1 = number;
  export type UserId1 = number;
  export type ProductName = string;
  export type ProductCode = string;
  export type Description = string;
  export type CreateTime1 = string;
  export type UpdateTime1 = string;
  export type Id2 = number;
  export type Size = string;
  export type Number = number;
  export type Status1 = number;
  export type Price = number;
  export type Description1 = string;
  export type FinallyPrice = number;
  export type Reason = string;
  export type ProductInfos = ProductInfoResponse[];
  export type Url = string;
  export type ProductUrls = ProductUrlResponse[];
  export type Status2 = number;
  export type Products = ProductResponse[];
  export type DeliveryName = string;
  export type DeliveryPhone = string;
  export type ReturnAddress = string;
  export type Name = string;
  export type Phone = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasOrderOrderDetailResponse {
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
  export type AdminImage = string;
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

  export type ProductId = number;
  export type ProductInfoId = number;
  export type OrderId = number;
  export type ReturnDeliverySite = string;
  export type ReturnTrackingCode = string;

  export interface ReturnGoodsAdd {
    product_id: ProductId;
    product_info_id: ProductInfoId;
    order_id: OrderId;
    return_delivery_site: ReturnDeliverySite;
    return_tracking_code: ReturnTrackingCode;
  }

  export type PhoneNumber = string;

  export interface SendCodeRequest {
    phone_number: PhoneNumber;
  }

  export type ProductId = number;
  export type ProductInfoIds = number[];
  export type UnProductInfoIds = number[];

  export interface UpdateProductList {
    product_id: ProductId;
    product_info_ids: ProductInfoIds;
    un_product_info_ids: UnProductInfoIds;
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
  export type AdminImage = string;

  export type Openid = string;
  export type OrderId = number;
  export type ProductId = number;
  export type ProductInfoIds = number[];
  export type UnProductInfoIds = number[];
  export type UpdateProduct = UpdateProductList[];
  export type DeliverySite = string;
  export type TrackingCode = string;
  export type DeliveryName = string;
  export type DeliveryPhone = string;
  export type ReturnAddress = string;

  export interface WechatUserDeliveryReq {
    openid: Openid;
    order_id: OrderId;
    update_product: UpdateProduct;
    delivery_site: DeliverySite;
    tracking_code: TrackingCode;
    delivery_name: DeliveryName;
    delivery_phone: DeliveryPhone;
    return_address: ReturnAddress;
  }
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
  export type AdminImage = string;
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

  export interface UserWechatAuthenticationApiWechatuserStatusGetParams {
    openid?: Openid;
  }

  export type UserWechatAuthenticationApiWechatuserStatusGetResponses =
    ResultSchemaBool;
  export type Code = number;
  export type Data = boolean | boolean[];
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
    ResultSchemaWeChatUserInformationOut;
  export type Code = number;
  export type Data = WeChatUserInformationOut | WeChatUserInformationOut[];
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
  export type AdminImage = string;
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

  export type OrderUploadFileApiWechatorderUploadPostResponses = ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Openid = string;
  export type OrderId = string | number;
  export type Page = number;
  export type PageSize = number;

  export interface OrderGetProductsApiWechatorderProductsGetParams {
    openid?: Openid;
    order_id?: OrderId;
    page?: Page;
    page_size?: PageSize;
  }

  export type OrderGetProductsApiWechatorderProductsGetResponses = ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderAddProductsApiWechatorderProductsPostBody = ProductCreate;
  export type UserId = number;
  /**
   * openid
   */
  export type Openid = string;
  /**
   * 产品名称
   */
  export type ProductName = string;
  /**
   * 货号
   */
  export type ProductCode = string;
  /**
   * 瑕疵描述
   */
  export type Description = string;
  /**
   * 产品尺寸
   */
  export type Size = string;
  /**
   * 产品数量
   */
  export type Number = number;
  /**
   * 产品信息列表
   */
  export type ProductInfos = ProductInfoCreate[];
  /**
   * 产品图片链接
   */
  export type Url = string;
  /**
   * 图片路径
   */
  export type Path = string;
  /**
   * 产品链接列表
   */
  export type ProductUrls = ProductUrlCreate[];

  export type OrderAddProductsApiWechatorderProductsPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type ProductId = number;

  export interface OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteParams {
    product_id?: ProductId;
  }

  export type OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Openid = string;
  export type Status = number;
  export type Page = number;
  export type PageSize = number;

  export interface OrderGetOrdersWxApiWechatorderOrdersGetParams {
    openid?: Openid;
    status?: Status;
    page?: Page;
    page_size?: PageSize;
  }

  export type OrderGetOrdersWxApiWechatorderOrdersGetResponses =
    ResultSchemaListT;
  export type Code = number;
  export type Data = unknown[] | unknown[][];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderAddOrdersApiWechatorderOrdersPostBody = OrderCreate;
  export type Openid = string;
  export type ProductIds = number[];

  export type OrderAddOrdersApiWechatorderOrdersPostResponses = ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBody =
    WechatUserDeliveryReq;
  export type Openid = string;
  export type OrderId = number;
  export type ProductId = number;
  export type ProductInfoIds = number[];
  export type UnProductInfoIds = number[];
  export type UpdateProduct = UpdateProductList[];
  export type DeliverySite = string;
  export type TrackingCode = string;
  export type DeliveryName = string;
  export type DeliveryPhone = string;
  export type ReturnAddress = string;

  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type Openid = string;
  export type OrderId = number;

  export interface OrderReturnOrdersApiWechatorderOrdersReturnGetParams {
    openid?: Openid;
    order_id?: OrderId;
  }

  export type OrderReturnOrdersApiWechatorderOrdersReturnGetResponses =
    ResultSchemaListT;
  export type Code = number;
  export type Data = unknown[] | unknown[][];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderId = number;
  export type Name = string;
  export type Phone = string;
  export type Status = number;
  export type Page = number;
  export type PageSize = number;

  export interface OrderGetOrdersPcApiWechatorderPcOrdersGetParams {
    order_id?: OrderId;
    name?: Name;
    phone?: Phone;
    status?: Status;
    page?: Page;
    page_size?: PageSize;
  }

  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponses =
    ResultSchemaListSchemasOrderOrderDetailResponse;
  export type Code = number;
  export type Data = OrderDetailResponse[] | OrderDetailResponse[][];
  export type Id = number;
  export type UserId = number;
  export type Status = number;
  export type DeliverySite = string;
  export type TrackingCode = string;
  export type AddressId = number;
  export type FinallyCost = number;
  export type CreateTime = string;
  export type UpdateTime = string;
  export type Id1 = number;
  export type UserId1 = number;
  export type ProductName = string;
  export type ProductCode = string;
  export type Description = string;
  export type CreateTime1 = string;
  export type UpdateTime1 = string;
  export type Id2 = number;
  export type Size = string;
  export type Number = number;
  export type Status1 = number;
  export type Price = number;
  export type Description1 = string;
  export type FinallyPrice = number;
  export type Reason = string;
  export type ProductInfos = ProductInfoResponse[];
  export type Url = string;
  export type ProductUrls = ProductUrlResponse[];
  export type Status2 = number;
  export type Products = ProductResponse[];
  export type DeliveryName = string;
  export type DeliveryPhone = string;
  export type ReturnAddress = string;
  export type Name = string;
  export type Phone = string;
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderId = number;

  export interface OrderUpdateOrdersPcApiWechatorderPcOrdersPatchParams {
    order_id?: OrderId;
  }

  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBody = OrderUpdate;
  export type FinallyCost = number;
  export type Status = number;
  export type AddressId = number;

  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderId = number;
  export type Status = number;

  export interface OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchParams {
    order_id?: OrderId;
    status?: Status;
  }

  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostBody =
    ReturnGoodsAdd;
  export type ProductId = number;
  export type ProductInfoId = number;
  export type OrderId = number;
  export type ReturnDeliverySite = string;
  export type ReturnTrackingCode = string;

  export type OrderAddReturnGoodsApiWechatorderPcReturnPostResponses =
    ResultSchema;
  export type Code = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export type OrderId = number;
  export type ProductId = number;
  export type ProductInfoId = number;

  export interface OrderUpdateProductsPcApiWechatorderPcProductsPatchParams {
    order_id?: OrderId;
    product_id?: ProductId;
    product_info_id?: ProductInfoId;
  }

  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBody =
    ProductInfoUpdate;
  export type Size = string;
  export type Number = number;
  export type Status = number;
  export type Price = number;
  export type Description = string;
  export type FinallyPrice = number;
  export type Reason = string;

  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchResponses =
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
