export type TErrorCodeKey =
  | "INVALID_EMAIL"
  | "PATH_NOT_FOUND"
  | "INVALID_USERNAME"
  | "USER_NOT_FOUND"
  | "SESSION_STORE_ERROR"
  | "USER_EXIST"
  | "UNIDENTIFIED_ERROR"
  | "INVALID_PASSWORD"
  | "INVALID_NEW_PASSWORD"
  | "INVALID_CONFIRM_PASSWORD"
  | "INVALID_FULLNAME"
  | "INVALID_TOKEN"
  | "INVALID_JWT_PAYLOAD"
  | "TOKEN_NOT_EXPIRED"
  | "SUBJECT_NOT_EXIST"
  | "REFRESH_TOKEN_EXPIRED"
  | "TOKEN_EXPIRED"
  | "INVALID_REFRESH_TOKEN"
  | "IAT_NOT_EXIST"
  | "TOKEN_ID_NOT_EXIST"
  | "TOKEN_TYPE_NOT_EXIST"
  | "USER_ASSIGNED_NOT_FOUND"
  | "UNIT_EXIST"
  | "UNIT_NOT_FOUND"
  | "CODE_PRODUCT_EXIST"
  | "INVALID_PRODUCT_PROVIDER"
  | "INVALID_PRODUCT_NAME"
  | "INVALID_PRODUCT_UNIT"
  | "INVALID_PRODUCT_CODE"
  | "INVALID_SITE_NAME"
  | "INVALID_SITE_ADDRESS"
  | "INVALID_SITE_MANAGER"
  | "INVALID_PROJECT_NAME"
  | "INVALID_PROJECT_START_DATE"
  | "INVALID_PROJECT_PROCESS"
  | "INVALID_PROJECT_DESCRIPTION"
  | "INVALID_PROJECT_FILE_DESCRIPTION"
  | "INVALID_PROJECT_MANAGER"
  | "INVALID_UNIT_NAME"
  | "INVALID_DATE_FORMAT"
  | "INVALID_COMPANY_NAME"
  | "COMPANY_NAME_EXIST"
  | "PRODUCT_REQUISITION_FORM_CODE_EXIST"
  | "COMPANY_NOT_FOUND"
  | "INVALID_QUANTITY_USER_APPROVAL"
  | "PRODUCT_NOT_FOUND"
  | "FORM_NOT_FOUND"
  | "MISSING_USER_APPROVAL"
  | "ROLE_NOT_FOUND"
  | "AUTHORITY_NOT_FOUND"
  | "PERMISSION_NOT_FOUND"
  | "USER_ROLE_EXIST"
  | "PERMISSION_EXIST"
  | "USER_APPROVAL_NOT_FOUND"
  | "INVALID_USER_APPROVAL"
  | "INVALID_FORM_STATUS_TRANSITION"
  | "SITE_NOT_FOUND"
  | "PROJECT_NOT_FOUND"
  | "INVALID_CREATOR"
  | "INVALID_APPROVAL_STATUS"
  | "INVALID_CONTENT_APPROVAL_LOG"
  | "INVALID_FORM_CODE"
  | "INVALID_TYPE_PRODUCT_REQUISITION_FORM"
  | "INVALID_COMPANY_SLUG"
  | "INVALID_SITE_SLUG"
  | "INVALID_PROJECT_SLUG"
  | "INVALID_REQUEST_PRODUCT_ARRAY"
  | "INVALID_APPROVAL_USER_ARRAY"
  | "INVALID_FORM_SLUG"
  | "INVALID_APPROVAL_USER_SLUG"
  | "INVALID_PRODUCT_SLUG"
  | "INVALID_ASSIGNED_USER_APPROVAL"
  | "INVALID_REQUEST_PRODUCT_QUANTITY"
  | "INVALID_ROLE_APPROVAL"
  | "INVALID_COMPANY_DIRECTOR"
  | "COMPANY_DIRECTOR_NOT_FOUND"
  | "INVALID_REQUEST_PRODUCT_SLUG"
  | "REQUEST_PRODUCT_NOT_FOUND"
  | "CAN_NOT_EDIT_FORM"
  | "REQUEST_PRODUCT_EXIST"
  | "INVALID_REASON_RESUBMIT_FORM"
  | "INVALID_QUANTITY_PRODUCT"
  | "CREATOR_FORM_NOT_FORM"
  | "INVALID_USER_SLUG"
  | "INVALID_DEPARTMENT_SLUG"
  | "DEPARTMENT_NOT_FOUND"
  | "INVALID_FORM_TYPE"
  | "INVALID_DEADLINE_DATE_APPROVAL_FORM"
  | "INVALID_DESCRIPTION_DEPARTMENT"
  | "INVALID_ROLE_PREFIX"
  | "INVALID_UNIT_SLUG"
  | "INVALID_WAREHOUSE_SLUG"
  | "INVALID_QUANTITY_PRODUCT_WAREHOUSE"
  | "WAREHOUSE_NOT_FOUND"
  | "MISSING_QUANTITY_PRODUCT_WAREHOUSE_ADD_NEW"
  | "ERROR_WHEN_UPDATE_PRODUCT_QUANTITY"
  | "INVALID_TEMPORARY_REQUEST_PRODUCT_NAME"
  | "INVALID_QUANTITY_TEMPORARY_REQUEST_PRODUCT"
  | "INVALID_TEMPORARY_REQUEST_PRODUCT_PROVIDER"
  | "INVALID_TEMPORARY_REQUEST_PRODUCT_DESCRIPTION"
  | "INVALID_PRODUCT_DESCRIPTION"
  | "FILE_NOT_FOUND"
  | "INVALID_NAME_NORMALIZE_DEPARTMENT"
  | "INVALID_WAREHOUSE_NAME"
  | "INVALID_WAREHOUSE_ADDRESS"
  | "INVALID_NAME_DISPLAY"
  | "DUPLICATE_ENTRY"
  | "INVALID_NAME_NORMALIZE"
  | "INVALID_FORM_DESCRIPTION"
  | "SAVE_FILE_FAIL"
  | "ERROR_GET_FILE_FROM_REQUEST"
  | "ASSIGNED_USER_APPROVAL_THIS_LEVEL_FOR_SITE_IS_EXISTED"
  | "INVALID_RESOURCE_NAME"
  | "RESOURCE_NOT_FOUND"
  | "RESOURCE_EXIST"
  | "INVALID_PURCHASE_PRODUCT_QUANTITY"
  | "INVALID_PURCHASE_PRODUCT_ARRAY"
  | "INVALID_STATUS_FORM"
  | "PRODUCT_PURCHASE_FORM_CODE_EXISTED"
  | "FOLDER_NOT_FOUND"
  | "PASSWORD_NOT_MATCH"
  | "CONFIRM_PASSWORD_NOT_MATCH"
  | "EXP_NOT_EXIST";

export type TErrorCodeValue = {
  code: number;
  message: string;
  httpStatusCode: number;
};

export type TErrorCode = Record<TErrorCodeKey, TErrorCodeValue>;
