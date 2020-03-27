import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type Categories = {
   __typename?: 'Categories';
  categories: Array<Maybe<Category>>;
  total?: Maybe<Scalars['Int']>;
};

export type Category = {
   __typename?: 'Category';
  _id: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  parent?: Maybe<Category>;
  sortOrder?: Maybe<Scalars['Int']>;
  typeCategory?: Maybe<TypeCategory>;
  translateCategory?: Maybe<Array<Maybe<TranslateCategory>>>;
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
};

export enum CountryCode {
  Us = 'US',
  Vn = 'VN'
}

export type CreateCategoryInput = {
  parentId?: Maybe<Scalars['ID']>;
  sortOrder?: Maybe<Scalars['Int']>;
  typeCategory?: Maybe<TypeCategory>;
};

export type CreateDocumentInput = {
  partnerName: Scalars['String'];
  partnerCode: Scalars['String'];
  projectCode: Scalars['String'];
  projectName: Scalars['String'];
  projectCategory?: Maybe<Scalars['String']>;
  investDecideDepartment: Scalars['String'];
  investor: Scalars['String'];
  investorRepresent: Scalars['String'];
  documentType: Array<DocumentType>;
  partnerId?: Maybe<Scalars['ID']>;
  cmsUserId: Scalars['ID'];
  reviewerId: Scalars['ID'];
};

export type CreatePartnerInput = {
  name: Scalars['String'];
  partnerCode: Scalars['String'];
  projectName: Scalars['String'];
  projectCode: Scalars['String'];
  chairmanName: Scalars['String'];
  ceoName: Scalars['String'];
  departmentName: Scalars['String'];
  accountantName: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  fax: Scalars['String'];
  email: Scalars['String'];
  admin: PartnerAdminInput;
};

export type CreateUserInput = {
  fullName: Scalars['String'];
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  address: Scalars['String'];
  group: UserGroup;
  userType?: Maybe<UserType>;
  identityNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  relationshipStatus?: Maybe<RelationshipStatus>;
  level?: Maybe<Level>;
};


export type Document = {
   __typename?: 'Document';
  _id?: Maybe<Scalars['ID']>;
  partnerName: Scalars['String'];
  partnerCode: Scalars['String'];
  projectName: Scalars['String'];
  projectCode: Scalars['String'];
  projectCategory?: Maybe<Scalars['String']>;
  investDecideDepartment: Scalars['String'];
  investor: Scalars['String'];
  investorRepresent: Scalars['String'];
  documentType: Array<DocumentType>;
  partnerId?: Maybe<Scalars['ID']>;
  cmsUserId: Scalars['ID'];
  reviewerId: Scalars['ID'];
  reviewer?: Maybe<User>;
  partner?: Maybe<Partner>;
  cmsUser?: Maybe<User>;
  status: Status;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
  treeNode?: Maybe<Array<Maybe<Node>>>;
};

export type Documents = {
   __typename?: 'Documents';
  documents: Array<Maybe<Document>>;
  total?: Maybe<Scalars['Int']>;
};

export enum DocumentType {
  Document = 'Document',
  Circular = 'Circular',
  Decision = 'Decision',
  LawPrinciple = 'LawPrinciple'
}

export enum ErrorCodes {
  InvalidPassword = 'INVALID_PASSWORD',
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  UserNotFound = 'USER_NOT_FOUND',
  RefreshTokenInvalid = 'REFRESH_TOKEN_INVALID',
  PhoneNumberAlreadyExists = 'PHONE_NUMBER_ALREADY_EXISTS',
  PersistedQueryNotSupported = 'PERSISTED_QUERY_NOT_SUPPORTED',
  BadUserInput = 'BAD_USER_INPUT',
  PersistedQueryNotFound = 'PERSISTED_QUERY_NOT_FOUND',
  Forbidden = 'FORBIDDEN',
  UserHasBeenBlocked = 'USER_HAS_BEEN_BLOCKED',
  Unauthenticated = 'UNAUTHENTICATED',
  GraphqlValidationFailed = 'GRAPHQL_VALIDATION_FAILED',
  GraphqlParseFailed = 'GRAPHQL_PARSE_FAILED',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  RecordNotFound = 'RECORD_NOT_FOUND',
  DocumentNotFound = 'DOCUMENT_NOT_FOUND',
  UsernameAlreadyExists = 'USERNAME_ALREADY_EXISTS',
  EmailAlreadyExists = 'Email_ALREADY_EXISTS',
  PatternError = 'PATTERN_ERROR'
}

export type FilesPosition = {
   __typename?: 'FilesPosition';
  filesPositionMediaId?: Maybe<Scalars['ID']>;
  filesPositionMedia?: Maybe<Media>;
  filesNote?: Maybe<Scalars['String']>;
};

export type FilesPositionInput = {
  filesPositionMediaId?: Maybe<Scalars['ID']>;
  filesNote?: Maybe<Scalars['String']>;
};

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER'
}

export type Jwt = {
   __typename?: 'JWT';
  idToken: Scalars['String'];
  refreshToken: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  idTokenPayload: JwtidTokenPayload;
  tokenType: Scalars['String'];
};

export type JwtidTokenPayload = {
   __typename?: 'JWTIDTokenPayload';
  uid: Scalars['String'];
  user: User;
};

export enum Level {
  Bachelor = 'BACHELOR',
  College = 'COLLEGE',
  Middle = 'MIDDLE',
  Highschool = 'HIGHSCHOOL'
}

export type LoginInput = {
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
};

export type Media = {
   __typename?: 'Media';
  _id: Scalars['ID'];
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  s3KeyFile: Scalars['String'];
  uri: Scalars['String'];
  uploadedBy: Scalars['ID'];
  type: MediaType;
  uploader?: Maybe<User>;
  duration?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  totalComments: Scalars['Int'];
  dimensions?: Maybe<PhotoDimensions>;
  uploadedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export enum MediaType {
  Photo = 'PHOTO',
  Pdf = 'PDF'
}

export type Mutation = {
   __typename?: 'Mutation';
  dummy?: Maybe<Scalars['Boolean']>;
  login: Jwt;
  refreshToken: Jwt;
  logout: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  updateUserInfo: User;
  createCMSUser: User;
  removeCMSUser: Scalars['Boolean'];
  uploadPhoto: Media;
  createPartner: Partner;
  updatePartner: Partner;
  deletePartner: Scalars['Boolean'];
  addPartnerAdmin: Scalars['Boolean'];
  createDocument: Document;
  updateDocument: Document;
  updateTreeNode?: Maybe<Document>;
  updateNote?: Maybe<Document>;
  deleteDocument: Scalars['Boolean'];
  createCategory: Category;
  updateCategory: Category;
  deteleCategory: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationLogoutArgs = {
  refreshToken: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUpdateUserInfoArgs = {
  userId: Scalars['ID'];
  data: UpdateUserInfo;
};


export type MutationCreateCmsUserArgs = {
  data?: Maybe<CreateUserInput>;
};


export type MutationRemoveCmsUserArgs = {
  userId: Scalars['ID'];
};


export type MutationUploadPhotoArgs = {
  file: Scalars['Upload'];
  dimensions: PhotoDimensionsInput;
};


export type MutationCreatePartnerArgs = {
  data: CreatePartnerInput;
};


export type MutationUpdatePartnerArgs = {
  data: UpdatePartnerInput;
};


export type MutationDeletePartnerArgs = {
  _id?: Maybe<Scalars['ID']>;
};


export type MutationAddPartnerAdminArgs = {
  data?: Maybe<PartnerAdminInput>;
};


export type MutationCreateDocumentArgs = {
  data: CreateDocumentInput;
};


export type MutationUpdateDocumentArgs = {
  data: UpdateDocumentInput;
};


export type MutationUpdateTreeNodeArgs = {
  documentId: Scalars['ID'];
  data: UpdateTreeNodeInput;
};


export type MutationUpdateNoteArgs = {
  documentId: Scalars['ID'];
  node: NodeInput;
};


export type MutationDeleteDocumentArgs = {
  _id: Scalars['ID'];
};


export type MutationCreateCategoryArgs = {
  data?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['ID'];
  data: CreateCategoryInput;
};


export type MutationDeteleCategoryArgs = {
  userId: Scalars['ID'];
};

export type Node = {
   __typename?: 'Node';
  key?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  agencyIssued?: Maybe<Scalars['String']>;
  issuedDate?: Maybe<Scalars['DateTime']>;
  documentName: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  nodeMediaId?: Maybe<Scalars['ID']>;
  filesPosition?: Maybe<Array<Maybe<FilesPosition>>>;
  nodeMedia?: Maybe<Media>;
};

export type NodeInput = {
  key?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  agencyIssued?: Maybe<Scalars['String']>;
  issuedDate?: Maybe<Scalars['DateTime']>;
  documentName: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  nodeMediaId?: Maybe<Scalars['ID']>;
  filesPosition?: Maybe<Array<Maybe<FilesPositionInput>>>;
};

export type Partner = {
   __typename?: 'Partner';
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  partnerCode: Scalars['String'];
  projectName: Scalars['String'];
  projectCode: Scalars['String'];
  chairmanName: Scalars['String'];
  ceoName: Scalars['String'];
  departmentName: Scalars['String'];
  accountantName: Scalars['String'];
  address: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  userIds: Array<Scalars['ID']>;
  adminUserIds: Array<Scalars['ID']>;
  staffUserIds: Array<Scalars['ID']>;
  users: Array<User>;
  admins: Array<User>;
  staffs: Array<User>;
  createdBy: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PartnerAdminInput = {
  adminName: Scalars['String'];
  adminPhoneNumber: Scalars['String'];
  adminPassword: Scalars['String'];
};

export type Partners = {
   __typename?: 'Partners';
  partners?: Maybe<Array<Maybe<Partner>>>;
  total: Scalars['Int'];
};

export type PhotoDimensions = {
   __typename?: 'PhotoDimensions';
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PhotoDimensionsInput = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type Query = {
   __typename?: 'Query';
  dummy?: Maybe<Scalars['Boolean']>;
  errorCodes: ErrorCodes;
  me: User;
  cmsGetUser?: Maybe<User>;
  cmsGetUserByPhoneNumber?: Maybe<User>;
  cmsGetUsersByEmail?: Maybe<Users>;
  cmsGetUsers?: Maybe<Users>;
  cmsGetUsersByAddress?: Maybe<Users>;
  cmsGetUsersByUserGroup?: Maybe<Users>;
  getMedia?: Maybe<Media>;
  getPageMediaList?: Maybe<Array<Maybe<Media>>>;
  getPartners: Partners;
  getPartner: Partner;
  getPartnerUsers: Array<Maybe<User>>;
  getPartnerUser: User;
  getDocuments: Documents;
  getDocument: Document;
  getCategory?: Maybe<Category>;
  getCategories?: Maybe<Categories>;
  getCategoriesCMS?: Maybe<Array<Maybe<Category>>>;
};


export type QueryCmsGetUserArgs = {
  userId: Scalars['ID'];
};


export type QueryCmsGetUserByPhoneNumberArgs = {
  phoneNumber: Scalars['String'];
};


export type QueryCmsGetUsersByEmailArgs = {
  email: Scalars['String'];
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCmsGetUsersArgs = {
  query: Scalars['String'];
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCmsGetUsersByAddressArgs = {
  address: Scalars['String'];
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCmsGetUsersByUserGroupArgs = {
  userGroup: UserGroup;
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetMediaArgs = {
  _id: Scalars['ID'];
};


export type QueryGetPageMediaListArgs = {
  pageId: Scalars['ID'];
  limit: Scalars['Int'];
  after?: Maybe<Scalars['ID']>;
};


export type QueryGetPartnersArgs = {
  query?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetPartnerArgs = {
  _id: Scalars['ID'];
};


export type QueryGetPartnerUsersArgs = {
  partnerId: Scalars['ID'];
  query?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetPartnerUserArgs = {
  partnerId: Scalars['ID'];
  _id?: Maybe<Scalars['ID']>;
};


export type QueryGetDocumentsArgs = {
  query?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  documentType?: Maybe<DocumentType>;
};


export type QueryGetDocumentArgs = {
  _id: Scalars['ID'];
};


export type QueryGetCategoryArgs = {
  userId: Scalars['ID'];
};


export type QueryGetCategoriesArgs = {
  limit: Scalars['Int'];
  pageId?: Maybe<Scalars['ID']>;
  q?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['ID']>;
};


export type QueryGetCategoriesCmsArgs = {
  limit: Scalars['Int'];
  pageId?: Maybe<Scalars['ID']>;
  q?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['ID']>;
};

export enum RelationshipStatus {
  Single = 'SINGLE',
  Married = 'MARRIED'
}

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  firebaseAuthenticatedToken: Scalars['String'];
};

export enum Status {
  Pending = 'PENDING',
  InProgressing = 'IN_PROGRESSING',
  Missing = 'MISSING',
  Completed = 'COMPLETED'
}

export type Subscription = {
   __typename?: 'Subscription';
  onHeartBeat: Scalars['Boolean'];
};

export type TranslateCategory = {
   __typename?: 'TranslateCategory';
  _id: Scalars['ID'];
  categoryId: Scalars['ID'];
  nameCategory: Scalars['String'];
  slugCategory: Scalars['String'];
  descriptionCategory?: Maybe<Scalars['String']>;
  locale?: Maybe<CountryCode>;
};

export enum TypeCategory {
  Post = 'POST',
  Video = 'VIDEO'
}

export type UpdateDocumentInput = {
  _id: Scalars['ID'];
  partnerName: Scalars['String'];
  partnerCode: Scalars['String'];
  projectCode: Scalars['String'];
  projectName: Scalars['String'];
  projectCategory?: Maybe<Scalars['String']>;
  investDecideDepartment: Scalars['String'];
  investor: Scalars['String'];
  investorRepresent: Scalars['String'];
  documentType: Array<DocumentType>;
  partnerId?: Maybe<Scalars['ID']>;
  cmsUserId: Scalars['ID'];
  reviewerId: Scalars['ID'];
  status: Status;
};

export type UpdatePartnerInput = {
  _id: Scalars['ID'];
  name: Scalars['String'];
  partnerCode: Scalars['String'];
  projectName: Scalars['String'];
  projectCode: Scalars['String'];
  chairmanName: Scalars['String'];
  ceoName: Scalars['String'];
  departmentName: Scalars['String'];
  accountantName: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  fax: Scalars['String'];
  email: Scalars['String'];
};

export type UpdateTreeNodeInput = {
  treeNode: Array<NodeInput>;
};

export type UpdateUserInfo = {
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  group?: Maybe<UserGroup>;
  identityNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  relationshipStatus?: Maybe<RelationshipStatus>;
  level?: Maybe<Level>;
};


export type User = {
   __typename?: 'User';
  _id: Scalars['ID'];
  refId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  username: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Scalars['String'];
  group: UserGroup;
  userType?: Maybe<UserType>;
  countryCode: CountryCode;
  gender?: Maybe<Gender>;
  identityNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  relationshipStatus?: Maybe<RelationshipStatus>;
  level?: Maybe<Level>;
  forceDisplayPhone?: Maybe<Scalars['Boolean']>;
  photoUrl?: Maybe<Scalars['String']>;
  phoneRefId?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Media>;
  cover?: Maybe<Media>;
  avatarMediaId?: Maybe<Scalars['ID']>;
  coverMediaId?: Maybe<Scalars['ID']>;
  createdBy: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export enum UserGroup {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Staff = 'STAFF'
}

export type Users = {
   __typename?: 'Users';
  total: Scalars['Int'];
  users: Array<User>;
};

export enum UserType {
  Partner = 'PARTNER',
  Staff = 'STAFF'
}

export type GetmeQueryVariables = {};


export type GetmeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'username'>
  ) }
);


export const GetmeDocument = gql`
    query getme {
  me {
    _id
    username
  }
}
    `;

/**
 * __useGetmeQuery__
 *
 * To run a query within a React component, call `useGetmeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetmeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetmeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetmeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetmeQuery, GetmeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetmeQuery, GetmeQueryVariables>(GetmeDocument, baseOptions);
      }
export function useGetmeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetmeQuery, GetmeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetmeQuery, GetmeQueryVariables>(GetmeDocument, baseOptions);
        }
export type GetmeQueryHookResult = ReturnType<typeof useGetmeQuery>;
export type GetmeLazyQueryHookResult = ReturnType<typeof useGetmeLazyQuery>;
export type GetmeQueryResult = ApolloReactCommon.QueryResult<GetmeQuery, GetmeQueryVariables>;