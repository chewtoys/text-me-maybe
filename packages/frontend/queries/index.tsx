import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};


export type Message = {
   __typename?: 'Message',
  id: Scalars['Int'],
  body: Scalars['String'],
  sender: Sender,
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
  seen: Scalars['Boolean'],
};

export type MessageEdge = {
   __typename?: 'MessageEdge',
  cursor: Scalars['String'],
  node: Message,
};

export type MessagesConnection = {
   __typename?: 'MessagesConnection',
  pageInfo: PageInfo,
  edges: Array<MessageEdge>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createThread: Thread,
  sendMessage: Message,
  signUp: Result,
  signIn: SignInResult,
  exchangeTOTP: Result,
  markMessageAsSeen: Message,
  endThread: Thread,
  deleteThread: Result,
  enableTotp: Result,
  disableTotp: Result,
  updateAccount: User,
  /** Password Resets: */
  forgotPassword: Result,
  resetPassword: ResetPassword,
};


export type MutationCreateThreadArgs = {
  name: Scalars['String'],
  to: Scalars['String'],
  message: Scalars['String']
};


export type MutationSendMessageArgs = {
  threadID: Scalars['Int'],
  body: Scalars['String']
};


export type MutationSignUpArgs = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignInArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationExchangeTotpArgs = {
  token: Scalars['String']
};


export type MutationMarkMessageAsSeenArgs = {
  id: Scalars['Int']
};


export type MutationEndThreadArgs = {
  id: Scalars['Int']
};


export type MutationDeleteThreadArgs = {
  id: Scalars['Int']
};


export type MutationEnableTotpArgs = {
  secret: Scalars['String'],
  token: Scalars['String']
};


export type MutationDisableTotpArgs = {
  password: Scalars['String']
};


export type MutationUpdateAccountArgs = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']
};


export type MutationResetPasswordArgs = {
  uuid: Scalars['String'],
  password?: Maybe<Scalars['String']>
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor: Scalars['String'],
  endCursor: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  threads: ThreadConnection,
  thread: Thread,
  me: User,
};


export type QueryThreadsArgs = {
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};


export type QueryThreadArgs = {
  id: Scalars['Int']
};

export type ResetPassword = {
   __typename?: 'ResetPassword',
  complete: Scalars['Boolean'],
};

export type Result = {
   __typename?: 'Result',
  ok: Scalars['Boolean'],
};

export enum Sender {
  Self = 'SELF',
  Other = 'OTHER'
}

export type SignInResult = {
   __typename?: 'SignInResult',
  ok: Scalars['Boolean'],
  requiresTOTP: Scalars['Boolean'],
};

export type Subscription = {
   __typename?: 'Subscription',
  newMessage: MessageEdge,
  threadUpdate: Thread,
};


export type SubscriptionNewMessageArgs = {
  threadID: Scalars['Int']
};

export type Thread = {
   __typename?: 'Thread',
  id: Scalars['Int'],
  name: Scalars['String'],
  number: Scalars['String'],
  recipient: Scalars['String'],
  lastMessage?: Maybe<Message>,
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
  ended: Scalars['Boolean'],
  messages: MessagesConnection,
};


export type ThreadMessagesArgs = {
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};

export type ThreadConnection = {
   __typename?: 'ThreadConnection',
  pageInfo: PageInfo,
  edges: Array<ThreadEdge>,
};

export type ThreadEdge = {
   __typename?: 'ThreadEdge',
  cursor: Scalars['String'],
  node: Thread,
};

export type TotpOnboarding = {
   __typename?: 'TOTPOnboarding',
  secret: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  name: Scalars['String'],
  email: Scalars['String'],
  hasTOTP: Scalars['Boolean'],
  onboardTOTP?: Maybe<TotpOnboarding>,
};

export type CreateThreadMutationVariables = {
  name: Scalars['String'],
  phoneNumber: Scalars['String'],
  message: Scalars['String']
};


export type CreateThreadMutation = (
  { __typename?: 'Mutation' }
  & { createThread: (
    { __typename?: 'Thread' }
    & Pick<Thread, 'id'>
  ) }
);

export type DeleteThreadMutationVariables = {
  id: Scalars['Int']
};


export type DeleteThreadMutation = (
  { __typename?: 'Mutation' }
  & { deleteThread: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type DisableTotpMutationVariables = {
  password: Scalars['String']
};


export type DisableTotpMutation = (
  { __typename?: 'Mutation' }
  & { disableTotp: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type EnableTotpMutationVariables = {
  secret: Scalars['String'],
  token: Scalars['String']
};


export type EnableTotpMutation = (
  { __typename?: 'Mutation' }
  & { enableTotp: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type EndThreadMutationVariables = {
  id: Scalars['Int']
};


export type EndThreadMutation = (
  { __typename?: 'Mutation' }
  & { endThread: (
    { __typename?: 'Thread' }
    & Pick<Thread, 'id' | 'ended'>
  ) }
);

export type ExchangeTotpMutationVariables = {
  token: Scalars['String']
};


export type ExchangeTotpMutation = (
  { __typename?: 'Mutation' }
  & { exchangeTOTP: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String']
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { forgotPassword: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type MarkMessageSeenMutationVariables = {
  id: Scalars['Int']
};


export type MarkMessageSeenMutation = (
  { __typename?: 'Mutation' }
  & { markMessageAsSeen: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'seen'>
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & MeFragmentFragment
  ) }
);

export type MeFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'hasTOTP'>
);

export type MessageFragmentFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'body' | 'sender' | 'createdAt' | 'updatedAt' | 'seen'>
);

export type NewMessageSubscriptionVariables = {
  threadID: Scalars['Int']
};


export type NewMessageSubscription = (
  { __typename?: 'Subscription' }
  & { newMessage: (
    { __typename?: 'MessageEdge' }
    & { node: (
      { __typename?: 'Message' }
      & MessageFragmentFragment
    ) }
  ) }
);

export type OnboardTotpQueryVariables = {};


export type OnboardTotpQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
    & { onboardTOTP: Maybe<(
      { __typename?: 'TOTPOnboarding' }
      & Pick<TotpOnboarding, 'secret'>
    )> }
  ) }
);

export type ResetPasswordMutationVariables = {
  uuid: Scalars['String'],
  password?: Maybe<Scalars['String']>
};


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'ResetPassword' }
    & Pick<ResetPassword, 'complete'>
  ) }
);

export type SendMessageMutationVariables = {
  threadID: Scalars['Int'],
  message: Scalars['String']
};


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendMessage: (
    { __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

export type SignInMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'SignInResult' }
    & Pick<SignInResult, 'ok' | 'requiresTOTP'>
  ) }
);

export type SignUpMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'Result' }
    & Pick<Result, 'ok'>
  ) }
);

export type ThreadQueryVariables = {
  id: Scalars['Int']
};


export type ThreadQuery = (
  { __typename?: 'Query' }
  & { thread: (
    { __typename?: 'Thread' }
    & Pick<Thread, 'id' | 'name' | 'recipient' | 'number' | 'createdAt' | 'ended'>
  ) }
);

export type ThreadFragmentFragment = (
  { __typename?: 'Thread' }
  & Pick<Thread, 'id' | 'name' | 'recipient' | 'number' | 'updatedAt' | 'ended'>
  & { lastMessage: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'body' | 'seen'>
  )> }
);

export type ThreadMessagesQueryVariables = {
  id: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};


export type ThreadMessagesQuery = (
  { __typename?: 'Query' }
  & { thread: (
    { __typename?: 'Thread' }
    & Pick<Thread, 'id'>
    & { messages: (
      { __typename?: 'MessagesConnection' }
      & { pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
      ), edges: Array<(
        { __typename?: 'MessageEdge' }
        & { node: (
          { __typename?: 'Message' }
          & MessageFragmentFragment
        ) }
      )> }
    ) }
  ) }
);

export type ThreadUpdateSubscriptionVariables = {};


export type ThreadUpdateSubscription = (
  { __typename?: 'Subscription' }
  & { threadUpdate: (
    { __typename?: 'Thread' }
    & ThreadFragmentFragment
  ) }
);

export type ThreadsQueryVariables = {
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};


export type ThreadsQuery = (
  { __typename?: 'Query' }
  & { threads: (
    { __typename?: 'ThreadConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'ThreadEdge' }
      & { node: (
        { __typename?: 'Thread' }
        & ThreadFragmentFragment
      ) }
    )> }
  ) }
);

export type UpdateAccountMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String']
};


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'User' }
    & MeFragmentFragment
  ) }
);

export const MeFragmentFragmentDoc = gql`
    fragment MeFragment on User {
  id
  name
  email
  hasTOTP
}
    `;
export const MessageFragmentFragmentDoc = gql`
    fragment MessageFragment on Message {
  id
  body
  sender
  createdAt
  updatedAt
  seen
}
    `;
export const ThreadFragmentFragmentDoc = gql`
    fragment ThreadFragment on Thread {
  id
  name
  recipient
  number
  updatedAt
  ended
  lastMessage {
    id
    body
    seen
  }
}
    `;
export const CreateThreadDocument = gql`
    mutation CreateThread($name: String!, $phoneNumber: String!, $message: String!) {
  createThread(name: $name, to: $phoneNumber, message: $message) {
    id
  }
}
    `;
export type CreateThreadMutationFn = ApolloReactCommon.MutationFunction<CreateThreadMutation, CreateThreadMutationVariables>;

/**
 * __useCreateThreadMutation__
 *
 * To run a mutation, you first call `useCreateThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadMutation, { data, loading, error }] = useCreateThreadMutation({
 *   variables: {
 *      name: // value for 'name'
 *      phoneNumber: // value for 'phoneNumber'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateThreadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateThreadMutation, CreateThreadMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateThreadMutation, CreateThreadMutationVariables>(CreateThreadDocument, baseOptions);
      }
export type CreateThreadMutationHookResult = ReturnType<typeof useCreateThreadMutation>;
export type CreateThreadMutationResult = ApolloReactCommon.MutationResult<CreateThreadMutation>;
export type CreateThreadMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateThreadMutation, CreateThreadMutationVariables>;
export const DeleteThreadDocument = gql`
    mutation DeleteThread($id: Int!) {
  deleteThread(id: $id) {
    ok
  }
}
    `;
export type DeleteThreadMutationFn = ApolloReactCommon.MutationFunction<DeleteThreadMutation, DeleteThreadMutationVariables>;

/**
 * __useDeleteThreadMutation__
 *
 * To run a mutation, you first call `useDeleteThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThreadMutation, { data, loading, error }] = useDeleteThreadMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteThreadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteThreadMutation, DeleteThreadMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteThreadMutation, DeleteThreadMutationVariables>(DeleteThreadDocument, baseOptions);
      }
export type DeleteThreadMutationHookResult = ReturnType<typeof useDeleteThreadMutation>;
export type DeleteThreadMutationResult = ApolloReactCommon.MutationResult<DeleteThreadMutation>;
export type DeleteThreadMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteThreadMutation, DeleteThreadMutationVariables>;
export const DisableTotpDocument = gql`
    mutation DisableTOTP($password: String!) {
  disableTotp(password: $password) {
    ok
  }
}
    `;
export type DisableTotpMutationFn = ApolloReactCommon.MutationFunction<DisableTotpMutation, DisableTotpMutationVariables>;

/**
 * __useDisableTotpMutation__
 *
 * To run a mutation, you first call `useDisableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableTotpMutation, { data, loading, error }] = useDisableTotpMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useDisableTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DisableTotpMutation, DisableTotpMutationVariables>) {
        return ApolloReactHooks.useMutation<DisableTotpMutation, DisableTotpMutationVariables>(DisableTotpDocument, baseOptions);
      }
export type DisableTotpMutationHookResult = ReturnType<typeof useDisableTotpMutation>;
export type DisableTotpMutationResult = ApolloReactCommon.MutationResult<DisableTotpMutation>;
export type DisableTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = gql`
    mutation EnableTotp($secret: String!, $token: String!) {
  enableTotp(secret: $secret, token: $token) {
    ok
  }
}
    `;
export type EnableTotpMutationFn = ApolloReactCommon.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>;

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      secret: // value for 'secret'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
        return ApolloReactHooks.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, baseOptions);
      }
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>;
export type EnableTotpMutationResult = ApolloReactCommon.MutationResult<EnableTotpMutation>;
export type EnableTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>;
export const EndThreadDocument = gql`
    mutation EndThread($id: Int!) {
  endThread(id: $id) {
    id
    ended
  }
}
    `;
export type EndThreadMutationFn = ApolloReactCommon.MutationFunction<EndThreadMutation, EndThreadMutationVariables>;

/**
 * __useEndThreadMutation__
 *
 * To run a mutation, you first call `useEndThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endThreadMutation, { data, loading, error }] = useEndThreadMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEndThreadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EndThreadMutation, EndThreadMutationVariables>) {
        return ApolloReactHooks.useMutation<EndThreadMutation, EndThreadMutationVariables>(EndThreadDocument, baseOptions);
      }
export type EndThreadMutationHookResult = ReturnType<typeof useEndThreadMutation>;
export type EndThreadMutationResult = ApolloReactCommon.MutationResult<EndThreadMutation>;
export type EndThreadMutationOptions = ApolloReactCommon.BaseMutationOptions<EndThreadMutation, EndThreadMutationVariables>;
export const ExchangeTotpDocument = gql`
    mutation ExchangeTOTP($token: String!) {
  exchangeTOTP(token: $token) {
    ok
  }
}
    `;
export type ExchangeTotpMutationFn = ApolloReactCommon.MutationFunction<ExchangeTotpMutation, ExchangeTotpMutationVariables>;

/**
 * __useExchangeTotpMutation__
 *
 * To run a mutation, you first call `useExchangeTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExchangeTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exchangeTotpMutation, { data, loading, error }] = useExchangeTotpMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useExchangeTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ExchangeTotpMutation, ExchangeTotpMutationVariables>) {
        return ApolloReactHooks.useMutation<ExchangeTotpMutation, ExchangeTotpMutationVariables>(ExchangeTotpDocument, baseOptions);
      }
export type ExchangeTotpMutationHookResult = ReturnType<typeof useExchangeTotpMutation>;
export type ExchangeTotpMutationResult = ApolloReactCommon.MutationResult<ExchangeTotpMutation>;
export type ExchangeTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<ExchangeTotpMutation, ExchangeTotpMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const MarkMessageSeenDocument = gql`
    mutation MarkMessageSeen($id: Int!) {
  markMessageAsSeen(id: $id) {
    id
    seen
  }
}
    `;
export type MarkMessageSeenMutationFn = ApolloReactCommon.MutationFunction<MarkMessageSeenMutation, MarkMessageSeenMutationVariables>;

/**
 * __useMarkMessageSeenMutation__
 *
 * To run a mutation, you first call `useMarkMessageSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMessageSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMessageSeenMutation, { data, loading, error }] = useMarkMessageSeenMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMarkMessageSeenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MarkMessageSeenMutation, MarkMessageSeenMutationVariables>) {
        return ApolloReactHooks.useMutation<MarkMessageSeenMutation, MarkMessageSeenMutationVariables>(MarkMessageSeenDocument, baseOptions);
      }
export type MarkMessageSeenMutationHookResult = ReturnType<typeof useMarkMessageSeenMutation>;
export type MarkMessageSeenMutationResult = ApolloReactCommon.MutationResult<MarkMessageSeenMutation>;
export type MarkMessageSeenMutationOptions = ApolloReactCommon.BaseMutationOptions<MarkMessageSeenMutation, MarkMessageSeenMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...MeFragment
  }
}
    ${MeFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const NewMessageDocument = gql`
    subscription NewMessage($threadID: Int!) {
  newMessage(threadID: $threadID) {
    node {
      ...MessageFragment
    }
  }
}
    ${MessageFragmentFragmentDoc}`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *      threadID: // value for 'threadID'
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, baseOptions);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = ApolloReactCommon.SubscriptionResult<NewMessageSubscription>;
export const OnboardTotpDocument = gql`
    query OnboardTOTP {
  me {
    id
    name
    onboardTOTP {
      secret
    }
  }
}
    `;

/**
 * __useOnboardTotpQuery__
 *
 * To run a query within a React component, call `useOnboardTotpQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnboardTotpQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnboardTotpQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnboardTotpQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OnboardTotpQuery, OnboardTotpQueryVariables>) {
        return ApolloReactHooks.useQuery<OnboardTotpQuery, OnboardTotpQueryVariables>(OnboardTotpDocument, baseOptions);
      }
export function useOnboardTotpLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OnboardTotpQuery, OnboardTotpQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OnboardTotpQuery, OnboardTotpQueryVariables>(OnboardTotpDocument, baseOptions);
        }
export type OnboardTotpQueryHookResult = ReturnType<typeof useOnboardTotpQuery>;
export type OnboardTotpLazyQueryHookResult = ReturnType<typeof useOnboardTotpLazyQuery>;
export type OnboardTotpQueryResult = ApolloReactCommon.QueryResult<OnboardTotpQuery, OnboardTotpQueryVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($uuid: String!, $password: String) {
  resetPassword(uuid: $uuid, password: $password) {
    complete
  }
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($threadID: Int!, $message: String!) {
  sendMessage(threadID: $threadID, body: $message) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;
export type SendMessageMutationFn = ApolloReactCommon.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      threadID: // value for 'threadID'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = ApolloReactCommon.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    ok
    requiresTOTP
  }
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!) {
  signUp(name: $name, email: $email, password: $password) {
    ok
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const ThreadDocument = gql`
    query Thread($id: Int!) {
  thread(id: $id) {
    id
    name
    recipient
    number
    createdAt
    ended
  }
}
    `;

/**
 * __useThreadQuery__
 *
 * To run a query within a React component, call `useThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useThreadQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ThreadQuery, ThreadQueryVariables>) {
        return ApolloReactHooks.useQuery<ThreadQuery, ThreadQueryVariables>(ThreadDocument, baseOptions);
      }
export function useThreadLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ThreadQuery, ThreadQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ThreadQuery, ThreadQueryVariables>(ThreadDocument, baseOptions);
        }
export type ThreadQueryHookResult = ReturnType<typeof useThreadQuery>;
export type ThreadLazyQueryHookResult = ReturnType<typeof useThreadLazyQuery>;
export type ThreadQueryResult = ApolloReactCommon.QueryResult<ThreadQuery, ThreadQueryVariables>;
export const ThreadMessagesDocument = gql`
    query ThreadMessages($id: Int!, $after: String) {
  thread(id: $id) {
    id
    messages(first: 10, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ...MessageFragment
        }
      }
    }
  }
}
    ${MessageFragmentFragmentDoc}`;

/**
 * __useThreadMessagesQuery__
 *
 * To run a query within a React component, call `useThreadMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadMessagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useThreadMessagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ThreadMessagesQuery, ThreadMessagesQueryVariables>) {
        return ApolloReactHooks.useQuery<ThreadMessagesQuery, ThreadMessagesQueryVariables>(ThreadMessagesDocument, baseOptions);
      }
export function useThreadMessagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ThreadMessagesQuery, ThreadMessagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ThreadMessagesQuery, ThreadMessagesQueryVariables>(ThreadMessagesDocument, baseOptions);
        }
export type ThreadMessagesQueryHookResult = ReturnType<typeof useThreadMessagesQuery>;
export type ThreadMessagesLazyQueryHookResult = ReturnType<typeof useThreadMessagesLazyQuery>;
export type ThreadMessagesQueryResult = ApolloReactCommon.QueryResult<ThreadMessagesQuery, ThreadMessagesQueryVariables>;
export const ThreadUpdateDocument = gql`
    subscription ThreadUpdate {
  threadUpdate {
    ...ThreadFragment
  }
}
    ${ThreadFragmentFragmentDoc}`;

/**
 * __useThreadUpdateSubscription__
 *
 * To run a query within a React component, call `useThreadUpdateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useThreadUpdateSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadUpdateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useThreadUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ThreadUpdateSubscription, ThreadUpdateSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ThreadUpdateSubscription, ThreadUpdateSubscriptionVariables>(ThreadUpdateDocument, baseOptions);
      }
export type ThreadUpdateSubscriptionHookResult = ReturnType<typeof useThreadUpdateSubscription>;
export type ThreadUpdateSubscriptionResult = ApolloReactCommon.SubscriptionResult<ThreadUpdateSubscription>;
export const ThreadsDocument = gql`
    query Threads($first: Int!, $after: String) {
  threads(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...ThreadFragment
      }
    }
  }
}
    ${ThreadFragmentFragmentDoc}`;

/**
 * __useThreadsQuery__
 *
 * To run a query within a React component, call `useThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useThreadsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ThreadsQuery, ThreadsQueryVariables>) {
        return ApolloReactHooks.useQuery<ThreadsQuery, ThreadsQueryVariables>(ThreadsDocument, baseOptions);
      }
export function useThreadsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ThreadsQuery, ThreadsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ThreadsQuery, ThreadsQueryVariables>(ThreadsDocument, baseOptions);
        }
export type ThreadsQueryHookResult = ReturnType<typeof useThreadsQuery>;
export type ThreadsLazyQueryHookResult = ReturnType<typeof useThreadsLazyQuery>;
export type ThreadsQueryResult = ApolloReactCommon.QueryResult<ThreadsQuery, ThreadsQueryVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($name: String!, $email: String!) {
  updateAccount(name: $name, email: $email) {
    ...MeFragment
  }
}
    ${MeFragmentFragmentDoc}`;
export type UpdateAccountMutationFn = ApolloReactCommon.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, baseOptions);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = ApolloReactCommon.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;