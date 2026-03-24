
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Rfp
 * 
 */
export type Rfp = $Result.DefaultSelection<Prisma.$RfpPayload>
/**
 * Model RfpVendor
 * 
 */
export type RfpVendor = $Result.DefaultSelection<Prisma.$RfpVendorPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model ProposalScore
 * 
 */
export type ProposalScore = $Result.DefaultSelection<Prisma.$ProposalScorePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs>;

  /**
   * `prisma.rfp`: Exposes CRUD operations for the **Rfp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rfps
    * const rfps = await prisma.rfp.findMany()
    * ```
    */
  get rfp(): Prisma.RfpDelegate<ExtArgs>;

  /**
   * `prisma.rfpVendor`: Exposes CRUD operations for the **RfpVendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RfpVendors
    * const rfpVendors = await prisma.rfpVendor.findMany()
    * ```
    */
  get rfpVendor(): Prisma.RfpVendorDelegate<ExtArgs>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs>;

  /**
   * `prisma.proposalScore`: Exposes CRUD operations for the **ProposalScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProposalScores
    * const proposalScores = await prisma.proposalScore.findMany()
    * ```
    */
  get proposalScore(): Prisma.ProposalScoreDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vendor: 'Vendor',
    Rfp: 'Rfp',
    RfpVendor: 'RfpVendor',
    Proposal: 'Proposal',
    ProposalScore: 'ProposalScore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "vendor" | "rfp" | "rfpVendor" | "proposal" | "proposalScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Rfp: {
        payload: Prisma.$RfpPayload<ExtArgs>
        fields: Prisma.RfpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RfpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RfpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>
          }
          findFirst: {
            args: Prisma.RfpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RfpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>
          }
          findMany: {
            args: Prisma.RfpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>[]
          }
          create: {
            args: Prisma.RfpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>
          }
          createMany: {
            args: Prisma.RfpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RfpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>[]
          }
          delete: {
            args: Prisma.RfpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>
          }
          update: {
            args: Prisma.RfpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>
          }
          deleteMany: {
            args: Prisma.RfpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RfpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RfpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpPayload>
          }
          aggregate: {
            args: Prisma.RfpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRfp>
          }
          groupBy: {
            args: Prisma.RfpGroupByArgs<ExtArgs>
            result: $Utils.Optional<RfpGroupByOutputType>[]
          }
          count: {
            args: Prisma.RfpCountArgs<ExtArgs>
            result: $Utils.Optional<RfpCountAggregateOutputType> | number
          }
        }
      }
      RfpVendor: {
        payload: Prisma.$RfpVendorPayload<ExtArgs>
        fields: Prisma.RfpVendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RfpVendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RfpVendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>
          }
          findFirst: {
            args: Prisma.RfpVendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RfpVendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>
          }
          findMany: {
            args: Prisma.RfpVendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>[]
          }
          create: {
            args: Prisma.RfpVendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>
          }
          createMany: {
            args: Prisma.RfpVendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RfpVendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>[]
          }
          delete: {
            args: Prisma.RfpVendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>
          }
          update: {
            args: Prisma.RfpVendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>
          }
          deleteMany: {
            args: Prisma.RfpVendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RfpVendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RfpVendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RfpVendorPayload>
          }
          aggregate: {
            args: Prisma.RfpVendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRfpVendor>
          }
          groupBy: {
            args: Prisma.RfpVendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RfpVendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.RfpVendorCountArgs<ExtArgs>
            result: $Utils.Optional<RfpVendorCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      ProposalScore: {
        payload: Prisma.$ProposalScorePayload<ExtArgs>
        fields: Prisma.ProposalScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>
          }
          findFirst: {
            args: Prisma.ProposalScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>
          }
          findMany: {
            args: Prisma.ProposalScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>[]
          }
          create: {
            args: Prisma.ProposalScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>
          }
          createMany: {
            args: Prisma.ProposalScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>[]
          }
          delete: {
            args: Prisma.ProposalScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>
          }
          update: {
            args: Prisma.ProposalScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>
          }
          deleteMany: {
            args: Prisma.ProposalScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalScorePayload>
          }
          aggregate: {
            args: Prisma.ProposalScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposalScore>
          }
          groupBy: {
            args: Prisma.ProposalScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdRfps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdRfps?: boolean | UserCountOutputTypeCountCreatedRfpsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRfpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RfpWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    proposals: number
    rfpVendors: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | VendorCountOutputTypeCountProposalsArgs
    rfpVendors?: boolean | VendorCountOutputTypeCountRfpVendorsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountRfpVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RfpVendorWhereInput
  }


  /**
   * Count Type RfpCountOutputType
   */

  export type RfpCountOutputType = {
    proposals: number
    rfpVendors: number
  }

  export type RfpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | RfpCountOutputTypeCountProposalsArgs
    rfpVendors?: boolean | RfpCountOutputTypeCountRfpVendorsArgs
  }

  // Custom InputTypes
  /**
   * RfpCountOutputType without action
   */
  export type RfpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpCountOutputType
     */
    select?: RfpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RfpCountOutputType without action
   */
  export type RfpCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * RfpCountOutputType without action
   */
  export type RfpCountOutputTypeCountRfpVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RfpVendorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    companyName: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    companyName: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    companyName: number
    phone: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    companyName?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    companyName?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    companyName?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role: string
    companyName: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    companyName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdRfps?: boolean | User$createdRfpsArgs<ExtArgs>
    vendor?: boolean | User$vendorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    companyName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    companyName?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdRfps?: boolean | User$createdRfpsArgs<ExtArgs>
    vendor?: boolean | User$vendorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdRfps: Prisma.$RfpPayload<ExtArgs>[]
      vendor: Prisma.$VendorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: string
      companyName: string | null
      phone: string | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      postalCode: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdRfps<T extends User$createdRfpsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRfpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findMany"> | Null>
    vendor<T extends User$vendorArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly postalCode: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.createdRfps
   */
  export type User$createdRfpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    where?: RfpWhereInput
    orderBy?: RfpOrderByWithRelationInput | RfpOrderByWithRelationInput[]
    cursor?: RfpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RfpScalarFieldEnum | RfpScalarFieldEnum[]
  }

  /**
   * User.vendor
   */
  export type User$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VendorSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    contactPerson: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type VendorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    contactPerson: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    contactPerson: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VendorSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contactPerson?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contactPerson?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contactPerson?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: number
    name: string
    email: string
    contactPerson: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: number | null
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    contactPerson?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Vendor$userArgs<ExtArgs>
    proposals?: boolean | Vendor$proposalsArgs<ExtArgs>
    rfpVendors?: boolean | Vendor$rfpVendorsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    contactPerson?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Vendor$userArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    contactPerson?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Vendor$userArgs<ExtArgs>
    proposals?: boolean | Vendor$proposalsArgs<ExtArgs>
    rfpVendors?: boolean | Vendor$rfpVendorsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Vendor$userArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      rfpVendors: Prisma.$RfpVendorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      contactPerson: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: number | null
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Vendor$userArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    proposals<T extends Vendor$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany"> | Null>
    rfpVendors<T extends Vendor$rfpVendorsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$rfpVendorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */ 
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'Int'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly contactPerson: FieldRef<"Vendor", 'String'>
    readonly notes: FieldRef<"Vendor", 'String'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
    readonly userId: FieldRef<"Vendor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor.user
   */
  export type Vendor$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Vendor.proposals
   */
  export type Vendor$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Vendor.rfpVendors
   */
  export type Vendor$rfpVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    where?: RfpVendorWhereInput
    orderBy?: RfpVendorOrderByWithRelationInput | RfpVendorOrderByWithRelationInput[]
    cursor?: RfpVendorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RfpVendorScalarFieldEnum | RfpVendorScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Rfp
   */

  export type AggregateRfp = {
    _count: RfpCountAggregateOutputType | null
    _avg: RfpAvgAggregateOutputType | null
    _sum: RfpSumAggregateOutputType | null
    _min: RfpMinAggregateOutputType | null
    _max: RfpMaxAggregateOutputType | null
  }

  export type RfpAvgAggregateOutputType = {
    id: number | null
    budget: number | null
    requesterId: number | null
    selectedProposalId: number | null
  }

  export type RfpSumAggregateOutputType = {
    id: number | null
    budget: number | null
    requesterId: number | null
    selectedProposalId: number | null
  }

  export type RfpMinAggregateOutputType = {
    id: number | null
    title: string | null
    descriptionRaw: string | null
    budget: number | null
    currency: string | null
    deliveryBy: Date | null
    paymentTerms: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: number | null
    selectedProposalId: number | null
  }

  export type RfpMaxAggregateOutputType = {
    id: number | null
    title: string | null
    descriptionRaw: string | null
    budget: number | null
    currency: string | null
    deliveryBy: Date | null
    paymentTerms: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requesterId: number | null
    selectedProposalId: number | null
  }

  export type RfpCountAggregateOutputType = {
    id: number
    title: number
    descriptionRaw: number
    budget: number
    currency: number
    deliveryBy: number
    paymentTerms: number
    requirements: number
    createdAt: number
    updatedAt: number
    requesterId: number
    selectedProposalId: number
    _all: number
  }


  export type RfpAvgAggregateInputType = {
    id?: true
    budget?: true
    requesterId?: true
    selectedProposalId?: true
  }

  export type RfpSumAggregateInputType = {
    id?: true
    budget?: true
    requesterId?: true
    selectedProposalId?: true
  }

  export type RfpMinAggregateInputType = {
    id?: true
    title?: true
    descriptionRaw?: true
    budget?: true
    currency?: true
    deliveryBy?: true
    paymentTerms?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    selectedProposalId?: true
  }

  export type RfpMaxAggregateInputType = {
    id?: true
    title?: true
    descriptionRaw?: true
    budget?: true
    currency?: true
    deliveryBy?: true
    paymentTerms?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    selectedProposalId?: true
  }

  export type RfpCountAggregateInputType = {
    id?: true
    title?: true
    descriptionRaw?: true
    budget?: true
    currency?: true
    deliveryBy?: true
    paymentTerms?: true
    requirements?: true
    createdAt?: true
    updatedAt?: true
    requesterId?: true
    selectedProposalId?: true
    _all?: true
  }

  export type RfpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rfp to aggregate.
     */
    where?: RfpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfps to fetch.
     */
    orderBy?: RfpOrderByWithRelationInput | RfpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RfpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rfps
    **/
    _count?: true | RfpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RfpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RfpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RfpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RfpMaxAggregateInputType
  }

  export type GetRfpAggregateType<T extends RfpAggregateArgs> = {
        [P in keyof T & keyof AggregateRfp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRfp[P]>
      : GetScalarType<T[P], AggregateRfp[P]>
  }




  export type RfpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RfpWhereInput
    orderBy?: RfpOrderByWithAggregationInput | RfpOrderByWithAggregationInput[]
    by: RfpScalarFieldEnum[] | RfpScalarFieldEnum
    having?: RfpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RfpCountAggregateInputType | true
    _avg?: RfpAvgAggregateInputType
    _sum?: RfpSumAggregateInputType
    _min?: RfpMinAggregateInputType
    _max?: RfpMaxAggregateInputType
  }

  export type RfpGroupByOutputType = {
    id: number
    title: string
    descriptionRaw: string
    budget: number | null
    currency: string | null
    deliveryBy: Date | null
    paymentTerms: string | null
    requirements: JsonValue | null
    createdAt: Date
    updatedAt: Date
    requesterId: number | null
    selectedProposalId: number | null
    _count: RfpCountAggregateOutputType | null
    _avg: RfpAvgAggregateOutputType | null
    _sum: RfpSumAggregateOutputType | null
    _min: RfpMinAggregateOutputType | null
    _max: RfpMaxAggregateOutputType | null
  }

  type GetRfpGroupByPayload<T extends RfpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RfpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RfpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RfpGroupByOutputType[P]>
            : GetScalarType<T[P], RfpGroupByOutputType[P]>
        }
      >
    >


  export type RfpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptionRaw?: boolean
    budget?: boolean
    currency?: boolean
    deliveryBy?: boolean
    paymentTerms?: boolean
    requirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    selectedProposalId?: boolean
    requester?: boolean | Rfp$requesterArgs<ExtArgs>
    selectedProposal?: boolean | Rfp$selectedProposalArgs<ExtArgs>
    proposals?: boolean | Rfp$proposalsArgs<ExtArgs>
    rfpVendors?: boolean | Rfp$rfpVendorsArgs<ExtArgs>
    _count?: boolean | RfpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rfp"]>

  export type RfpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptionRaw?: boolean
    budget?: boolean
    currency?: boolean
    deliveryBy?: boolean
    paymentTerms?: boolean
    requirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    selectedProposalId?: boolean
    requester?: boolean | Rfp$requesterArgs<ExtArgs>
    selectedProposal?: boolean | Rfp$selectedProposalArgs<ExtArgs>
  }, ExtArgs["result"]["rfp"]>

  export type RfpSelectScalar = {
    id?: boolean
    title?: boolean
    descriptionRaw?: boolean
    budget?: boolean
    currency?: boolean
    deliveryBy?: boolean
    paymentTerms?: boolean
    requirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requesterId?: boolean
    selectedProposalId?: boolean
  }

  export type RfpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | Rfp$requesterArgs<ExtArgs>
    selectedProposal?: boolean | Rfp$selectedProposalArgs<ExtArgs>
    proposals?: boolean | Rfp$proposalsArgs<ExtArgs>
    rfpVendors?: boolean | Rfp$rfpVendorsArgs<ExtArgs>
    _count?: boolean | RfpCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RfpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | Rfp$requesterArgs<ExtArgs>
    selectedProposal?: boolean | Rfp$selectedProposalArgs<ExtArgs>
  }

  export type $RfpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rfp"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs> | null
      selectedProposal: Prisma.$ProposalPayload<ExtArgs> | null
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      rfpVendors: Prisma.$RfpVendorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      descriptionRaw: string
      budget: number | null
      currency: string | null
      deliveryBy: Date | null
      paymentTerms: string | null
      requirements: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      requesterId: number | null
      selectedProposalId: number | null
    }, ExtArgs["result"]["rfp"]>
    composites: {}
  }

  type RfpGetPayload<S extends boolean | null | undefined | RfpDefaultArgs> = $Result.GetResult<Prisma.$RfpPayload, S>

  type RfpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RfpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RfpCountAggregateInputType | true
    }

  export interface RfpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rfp'], meta: { name: 'Rfp' } }
    /**
     * Find zero or one Rfp that matches the filter.
     * @param {RfpFindUniqueArgs} args - Arguments to find a Rfp
     * @example
     * // Get one Rfp
     * const rfp = await prisma.rfp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RfpFindUniqueArgs>(args: SelectSubset<T, RfpFindUniqueArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rfp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RfpFindUniqueOrThrowArgs} args - Arguments to find a Rfp
     * @example
     * // Get one Rfp
     * const rfp = await prisma.rfp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RfpFindUniqueOrThrowArgs>(args: SelectSubset<T, RfpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rfp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpFindFirstArgs} args - Arguments to find a Rfp
     * @example
     * // Get one Rfp
     * const rfp = await prisma.rfp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RfpFindFirstArgs>(args?: SelectSubset<T, RfpFindFirstArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rfp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpFindFirstOrThrowArgs} args - Arguments to find a Rfp
     * @example
     * // Get one Rfp
     * const rfp = await prisma.rfp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RfpFindFirstOrThrowArgs>(args?: SelectSubset<T, RfpFindFirstOrThrowArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rfps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rfps
     * const rfps = await prisma.rfp.findMany()
     * 
     * // Get first 10 Rfps
     * const rfps = await prisma.rfp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rfpWithIdOnly = await prisma.rfp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RfpFindManyArgs>(args?: SelectSubset<T, RfpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rfp.
     * @param {RfpCreateArgs} args - Arguments to create a Rfp.
     * @example
     * // Create one Rfp
     * const Rfp = await prisma.rfp.create({
     *   data: {
     *     // ... data to create a Rfp
     *   }
     * })
     * 
     */
    create<T extends RfpCreateArgs>(args: SelectSubset<T, RfpCreateArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rfps.
     * @param {RfpCreateManyArgs} args - Arguments to create many Rfps.
     * @example
     * // Create many Rfps
     * const rfp = await prisma.rfp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RfpCreateManyArgs>(args?: SelectSubset<T, RfpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rfps and returns the data saved in the database.
     * @param {RfpCreateManyAndReturnArgs} args - Arguments to create many Rfps.
     * @example
     * // Create many Rfps
     * const rfp = await prisma.rfp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rfps and only return the `id`
     * const rfpWithIdOnly = await prisma.rfp.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RfpCreateManyAndReturnArgs>(args?: SelectSubset<T, RfpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rfp.
     * @param {RfpDeleteArgs} args - Arguments to delete one Rfp.
     * @example
     * // Delete one Rfp
     * const Rfp = await prisma.rfp.delete({
     *   where: {
     *     // ... filter to delete one Rfp
     *   }
     * })
     * 
     */
    delete<T extends RfpDeleteArgs>(args: SelectSubset<T, RfpDeleteArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rfp.
     * @param {RfpUpdateArgs} args - Arguments to update one Rfp.
     * @example
     * // Update one Rfp
     * const rfp = await prisma.rfp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RfpUpdateArgs>(args: SelectSubset<T, RfpUpdateArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rfps.
     * @param {RfpDeleteManyArgs} args - Arguments to filter Rfps to delete.
     * @example
     * // Delete a few Rfps
     * const { count } = await prisma.rfp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RfpDeleteManyArgs>(args?: SelectSubset<T, RfpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rfps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rfps
     * const rfp = await prisma.rfp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RfpUpdateManyArgs>(args: SelectSubset<T, RfpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rfp.
     * @param {RfpUpsertArgs} args - Arguments to update or create a Rfp.
     * @example
     * // Update or create a Rfp
     * const rfp = await prisma.rfp.upsert({
     *   create: {
     *     // ... data to create a Rfp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rfp we want to update
     *   }
     * })
     */
    upsert<T extends RfpUpsertArgs>(args: SelectSubset<T, RfpUpsertArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rfps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpCountArgs} args - Arguments to filter Rfps to count.
     * @example
     * // Count the number of Rfps
     * const count = await prisma.rfp.count({
     *   where: {
     *     // ... the filter for the Rfps we want to count
     *   }
     * })
    **/
    count<T extends RfpCountArgs>(
      args?: Subset<T, RfpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RfpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rfp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RfpAggregateArgs>(args: Subset<T, RfpAggregateArgs>): Prisma.PrismaPromise<GetRfpAggregateType<T>>

    /**
     * Group by Rfp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RfpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RfpGroupByArgs['orderBy'] }
        : { orderBy?: RfpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RfpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rfp model
   */
  readonly fields: RfpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rfp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RfpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends Rfp$requesterArgs<ExtArgs> = {}>(args?: Subset<T, Rfp$requesterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    selectedProposal<T extends Rfp$selectedProposalArgs<ExtArgs> = {}>(args?: Subset<T, Rfp$selectedProposalArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    proposals<T extends Rfp$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, Rfp$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany"> | Null>
    rfpVendors<T extends Rfp$rfpVendorsArgs<ExtArgs> = {}>(args?: Subset<T, Rfp$rfpVendorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rfp model
   */ 
  interface RfpFieldRefs {
    readonly id: FieldRef<"Rfp", 'Int'>
    readonly title: FieldRef<"Rfp", 'String'>
    readonly descriptionRaw: FieldRef<"Rfp", 'String'>
    readonly budget: FieldRef<"Rfp", 'Float'>
    readonly currency: FieldRef<"Rfp", 'String'>
    readonly deliveryBy: FieldRef<"Rfp", 'DateTime'>
    readonly paymentTerms: FieldRef<"Rfp", 'String'>
    readonly requirements: FieldRef<"Rfp", 'Json'>
    readonly createdAt: FieldRef<"Rfp", 'DateTime'>
    readonly updatedAt: FieldRef<"Rfp", 'DateTime'>
    readonly requesterId: FieldRef<"Rfp", 'Int'>
    readonly selectedProposalId: FieldRef<"Rfp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rfp findUnique
   */
  export type RfpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * Filter, which Rfp to fetch.
     */
    where: RfpWhereUniqueInput
  }

  /**
   * Rfp findUniqueOrThrow
   */
  export type RfpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * Filter, which Rfp to fetch.
     */
    where: RfpWhereUniqueInput
  }

  /**
   * Rfp findFirst
   */
  export type RfpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * Filter, which Rfp to fetch.
     */
    where?: RfpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfps to fetch.
     */
    orderBy?: RfpOrderByWithRelationInput | RfpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rfps.
     */
    cursor?: RfpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rfps.
     */
    distinct?: RfpScalarFieldEnum | RfpScalarFieldEnum[]
  }

  /**
   * Rfp findFirstOrThrow
   */
  export type RfpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * Filter, which Rfp to fetch.
     */
    where?: RfpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfps to fetch.
     */
    orderBy?: RfpOrderByWithRelationInput | RfpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rfps.
     */
    cursor?: RfpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rfps.
     */
    distinct?: RfpScalarFieldEnum | RfpScalarFieldEnum[]
  }

  /**
   * Rfp findMany
   */
  export type RfpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * Filter, which Rfps to fetch.
     */
    where?: RfpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rfps to fetch.
     */
    orderBy?: RfpOrderByWithRelationInput | RfpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rfps.
     */
    cursor?: RfpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rfps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rfps.
     */
    skip?: number
    distinct?: RfpScalarFieldEnum | RfpScalarFieldEnum[]
  }

  /**
   * Rfp create
   */
  export type RfpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * The data needed to create a Rfp.
     */
    data: XOR<RfpCreateInput, RfpUncheckedCreateInput>
  }

  /**
   * Rfp createMany
   */
  export type RfpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rfps.
     */
    data: RfpCreateManyInput | RfpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rfp createManyAndReturn
   */
  export type RfpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rfps.
     */
    data: RfpCreateManyInput | RfpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rfp update
   */
  export type RfpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * The data needed to update a Rfp.
     */
    data: XOR<RfpUpdateInput, RfpUncheckedUpdateInput>
    /**
     * Choose, which Rfp to update.
     */
    where: RfpWhereUniqueInput
  }

  /**
   * Rfp updateMany
   */
  export type RfpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rfps.
     */
    data: XOR<RfpUpdateManyMutationInput, RfpUncheckedUpdateManyInput>
    /**
     * Filter which Rfps to update
     */
    where?: RfpWhereInput
  }

  /**
   * Rfp upsert
   */
  export type RfpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * The filter to search for the Rfp to update in case it exists.
     */
    where: RfpWhereUniqueInput
    /**
     * In case the Rfp found by the `where` argument doesn't exist, create a new Rfp with this data.
     */
    create: XOR<RfpCreateInput, RfpUncheckedCreateInput>
    /**
     * In case the Rfp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RfpUpdateInput, RfpUncheckedUpdateInput>
  }

  /**
   * Rfp delete
   */
  export type RfpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    /**
     * Filter which Rfp to delete.
     */
    where: RfpWhereUniqueInput
  }

  /**
   * Rfp deleteMany
   */
  export type RfpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rfps to delete
     */
    where?: RfpWhereInput
  }

  /**
   * Rfp.requester
   */
  export type Rfp$requesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Rfp.selectedProposal
   */
  export type Rfp$selectedProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
  }

  /**
   * Rfp.proposals
   */
  export type Rfp$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Rfp.rfpVendors
   */
  export type Rfp$rfpVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    where?: RfpVendorWhereInput
    orderBy?: RfpVendorOrderByWithRelationInput | RfpVendorOrderByWithRelationInput[]
    cursor?: RfpVendorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RfpVendorScalarFieldEnum | RfpVendorScalarFieldEnum[]
  }

  /**
   * Rfp without action
   */
  export type RfpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
  }


  /**
   * Model RfpVendor
   */

  export type AggregateRfpVendor = {
    _count: RfpVendorCountAggregateOutputType | null
    _avg: RfpVendorAvgAggregateOutputType | null
    _sum: RfpVendorSumAggregateOutputType | null
    _min: RfpVendorMinAggregateOutputType | null
    _max: RfpVendorMaxAggregateOutputType | null
  }

  export type RfpVendorAvgAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
  }

  export type RfpVendorSumAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
  }

  export type RfpVendorMinAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type RfpVendorMaxAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type RfpVendorCountAggregateOutputType = {
    id: number
    rfpId: number
    vendorId: number
    status: number
    createdAt: number
    _all: number
  }


  export type RfpVendorAvgAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
  }

  export type RfpVendorSumAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
  }

  export type RfpVendorMinAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    status?: true
    createdAt?: true
  }

  export type RfpVendorMaxAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    status?: true
    createdAt?: true
  }

  export type RfpVendorCountAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RfpVendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RfpVendor to aggregate.
     */
    where?: RfpVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfpVendors to fetch.
     */
    orderBy?: RfpVendorOrderByWithRelationInput | RfpVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RfpVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfpVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfpVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RfpVendors
    **/
    _count?: true | RfpVendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RfpVendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RfpVendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RfpVendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RfpVendorMaxAggregateInputType
  }

  export type GetRfpVendorAggregateType<T extends RfpVendorAggregateArgs> = {
        [P in keyof T & keyof AggregateRfpVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRfpVendor[P]>
      : GetScalarType<T[P], AggregateRfpVendor[P]>
  }




  export type RfpVendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RfpVendorWhereInput
    orderBy?: RfpVendorOrderByWithAggregationInput | RfpVendorOrderByWithAggregationInput[]
    by: RfpVendorScalarFieldEnum[] | RfpVendorScalarFieldEnum
    having?: RfpVendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RfpVendorCountAggregateInputType | true
    _avg?: RfpVendorAvgAggregateInputType
    _sum?: RfpVendorSumAggregateInputType
    _min?: RfpVendorMinAggregateInputType
    _max?: RfpVendorMaxAggregateInputType
  }

  export type RfpVendorGroupByOutputType = {
    id: number
    rfpId: number
    vendorId: number
    status: string
    createdAt: Date
    _count: RfpVendorCountAggregateOutputType | null
    _avg: RfpVendorAvgAggregateOutputType | null
    _sum: RfpVendorSumAggregateOutputType | null
    _min: RfpVendorMinAggregateOutputType | null
    _max: RfpVendorMaxAggregateOutputType | null
  }

  type GetRfpVendorGroupByPayload<T extends RfpVendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RfpVendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RfpVendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RfpVendorGroupByOutputType[P]>
            : GetScalarType<T[P], RfpVendorGroupByOutputType[P]>
        }
      >
    >


  export type RfpVendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfpId?: boolean
    vendorId?: boolean
    status?: boolean
    createdAt?: boolean
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rfpVendor"]>

  export type RfpVendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfpId?: boolean
    vendorId?: boolean
    status?: boolean
    createdAt?: boolean
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rfpVendor"]>

  export type RfpVendorSelectScalar = {
    id?: boolean
    rfpId?: boolean
    vendorId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RfpVendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type RfpVendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $RfpVendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RfpVendor"
    objects: {
      rfp: Prisma.$RfpPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rfpId: number
      vendorId: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["rfpVendor"]>
    composites: {}
  }

  type RfpVendorGetPayload<S extends boolean | null | undefined | RfpVendorDefaultArgs> = $Result.GetResult<Prisma.$RfpVendorPayload, S>

  type RfpVendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RfpVendorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RfpVendorCountAggregateInputType | true
    }

  export interface RfpVendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RfpVendor'], meta: { name: 'RfpVendor' } }
    /**
     * Find zero or one RfpVendor that matches the filter.
     * @param {RfpVendorFindUniqueArgs} args - Arguments to find a RfpVendor
     * @example
     * // Get one RfpVendor
     * const rfpVendor = await prisma.rfpVendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RfpVendorFindUniqueArgs>(args: SelectSubset<T, RfpVendorFindUniqueArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RfpVendor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RfpVendorFindUniqueOrThrowArgs} args - Arguments to find a RfpVendor
     * @example
     * // Get one RfpVendor
     * const rfpVendor = await prisma.rfpVendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RfpVendorFindUniqueOrThrowArgs>(args: SelectSubset<T, RfpVendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RfpVendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpVendorFindFirstArgs} args - Arguments to find a RfpVendor
     * @example
     * // Get one RfpVendor
     * const rfpVendor = await prisma.rfpVendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RfpVendorFindFirstArgs>(args?: SelectSubset<T, RfpVendorFindFirstArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RfpVendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpVendorFindFirstOrThrowArgs} args - Arguments to find a RfpVendor
     * @example
     * // Get one RfpVendor
     * const rfpVendor = await prisma.rfpVendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RfpVendorFindFirstOrThrowArgs>(args?: SelectSubset<T, RfpVendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RfpVendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpVendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RfpVendors
     * const rfpVendors = await prisma.rfpVendor.findMany()
     * 
     * // Get first 10 RfpVendors
     * const rfpVendors = await prisma.rfpVendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rfpVendorWithIdOnly = await prisma.rfpVendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RfpVendorFindManyArgs>(args?: SelectSubset<T, RfpVendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RfpVendor.
     * @param {RfpVendorCreateArgs} args - Arguments to create a RfpVendor.
     * @example
     * // Create one RfpVendor
     * const RfpVendor = await prisma.rfpVendor.create({
     *   data: {
     *     // ... data to create a RfpVendor
     *   }
     * })
     * 
     */
    create<T extends RfpVendorCreateArgs>(args: SelectSubset<T, RfpVendorCreateArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RfpVendors.
     * @param {RfpVendorCreateManyArgs} args - Arguments to create many RfpVendors.
     * @example
     * // Create many RfpVendors
     * const rfpVendor = await prisma.rfpVendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RfpVendorCreateManyArgs>(args?: SelectSubset<T, RfpVendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RfpVendors and returns the data saved in the database.
     * @param {RfpVendorCreateManyAndReturnArgs} args - Arguments to create many RfpVendors.
     * @example
     * // Create many RfpVendors
     * const rfpVendor = await prisma.rfpVendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RfpVendors and only return the `id`
     * const rfpVendorWithIdOnly = await prisma.rfpVendor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RfpVendorCreateManyAndReturnArgs>(args?: SelectSubset<T, RfpVendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RfpVendor.
     * @param {RfpVendorDeleteArgs} args - Arguments to delete one RfpVendor.
     * @example
     * // Delete one RfpVendor
     * const RfpVendor = await prisma.rfpVendor.delete({
     *   where: {
     *     // ... filter to delete one RfpVendor
     *   }
     * })
     * 
     */
    delete<T extends RfpVendorDeleteArgs>(args: SelectSubset<T, RfpVendorDeleteArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RfpVendor.
     * @param {RfpVendorUpdateArgs} args - Arguments to update one RfpVendor.
     * @example
     * // Update one RfpVendor
     * const rfpVendor = await prisma.rfpVendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RfpVendorUpdateArgs>(args: SelectSubset<T, RfpVendorUpdateArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RfpVendors.
     * @param {RfpVendorDeleteManyArgs} args - Arguments to filter RfpVendors to delete.
     * @example
     * // Delete a few RfpVendors
     * const { count } = await prisma.rfpVendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RfpVendorDeleteManyArgs>(args?: SelectSubset<T, RfpVendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RfpVendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpVendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RfpVendors
     * const rfpVendor = await prisma.rfpVendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RfpVendorUpdateManyArgs>(args: SelectSubset<T, RfpVendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RfpVendor.
     * @param {RfpVendorUpsertArgs} args - Arguments to update or create a RfpVendor.
     * @example
     * // Update or create a RfpVendor
     * const rfpVendor = await prisma.rfpVendor.upsert({
     *   create: {
     *     // ... data to create a RfpVendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RfpVendor we want to update
     *   }
     * })
     */
    upsert<T extends RfpVendorUpsertArgs>(args: SelectSubset<T, RfpVendorUpsertArgs<ExtArgs>>): Prisma__RfpVendorClient<$Result.GetResult<Prisma.$RfpVendorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RfpVendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpVendorCountArgs} args - Arguments to filter RfpVendors to count.
     * @example
     * // Count the number of RfpVendors
     * const count = await prisma.rfpVendor.count({
     *   where: {
     *     // ... the filter for the RfpVendors we want to count
     *   }
     * })
    **/
    count<T extends RfpVendorCountArgs>(
      args?: Subset<T, RfpVendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RfpVendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RfpVendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpVendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RfpVendorAggregateArgs>(args: Subset<T, RfpVendorAggregateArgs>): Prisma.PrismaPromise<GetRfpVendorAggregateType<T>>

    /**
     * Group by RfpVendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfpVendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RfpVendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RfpVendorGroupByArgs['orderBy'] }
        : { orderBy?: RfpVendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RfpVendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfpVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RfpVendor model
   */
  readonly fields: RfpVendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RfpVendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RfpVendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rfp<T extends RfpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RfpDefaultArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RfpVendor model
   */ 
  interface RfpVendorFieldRefs {
    readonly id: FieldRef<"RfpVendor", 'Int'>
    readonly rfpId: FieldRef<"RfpVendor", 'Int'>
    readonly vendorId: FieldRef<"RfpVendor", 'Int'>
    readonly status: FieldRef<"RfpVendor", 'String'>
    readonly createdAt: FieldRef<"RfpVendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RfpVendor findUnique
   */
  export type RfpVendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * Filter, which RfpVendor to fetch.
     */
    where: RfpVendorWhereUniqueInput
  }

  /**
   * RfpVendor findUniqueOrThrow
   */
  export type RfpVendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * Filter, which RfpVendor to fetch.
     */
    where: RfpVendorWhereUniqueInput
  }

  /**
   * RfpVendor findFirst
   */
  export type RfpVendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * Filter, which RfpVendor to fetch.
     */
    where?: RfpVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfpVendors to fetch.
     */
    orderBy?: RfpVendorOrderByWithRelationInput | RfpVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RfpVendors.
     */
    cursor?: RfpVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfpVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfpVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RfpVendors.
     */
    distinct?: RfpVendorScalarFieldEnum | RfpVendorScalarFieldEnum[]
  }

  /**
   * RfpVendor findFirstOrThrow
   */
  export type RfpVendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * Filter, which RfpVendor to fetch.
     */
    where?: RfpVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfpVendors to fetch.
     */
    orderBy?: RfpVendorOrderByWithRelationInput | RfpVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RfpVendors.
     */
    cursor?: RfpVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfpVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfpVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RfpVendors.
     */
    distinct?: RfpVendorScalarFieldEnum | RfpVendorScalarFieldEnum[]
  }

  /**
   * RfpVendor findMany
   */
  export type RfpVendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * Filter, which RfpVendors to fetch.
     */
    where?: RfpVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RfpVendors to fetch.
     */
    orderBy?: RfpVendorOrderByWithRelationInput | RfpVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RfpVendors.
     */
    cursor?: RfpVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RfpVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RfpVendors.
     */
    skip?: number
    distinct?: RfpVendorScalarFieldEnum | RfpVendorScalarFieldEnum[]
  }

  /**
   * RfpVendor create
   */
  export type RfpVendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * The data needed to create a RfpVendor.
     */
    data: XOR<RfpVendorCreateInput, RfpVendorUncheckedCreateInput>
  }

  /**
   * RfpVendor createMany
   */
  export type RfpVendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RfpVendors.
     */
    data: RfpVendorCreateManyInput | RfpVendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RfpVendor createManyAndReturn
   */
  export type RfpVendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RfpVendors.
     */
    data: RfpVendorCreateManyInput | RfpVendorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RfpVendor update
   */
  export type RfpVendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * The data needed to update a RfpVendor.
     */
    data: XOR<RfpVendorUpdateInput, RfpVendorUncheckedUpdateInput>
    /**
     * Choose, which RfpVendor to update.
     */
    where: RfpVendorWhereUniqueInput
  }

  /**
   * RfpVendor updateMany
   */
  export type RfpVendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RfpVendors.
     */
    data: XOR<RfpVendorUpdateManyMutationInput, RfpVendorUncheckedUpdateManyInput>
    /**
     * Filter which RfpVendors to update
     */
    where?: RfpVendorWhereInput
  }

  /**
   * RfpVendor upsert
   */
  export type RfpVendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * The filter to search for the RfpVendor to update in case it exists.
     */
    where: RfpVendorWhereUniqueInput
    /**
     * In case the RfpVendor found by the `where` argument doesn't exist, create a new RfpVendor with this data.
     */
    create: XOR<RfpVendorCreateInput, RfpVendorUncheckedCreateInput>
    /**
     * In case the RfpVendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RfpVendorUpdateInput, RfpVendorUncheckedUpdateInput>
  }

  /**
   * RfpVendor delete
   */
  export type RfpVendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
    /**
     * Filter which RfpVendor to delete.
     */
    where: RfpVendorWhereUniqueInput
  }

  /**
   * RfpVendor deleteMany
   */
  export type RfpVendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RfpVendors to delete
     */
    where?: RfpVendorWhereInput
  }

  /**
   * RfpVendor without action
   */
  export type RfpVendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RfpVendor
     */
    select?: RfpVendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpVendorInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
    totalPrice: number | null
    deliveryDays: number | null
    warrantyMonths: number | null
  }

  export type ProposalSumAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
    totalPrice: number | null
    deliveryDays: number | null
    warrantyMonths: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
    emailMessageId: string | null
    parsedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    totalPrice: number | null
    currency: string | null
    deliveryDays: number | null
    warrantyMonths: number | null
    paymentTermsText: string | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: number | null
    rfpId: number | null
    vendorId: number | null
    emailMessageId: string | null
    parsedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    totalPrice: number | null
    currency: string | null
    deliveryDays: number | null
    warrantyMonths: number | null
    paymentTermsText: string | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    rfpId: number
    vendorId: number
    emailMessageId: number
    parsedAt: number
    createdAt: number
    updatedAt: number
    totalPrice: number
    currency: number
    deliveryDays: number
    warrantyMonths: number
    paymentTermsText: number
    lineItems: number
    rawExtracted: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    totalPrice?: true
    deliveryDays?: true
    warrantyMonths?: true
  }

  export type ProposalSumAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    totalPrice?: true
    deliveryDays?: true
    warrantyMonths?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    emailMessageId?: true
    parsedAt?: true
    createdAt?: true
    updatedAt?: true
    totalPrice?: true
    currency?: true
    deliveryDays?: true
    warrantyMonths?: true
    paymentTermsText?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    emailMessageId?: true
    parsedAt?: true
    createdAt?: true
    updatedAt?: true
    totalPrice?: true
    currency?: true
    deliveryDays?: true
    warrantyMonths?: true
    paymentTermsText?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    rfpId?: true
    vendorId?: true
    emailMessageId?: true
    parsedAt?: true
    createdAt?: true
    updatedAt?: true
    totalPrice?: true
    currency?: true
    deliveryDays?: true
    warrantyMonths?: true
    paymentTermsText?: true
    lineItems?: true
    rawExtracted?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: number
    rfpId: number
    vendorId: number
    emailMessageId: string | null
    parsedAt: Date | null
    createdAt: Date
    updatedAt: Date
    totalPrice: number | null
    currency: string | null
    deliveryDays: number | null
    warrantyMonths: number | null
    paymentTermsText: string | null
    lineItems: JsonValue | null
    rawExtracted: JsonValue | null
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfpId?: boolean
    vendorId?: boolean
    emailMessageId?: boolean
    parsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalPrice?: boolean
    currency?: boolean
    deliveryDays?: boolean
    warrantyMonths?: boolean
    paymentTermsText?: boolean
    lineItems?: boolean
    rawExtracted?: boolean
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    score?: boolean | Proposal$scoreArgs<ExtArgs>
    selectedOnRfp?: boolean | Proposal$selectedOnRfpArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfpId?: boolean
    vendorId?: boolean
    emailMessageId?: boolean
    parsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalPrice?: boolean
    currency?: boolean
    deliveryDays?: boolean
    warrantyMonths?: boolean
    paymentTermsText?: boolean
    lineItems?: boolean
    rawExtracted?: boolean
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    rfpId?: boolean
    vendorId?: boolean
    emailMessageId?: boolean
    parsedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalPrice?: boolean
    currency?: boolean
    deliveryDays?: boolean
    warrantyMonths?: boolean
    paymentTermsText?: boolean
    lineItems?: boolean
    rawExtracted?: boolean
  }

  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    score?: boolean | Proposal$scoreArgs<ExtArgs>
    selectedOnRfp?: boolean | Proposal$selectedOnRfpArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rfp?: boolean | RfpDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      rfp: Prisma.$RfpPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
      score: Prisma.$ProposalScorePayload<ExtArgs> | null
      selectedOnRfp: Prisma.$RfpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rfpId: number
      vendorId: number
      emailMessageId: string | null
      parsedAt: Date | null
      createdAt: Date
      updatedAt: Date
      totalPrice: number | null
      currency: string | null
      deliveryDays: number | null
      warrantyMonths: number | null
      paymentTermsText: string | null
      lineItems: Prisma.JsonValue | null
      rawExtracted: Prisma.JsonValue | null
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rfp<T extends RfpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RfpDefaultArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    score<T extends Proposal$scoreArgs<ExtArgs> = {}>(args?: Subset<T, Proposal$scoreArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    selectedOnRfp<T extends Proposal$selectedOnRfpArgs<ExtArgs> = {}>(args?: Subset<T, Proposal$selectedOnRfpArgs<ExtArgs>>): Prisma__RfpClient<$Result.GetResult<Prisma.$RfpPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposal model
   */ 
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'Int'>
    readonly rfpId: FieldRef<"Proposal", 'Int'>
    readonly vendorId: FieldRef<"Proposal", 'Int'>
    readonly emailMessageId: FieldRef<"Proposal", 'String'>
    readonly parsedAt: FieldRef<"Proposal", 'DateTime'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
    readonly updatedAt: FieldRef<"Proposal", 'DateTime'>
    readonly totalPrice: FieldRef<"Proposal", 'Float'>
    readonly currency: FieldRef<"Proposal", 'String'>
    readonly deliveryDays: FieldRef<"Proposal", 'Int'>
    readonly warrantyMonths: FieldRef<"Proposal", 'Int'>
    readonly paymentTermsText: FieldRef<"Proposal", 'String'>
    readonly lineItems: FieldRef<"Proposal", 'Json'>
    readonly rawExtracted: FieldRef<"Proposal", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
  }

  /**
   * Proposal.score
   */
  export type Proposal$scoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    where?: ProposalScoreWhereInput
  }

  /**
   * Proposal.selectedOnRfp
   */
  export type Proposal$selectedOnRfpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rfp
     */
    select?: RfpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RfpInclude<ExtArgs> | null
    where?: RfpWhereInput
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model ProposalScore
   */

  export type AggregateProposalScore = {
    _count: ProposalScoreCountAggregateOutputType | null
    _avg: ProposalScoreAvgAggregateOutputType | null
    _sum: ProposalScoreSumAggregateOutputType | null
    _min: ProposalScoreMinAggregateOutputType | null
    _max: ProposalScoreMaxAggregateOutputType | null
  }

  export type ProposalScoreAvgAggregateOutputType = {
    id: number | null
    proposalId: number | null
    priceScore: number | null
    deliveryScore: number | null
    warrantyScore: number | null
    overallScore: number | null
  }

  export type ProposalScoreSumAggregateOutputType = {
    id: number | null
    proposalId: number | null
    priceScore: number | null
    deliveryScore: number | null
    warrantyScore: number | null
    overallScore: number | null
  }

  export type ProposalScoreMinAggregateOutputType = {
    id: number | null
    proposalId: number | null
    priceScore: number | null
    deliveryScore: number | null
    warrantyScore: number | null
    overallScore: number | null
    explanation: string | null
  }

  export type ProposalScoreMaxAggregateOutputType = {
    id: number | null
    proposalId: number | null
    priceScore: number | null
    deliveryScore: number | null
    warrantyScore: number | null
    overallScore: number | null
    explanation: string | null
  }

  export type ProposalScoreCountAggregateOutputType = {
    id: number
    proposalId: number
    priceScore: number
    deliveryScore: number
    warrantyScore: number
    overallScore: number
    explanation: number
    _all: number
  }


  export type ProposalScoreAvgAggregateInputType = {
    id?: true
    proposalId?: true
    priceScore?: true
    deliveryScore?: true
    warrantyScore?: true
    overallScore?: true
  }

  export type ProposalScoreSumAggregateInputType = {
    id?: true
    proposalId?: true
    priceScore?: true
    deliveryScore?: true
    warrantyScore?: true
    overallScore?: true
  }

  export type ProposalScoreMinAggregateInputType = {
    id?: true
    proposalId?: true
    priceScore?: true
    deliveryScore?: true
    warrantyScore?: true
    overallScore?: true
    explanation?: true
  }

  export type ProposalScoreMaxAggregateInputType = {
    id?: true
    proposalId?: true
    priceScore?: true
    deliveryScore?: true
    warrantyScore?: true
    overallScore?: true
    explanation?: true
  }

  export type ProposalScoreCountAggregateInputType = {
    id?: true
    proposalId?: true
    priceScore?: true
    deliveryScore?: true
    warrantyScore?: true
    overallScore?: true
    explanation?: true
    _all?: true
  }

  export type ProposalScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalScore to aggregate.
     */
    where?: ProposalScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalScores to fetch.
     */
    orderBy?: ProposalScoreOrderByWithRelationInput | ProposalScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProposalScores
    **/
    _count?: true | ProposalScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalScoreMaxAggregateInputType
  }

  export type GetProposalScoreAggregateType<T extends ProposalScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateProposalScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposalScore[P]>
      : GetScalarType<T[P], AggregateProposalScore[P]>
  }




  export type ProposalScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalScoreWhereInput
    orderBy?: ProposalScoreOrderByWithAggregationInput | ProposalScoreOrderByWithAggregationInput[]
    by: ProposalScoreScalarFieldEnum[] | ProposalScoreScalarFieldEnum
    having?: ProposalScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalScoreCountAggregateInputType | true
    _avg?: ProposalScoreAvgAggregateInputType
    _sum?: ProposalScoreSumAggregateInputType
    _min?: ProposalScoreMinAggregateInputType
    _max?: ProposalScoreMaxAggregateInputType
  }

  export type ProposalScoreGroupByOutputType = {
    id: number
    proposalId: number
    priceScore: number | null
    deliveryScore: number | null
    warrantyScore: number | null
    overallScore: number | null
    explanation: string | null
    _count: ProposalScoreCountAggregateOutputType | null
    _avg: ProposalScoreAvgAggregateOutputType | null
    _sum: ProposalScoreSumAggregateOutputType | null
    _min: ProposalScoreMinAggregateOutputType | null
    _max: ProposalScoreMaxAggregateOutputType | null
  }

  type GetProposalScoreGroupByPayload<T extends ProposalScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalScoreGroupByOutputType[P]>
        }
      >
    >


  export type ProposalScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    priceScore?: boolean
    deliveryScore?: boolean
    warrantyScore?: boolean
    overallScore?: boolean
    explanation?: boolean
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalScore"]>

  export type ProposalScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    priceScore?: boolean
    deliveryScore?: boolean
    warrantyScore?: boolean
    overallScore?: boolean
    explanation?: boolean
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalScore"]>

  export type ProposalScoreSelectScalar = {
    id?: boolean
    proposalId?: boolean
    priceScore?: boolean
    deliveryScore?: boolean
    warrantyScore?: boolean
    overallScore?: boolean
    explanation?: boolean
  }

  export type ProposalScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
  }
  export type ProposalScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
  }

  export type $ProposalScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProposalScore"
    objects: {
      proposal: Prisma.$ProposalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      proposalId: number
      priceScore: number | null
      deliveryScore: number | null
      warrantyScore: number | null
      overallScore: number | null
      explanation: string | null
    }, ExtArgs["result"]["proposalScore"]>
    composites: {}
  }

  type ProposalScoreGetPayload<S extends boolean | null | undefined | ProposalScoreDefaultArgs> = $Result.GetResult<Prisma.$ProposalScorePayload, S>

  type ProposalScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProposalScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProposalScoreCountAggregateInputType | true
    }

  export interface ProposalScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProposalScore'], meta: { name: 'ProposalScore' } }
    /**
     * Find zero or one ProposalScore that matches the filter.
     * @param {ProposalScoreFindUniqueArgs} args - Arguments to find a ProposalScore
     * @example
     * // Get one ProposalScore
     * const proposalScore = await prisma.proposalScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalScoreFindUniqueArgs>(args: SelectSubset<T, ProposalScoreFindUniqueArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProposalScore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProposalScoreFindUniqueOrThrowArgs} args - Arguments to find a ProposalScore
     * @example
     * // Get one ProposalScore
     * const proposalScore = await prisma.proposalScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProposalScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalScoreFindFirstArgs} args - Arguments to find a ProposalScore
     * @example
     * // Get one ProposalScore
     * const proposalScore = await prisma.proposalScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalScoreFindFirstArgs>(args?: SelectSubset<T, ProposalScoreFindFirstArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProposalScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalScoreFindFirstOrThrowArgs} args - Arguments to find a ProposalScore
     * @example
     * // Get one ProposalScore
     * const proposalScore = await prisma.proposalScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProposalScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProposalScores
     * const proposalScores = await prisma.proposalScore.findMany()
     * 
     * // Get first 10 ProposalScores
     * const proposalScores = await prisma.proposalScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalScoreWithIdOnly = await prisma.proposalScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalScoreFindManyArgs>(args?: SelectSubset<T, ProposalScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProposalScore.
     * @param {ProposalScoreCreateArgs} args - Arguments to create a ProposalScore.
     * @example
     * // Create one ProposalScore
     * const ProposalScore = await prisma.proposalScore.create({
     *   data: {
     *     // ... data to create a ProposalScore
     *   }
     * })
     * 
     */
    create<T extends ProposalScoreCreateArgs>(args: SelectSubset<T, ProposalScoreCreateArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProposalScores.
     * @param {ProposalScoreCreateManyArgs} args - Arguments to create many ProposalScores.
     * @example
     * // Create many ProposalScores
     * const proposalScore = await prisma.proposalScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalScoreCreateManyArgs>(args?: SelectSubset<T, ProposalScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProposalScores and returns the data saved in the database.
     * @param {ProposalScoreCreateManyAndReturnArgs} args - Arguments to create many ProposalScores.
     * @example
     * // Create many ProposalScores
     * const proposalScore = await prisma.proposalScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProposalScores and only return the `id`
     * const proposalScoreWithIdOnly = await prisma.proposalScore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProposalScore.
     * @param {ProposalScoreDeleteArgs} args - Arguments to delete one ProposalScore.
     * @example
     * // Delete one ProposalScore
     * const ProposalScore = await prisma.proposalScore.delete({
     *   where: {
     *     // ... filter to delete one ProposalScore
     *   }
     * })
     * 
     */
    delete<T extends ProposalScoreDeleteArgs>(args: SelectSubset<T, ProposalScoreDeleteArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProposalScore.
     * @param {ProposalScoreUpdateArgs} args - Arguments to update one ProposalScore.
     * @example
     * // Update one ProposalScore
     * const proposalScore = await prisma.proposalScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalScoreUpdateArgs>(args: SelectSubset<T, ProposalScoreUpdateArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProposalScores.
     * @param {ProposalScoreDeleteManyArgs} args - Arguments to filter ProposalScores to delete.
     * @example
     * // Delete a few ProposalScores
     * const { count } = await prisma.proposalScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalScoreDeleteManyArgs>(args?: SelectSubset<T, ProposalScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProposalScores
     * const proposalScore = await prisma.proposalScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalScoreUpdateManyArgs>(args: SelectSubset<T, ProposalScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProposalScore.
     * @param {ProposalScoreUpsertArgs} args - Arguments to update or create a ProposalScore.
     * @example
     * // Update or create a ProposalScore
     * const proposalScore = await prisma.proposalScore.upsert({
     *   create: {
     *     // ... data to create a ProposalScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProposalScore we want to update
     *   }
     * })
     */
    upsert<T extends ProposalScoreUpsertArgs>(args: SelectSubset<T, ProposalScoreUpsertArgs<ExtArgs>>): Prisma__ProposalScoreClient<$Result.GetResult<Prisma.$ProposalScorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProposalScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalScoreCountArgs} args - Arguments to filter ProposalScores to count.
     * @example
     * // Count the number of ProposalScores
     * const count = await prisma.proposalScore.count({
     *   where: {
     *     // ... the filter for the ProposalScores we want to count
     *   }
     * })
    **/
    count<T extends ProposalScoreCountArgs>(
      args?: Subset<T, ProposalScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProposalScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalScoreAggregateArgs>(args: Subset<T, ProposalScoreAggregateArgs>): Prisma.PrismaPromise<GetProposalScoreAggregateType<T>>

    /**
     * Group by ProposalScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalScoreGroupByArgs['orderBy'] }
        : { orderBy?: ProposalScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProposalScore model
   */
  readonly fields: ProposalScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProposalScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proposal<T extends ProposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProposalDefaultArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProposalScore model
   */ 
  interface ProposalScoreFieldRefs {
    readonly id: FieldRef<"ProposalScore", 'Int'>
    readonly proposalId: FieldRef<"ProposalScore", 'Int'>
    readonly priceScore: FieldRef<"ProposalScore", 'Float'>
    readonly deliveryScore: FieldRef<"ProposalScore", 'Float'>
    readonly warrantyScore: FieldRef<"ProposalScore", 'Float'>
    readonly overallScore: FieldRef<"ProposalScore", 'Float'>
    readonly explanation: FieldRef<"ProposalScore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProposalScore findUnique
   */
  export type ProposalScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * Filter, which ProposalScore to fetch.
     */
    where: ProposalScoreWhereUniqueInput
  }

  /**
   * ProposalScore findUniqueOrThrow
   */
  export type ProposalScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * Filter, which ProposalScore to fetch.
     */
    where: ProposalScoreWhereUniqueInput
  }

  /**
   * ProposalScore findFirst
   */
  export type ProposalScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * Filter, which ProposalScore to fetch.
     */
    where?: ProposalScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalScores to fetch.
     */
    orderBy?: ProposalScoreOrderByWithRelationInput | ProposalScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalScores.
     */
    cursor?: ProposalScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalScores.
     */
    distinct?: ProposalScoreScalarFieldEnum | ProposalScoreScalarFieldEnum[]
  }

  /**
   * ProposalScore findFirstOrThrow
   */
  export type ProposalScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * Filter, which ProposalScore to fetch.
     */
    where?: ProposalScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalScores to fetch.
     */
    orderBy?: ProposalScoreOrderByWithRelationInput | ProposalScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalScores.
     */
    cursor?: ProposalScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalScores.
     */
    distinct?: ProposalScoreScalarFieldEnum | ProposalScoreScalarFieldEnum[]
  }

  /**
   * ProposalScore findMany
   */
  export type ProposalScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * Filter, which ProposalScores to fetch.
     */
    where?: ProposalScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalScores to fetch.
     */
    orderBy?: ProposalScoreOrderByWithRelationInput | ProposalScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProposalScores.
     */
    cursor?: ProposalScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalScores.
     */
    skip?: number
    distinct?: ProposalScoreScalarFieldEnum | ProposalScoreScalarFieldEnum[]
  }

  /**
   * ProposalScore create
   */
  export type ProposalScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a ProposalScore.
     */
    data: XOR<ProposalScoreCreateInput, ProposalScoreUncheckedCreateInput>
  }

  /**
   * ProposalScore createMany
   */
  export type ProposalScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProposalScores.
     */
    data: ProposalScoreCreateManyInput | ProposalScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProposalScore createManyAndReturn
   */
  export type ProposalScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProposalScores.
     */
    data: ProposalScoreCreateManyInput | ProposalScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProposalScore update
   */
  export type ProposalScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a ProposalScore.
     */
    data: XOR<ProposalScoreUpdateInput, ProposalScoreUncheckedUpdateInput>
    /**
     * Choose, which ProposalScore to update.
     */
    where: ProposalScoreWhereUniqueInput
  }

  /**
   * ProposalScore updateMany
   */
  export type ProposalScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProposalScores.
     */
    data: XOR<ProposalScoreUpdateManyMutationInput, ProposalScoreUncheckedUpdateManyInput>
    /**
     * Filter which ProposalScores to update
     */
    where?: ProposalScoreWhereInput
  }

  /**
   * ProposalScore upsert
   */
  export type ProposalScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the ProposalScore to update in case it exists.
     */
    where: ProposalScoreWhereUniqueInput
    /**
     * In case the ProposalScore found by the `where` argument doesn't exist, create a new ProposalScore with this data.
     */
    create: XOR<ProposalScoreCreateInput, ProposalScoreUncheckedCreateInput>
    /**
     * In case the ProposalScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalScoreUpdateInput, ProposalScoreUncheckedUpdateInput>
  }

  /**
   * ProposalScore delete
   */
  export type ProposalScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
    /**
     * Filter which ProposalScore to delete.
     */
    where: ProposalScoreWhereUniqueInput
  }

  /**
   * ProposalScore deleteMany
   */
  export type ProposalScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalScores to delete
     */
    where?: ProposalScoreWhereInput
  }

  /**
   * ProposalScore without action
   */
  export type ProposalScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalScore
     */
    select?: ProposalScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalScoreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    companyName: 'companyName',
    phone: 'phone',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    contactPerson: 'contactPerson',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const RfpScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descriptionRaw: 'descriptionRaw',
    budget: 'budget',
    currency: 'currency',
    deliveryBy: 'deliveryBy',
    paymentTerms: 'paymentTerms',
    requirements: 'requirements',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requesterId: 'requesterId',
    selectedProposalId: 'selectedProposalId'
  };

  export type RfpScalarFieldEnum = (typeof RfpScalarFieldEnum)[keyof typeof RfpScalarFieldEnum]


  export const RfpVendorScalarFieldEnum: {
    id: 'id',
    rfpId: 'rfpId',
    vendorId: 'vendorId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RfpVendorScalarFieldEnum = (typeof RfpVendorScalarFieldEnum)[keyof typeof RfpVendorScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    rfpId: 'rfpId',
    vendorId: 'vendorId',
    emailMessageId: 'emailMessageId',
    parsedAt: 'parsedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    totalPrice: 'totalPrice',
    currency: 'currency',
    deliveryDays: 'deliveryDays',
    warrantyMonths: 'warrantyMonths',
    paymentTermsText: 'paymentTermsText',
    lineItems: 'lineItems',
    rawExtracted: 'rawExtracted'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const ProposalScoreScalarFieldEnum: {
    id: 'id',
    proposalId: 'proposalId',
    priceScore: 'priceScore',
    deliveryScore: 'deliveryScore',
    warrantyScore: 'warrantyScore',
    overallScore: 'overallScore',
    explanation: 'explanation'
  };

  export type ProposalScoreScalarFieldEnum = (typeof ProposalScoreScalarFieldEnum)[keyof typeof ProposalScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdRfps?: RfpListRelationFilter
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdRfps?: RfpOrderByRelationAggregateInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdRfps?: RfpListRelationFilter
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: IntFilter<"Vendor"> | number
    name?: StringFilter<"Vendor"> | string
    email?: StringFilter<"Vendor"> | string
    contactPerson?: StringNullableFilter<"Vendor"> | string | null
    notes?: StringNullableFilter<"Vendor"> | string | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    userId?: IntNullableFilter<"Vendor"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    proposals?: ProposalListRelationFilter
    rfpVendors?: RfpVendorListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPerson?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    proposals?: ProposalOrderByRelationAggregateInput
    rfpVendors?: RfpVendorOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    userId?: number
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringFilter<"Vendor"> | string
    contactPerson?: StringNullableFilter<"Vendor"> | string | null
    notes?: StringNullableFilter<"Vendor"> | string | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    proposals?: ProposalListRelationFilter
    rfpVendors?: RfpVendorListRelationFilter
  }, "id" | "email" | "userId">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPerson?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendor"> | number
    name?: StringWithAggregatesFilter<"Vendor"> | string
    email?: StringWithAggregatesFilter<"Vendor"> | string
    contactPerson?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Vendor"> | number | null
  }

  export type RfpWhereInput = {
    AND?: RfpWhereInput | RfpWhereInput[]
    OR?: RfpWhereInput[]
    NOT?: RfpWhereInput | RfpWhereInput[]
    id?: IntFilter<"Rfp"> | number
    title?: StringFilter<"Rfp"> | string
    descriptionRaw?: StringFilter<"Rfp"> | string
    budget?: FloatNullableFilter<"Rfp"> | number | null
    currency?: StringNullableFilter<"Rfp"> | string | null
    deliveryBy?: DateTimeNullableFilter<"Rfp"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Rfp"> | string | null
    requirements?: JsonNullableFilter<"Rfp">
    createdAt?: DateTimeFilter<"Rfp"> | Date | string
    updatedAt?: DateTimeFilter<"Rfp"> | Date | string
    requesterId?: IntNullableFilter<"Rfp"> | number | null
    selectedProposalId?: IntNullableFilter<"Rfp"> | number | null
    requester?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    selectedProposal?: XOR<ProposalNullableScalarRelationFilter, ProposalWhereInput> | null
    proposals?: ProposalListRelationFilter
    rfpVendors?: RfpVendorListRelationFilter
  }

  export type RfpOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionRaw?: SortOrder
    budget?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    deliveryBy?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrderInput | SortOrder
    selectedProposalId?: SortOrderInput | SortOrder
    requester?: UserOrderByWithRelationInput
    selectedProposal?: ProposalOrderByWithRelationInput
    proposals?: ProposalOrderByRelationAggregateInput
    rfpVendors?: RfpVendorOrderByRelationAggregateInput
  }

  export type RfpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    selectedProposalId?: number
    AND?: RfpWhereInput | RfpWhereInput[]
    OR?: RfpWhereInput[]
    NOT?: RfpWhereInput | RfpWhereInput[]
    title?: StringFilter<"Rfp"> | string
    descriptionRaw?: StringFilter<"Rfp"> | string
    budget?: FloatNullableFilter<"Rfp"> | number | null
    currency?: StringNullableFilter<"Rfp"> | string | null
    deliveryBy?: DateTimeNullableFilter<"Rfp"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Rfp"> | string | null
    requirements?: JsonNullableFilter<"Rfp">
    createdAt?: DateTimeFilter<"Rfp"> | Date | string
    updatedAt?: DateTimeFilter<"Rfp"> | Date | string
    requesterId?: IntNullableFilter<"Rfp"> | number | null
    requester?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    selectedProposal?: XOR<ProposalNullableScalarRelationFilter, ProposalWhereInput> | null
    proposals?: ProposalListRelationFilter
    rfpVendors?: RfpVendorListRelationFilter
  }, "id" | "selectedProposalId">

  export type RfpOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionRaw?: SortOrder
    budget?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    deliveryBy?: SortOrderInput | SortOrder
    paymentTerms?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrderInput | SortOrder
    selectedProposalId?: SortOrderInput | SortOrder
    _count?: RfpCountOrderByAggregateInput
    _avg?: RfpAvgOrderByAggregateInput
    _max?: RfpMaxOrderByAggregateInput
    _min?: RfpMinOrderByAggregateInput
    _sum?: RfpSumOrderByAggregateInput
  }

  export type RfpScalarWhereWithAggregatesInput = {
    AND?: RfpScalarWhereWithAggregatesInput | RfpScalarWhereWithAggregatesInput[]
    OR?: RfpScalarWhereWithAggregatesInput[]
    NOT?: RfpScalarWhereWithAggregatesInput | RfpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rfp"> | number
    title?: StringWithAggregatesFilter<"Rfp"> | string
    descriptionRaw?: StringWithAggregatesFilter<"Rfp"> | string
    budget?: FloatNullableWithAggregatesFilter<"Rfp"> | number | null
    currency?: StringNullableWithAggregatesFilter<"Rfp"> | string | null
    deliveryBy?: DateTimeNullableWithAggregatesFilter<"Rfp"> | Date | string | null
    paymentTerms?: StringNullableWithAggregatesFilter<"Rfp"> | string | null
    requirements?: JsonNullableWithAggregatesFilter<"Rfp">
    createdAt?: DateTimeWithAggregatesFilter<"Rfp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rfp"> | Date | string
    requesterId?: IntNullableWithAggregatesFilter<"Rfp"> | number | null
    selectedProposalId?: IntNullableWithAggregatesFilter<"Rfp"> | number | null
  }

  export type RfpVendorWhereInput = {
    AND?: RfpVendorWhereInput | RfpVendorWhereInput[]
    OR?: RfpVendorWhereInput[]
    NOT?: RfpVendorWhereInput | RfpVendorWhereInput[]
    id?: IntFilter<"RfpVendor"> | number
    rfpId?: IntFilter<"RfpVendor"> | number
    vendorId?: IntFilter<"RfpVendor"> | number
    status?: StringFilter<"RfpVendor"> | string
    createdAt?: DateTimeFilter<"RfpVendor"> | Date | string
    rfp?: XOR<RfpScalarRelationFilter, RfpWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type RfpVendorOrderByWithRelationInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    rfp?: RfpOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type RfpVendorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rfpId_vendorId?: RfpVendorRfpIdVendorIdCompoundUniqueInput
    AND?: RfpVendorWhereInput | RfpVendorWhereInput[]
    OR?: RfpVendorWhereInput[]
    NOT?: RfpVendorWhereInput | RfpVendorWhereInput[]
    rfpId?: IntFilter<"RfpVendor"> | number
    vendorId?: IntFilter<"RfpVendor"> | number
    status?: StringFilter<"RfpVendor"> | string
    createdAt?: DateTimeFilter<"RfpVendor"> | Date | string
    rfp?: XOR<RfpScalarRelationFilter, RfpWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id" | "rfpId_vendorId">

  export type RfpVendorOrderByWithAggregationInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RfpVendorCountOrderByAggregateInput
    _avg?: RfpVendorAvgOrderByAggregateInput
    _max?: RfpVendorMaxOrderByAggregateInput
    _min?: RfpVendorMinOrderByAggregateInput
    _sum?: RfpVendorSumOrderByAggregateInput
  }

  export type RfpVendorScalarWhereWithAggregatesInput = {
    AND?: RfpVendorScalarWhereWithAggregatesInput | RfpVendorScalarWhereWithAggregatesInput[]
    OR?: RfpVendorScalarWhereWithAggregatesInput[]
    NOT?: RfpVendorScalarWhereWithAggregatesInput | RfpVendorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RfpVendor"> | number
    rfpId?: IntWithAggregatesFilter<"RfpVendor"> | number
    vendorId?: IntWithAggregatesFilter<"RfpVendor"> | number
    status?: StringWithAggregatesFilter<"RfpVendor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RfpVendor"> | Date | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: IntFilter<"Proposal"> | number
    rfpId?: IntFilter<"Proposal"> | number
    vendorId?: IntFilter<"Proposal"> | number
    emailMessageId?: StringNullableFilter<"Proposal"> | string | null
    parsedAt?: DateTimeNullableFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    totalPrice?: FloatNullableFilter<"Proposal"> | number | null
    currency?: StringNullableFilter<"Proposal"> | string | null
    deliveryDays?: IntNullableFilter<"Proposal"> | number | null
    warrantyMonths?: IntNullableFilter<"Proposal"> | number | null
    paymentTermsText?: StringNullableFilter<"Proposal"> | string | null
    lineItems?: JsonNullableFilter<"Proposal">
    rawExtracted?: JsonNullableFilter<"Proposal">
    rfp?: XOR<RfpScalarRelationFilter, RfpWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    score?: XOR<ProposalScoreNullableScalarRelationFilter, ProposalScoreWhereInput> | null
    selectedOnRfp?: XOR<RfpNullableScalarRelationFilter, RfpWhereInput> | null
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    emailMessageId?: SortOrderInput | SortOrder
    parsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPrice?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    deliveryDays?: SortOrderInput | SortOrder
    warrantyMonths?: SortOrderInput | SortOrder
    paymentTermsText?: SortOrderInput | SortOrder
    lineItems?: SortOrderInput | SortOrder
    rawExtracted?: SortOrderInput | SortOrder
    rfp?: RfpOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    score?: ProposalScoreOrderByWithRelationInput
    selectedOnRfp?: RfpOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    rfpId?: IntFilter<"Proposal"> | number
    vendorId?: IntFilter<"Proposal"> | number
    emailMessageId?: StringNullableFilter<"Proposal"> | string | null
    parsedAt?: DateTimeNullableFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    totalPrice?: FloatNullableFilter<"Proposal"> | number | null
    currency?: StringNullableFilter<"Proposal"> | string | null
    deliveryDays?: IntNullableFilter<"Proposal"> | number | null
    warrantyMonths?: IntNullableFilter<"Proposal"> | number | null
    paymentTermsText?: StringNullableFilter<"Proposal"> | string | null
    lineItems?: JsonNullableFilter<"Proposal">
    rawExtracted?: JsonNullableFilter<"Proposal">
    rfp?: XOR<RfpScalarRelationFilter, RfpWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    score?: XOR<ProposalScoreNullableScalarRelationFilter, ProposalScoreWhereInput> | null
    selectedOnRfp?: XOR<RfpNullableScalarRelationFilter, RfpWhereInput> | null
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    emailMessageId?: SortOrderInput | SortOrder
    parsedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPrice?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    deliveryDays?: SortOrderInput | SortOrder
    warrantyMonths?: SortOrderInput | SortOrder
    paymentTermsText?: SortOrderInput | SortOrder
    lineItems?: SortOrderInput | SortOrder
    rawExtracted?: SortOrderInput | SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proposal"> | number
    rfpId?: IntWithAggregatesFilter<"Proposal"> | number
    vendorId?: IntWithAggregatesFilter<"Proposal"> | number
    emailMessageId?: StringNullableWithAggregatesFilter<"Proposal"> | string | null
    parsedAt?: DateTimeNullableWithAggregatesFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    totalPrice?: FloatNullableWithAggregatesFilter<"Proposal"> | number | null
    currency?: StringNullableWithAggregatesFilter<"Proposal"> | string | null
    deliveryDays?: IntNullableWithAggregatesFilter<"Proposal"> | number | null
    warrantyMonths?: IntNullableWithAggregatesFilter<"Proposal"> | number | null
    paymentTermsText?: StringNullableWithAggregatesFilter<"Proposal"> | string | null
    lineItems?: JsonNullableWithAggregatesFilter<"Proposal">
    rawExtracted?: JsonNullableWithAggregatesFilter<"Proposal">
  }

  export type ProposalScoreWhereInput = {
    AND?: ProposalScoreWhereInput | ProposalScoreWhereInput[]
    OR?: ProposalScoreWhereInput[]
    NOT?: ProposalScoreWhereInput | ProposalScoreWhereInput[]
    id?: IntFilter<"ProposalScore"> | number
    proposalId?: IntFilter<"ProposalScore"> | number
    priceScore?: FloatNullableFilter<"ProposalScore"> | number | null
    deliveryScore?: FloatNullableFilter<"ProposalScore"> | number | null
    warrantyScore?: FloatNullableFilter<"ProposalScore"> | number | null
    overallScore?: FloatNullableFilter<"ProposalScore"> | number | null
    explanation?: StringNullableFilter<"ProposalScore"> | string | null
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
  }

  export type ProposalScoreOrderByWithRelationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    priceScore?: SortOrderInput | SortOrder
    deliveryScore?: SortOrderInput | SortOrder
    warrantyScore?: SortOrderInput | SortOrder
    overallScore?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    proposal?: ProposalOrderByWithRelationInput
  }

  export type ProposalScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    proposalId?: number
    AND?: ProposalScoreWhereInput | ProposalScoreWhereInput[]
    OR?: ProposalScoreWhereInput[]
    NOT?: ProposalScoreWhereInput | ProposalScoreWhereInput[]
    priceScore?: FloatNullableFilter<"ProposalScore"> | number | null
    deliveryScore?: FloatNullableFilter<"ProposalScore"> | number | null
    warrantyScore?: FloatNullableFilter<"ProposalScore"> | number | null
    overallScore?: FloatNullableFilter<"ProposalScore"> | number | null
    explanation?: StringNullableFilter<"ProposalScore"> | string | null
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
  }, "id" | "proposalId">

  export type ProposalScoreOrderByWithAggregationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    priceScore?: SortOrderInput | SortOrder
    deliveryScore?: SortOrderInput | SortOrder
    warrantyScore?: SortOrderInput | SortOrder
    overallScore?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    _count?: ProposalScoreCountOrderByAggregateInput
    _avg?: ProposalScoreAvgOrderByAggregateInput
    _max?: ProposalScoreMaxOrderByAggregateInput
    _min?: ProposalScoreMinOrderByAggregateInput
    _sum?: ProposalScoreSumOrderByAggregateInput
  }

  export type ProposalScoreScalarWhereWithAggregatesInput = {
    AND?: ProposalScoreScalarWhereWithAggregatesInput | ProposalScoreScalarWhereWithAggregatesInput[]
    OR?: ProposalScoreScalarWhereWithAggregatesInput[]
    NOT?: ProposalScoreScalarWhereWithAggregatesInput | ProposalScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProposalScore"> | number
    proposalId?: IntWithAggregatesFilter<"ProposalScore"> | number
    priceScore?: FloatNullableWithAggregatesFilter<"ProposalScore"> | number | null
    deliveryScore?: FloatNullableWithAggregatesFilter<"ProposalScore"> | number | null
    warrantyScore?: FloatNullableWithAggregatesFilter<"ProposalScore"> | number | null
    overallScore?: FloatNullableWithAggregatesFilter<"ProposalScore"> | number | null
    explanation?: StringNullableWithAggregatesFilter<"ProposalScore"> | string | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role?: string
    companyName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdRfps?: RfpCreateNestedManyWithoutRequesterInput
    vendor?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: string
    companyName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdRfps?: RfpUncheckedCreateNestedManyWithoutRequesterInput
    vendor?: VendorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRfps?: RfpUpdateManyWithoutRequesterNestedInput
    vendor?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRfps?: RfpUncheckedUpdateManyWithoutRequesterNestedInput
    vendor?: VendorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: string
    companyName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutVendorInput
    proposals?: ProposalCreateNestedManyWithoutVendorInput
    rfpVendors?: RfpVendorCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutVendorInput
    rfpVendors?: RfpVendorUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVendorNestedInput
    proposals?: ProposalUpdateManyWithoutVendorNestedInput
    rfpVendors?: RfpVendorUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutVendorNestedInput
    rfpVendors?: RfpVendorUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: number
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type VendorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RfpCreateInput = {
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requester?: UserCreateNestedOneWithoutCreatedRfpsInput
    selectedProposal?: ProposalCreateNestedOneWithoutSelectedOnRfpInput
    proposals?: ProposalCreateNestedManyWithoutRfpInput
    rfpVendors?: RfpVendorCreateNestedManyWithoutRfpInput
  }

  export type RfpUncheckedCreateInput = {
    id?: number
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId?: number | null
    selectedProposalId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutRfpInput
    rfpVendors?: RfpVendorUncheckedCreateNestedManyWithoutRfpInput
  }

  export type RfpUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneWithoutCreatedRfpsNestedInput
    selectedProposal?: ProposalUpdateOneWithoutSelectedOnRfpNestedInput
    proposals?: ProposalUpdateManyWithoutRfpNestedInput
    rfpVendors?: RfpVendorUpdateManyWithoutRfpNestedInput
  }

  export type RfpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutRfpNestedInput
    rfpVendors?: RfpVendorUncheckedUpdateManyWithoutRfpNestedInput
  }

  export type RfpCreateManyInput = {
    id?: number
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId?: number | null
    selectedProposalId?: number | null
  }

  export type RfpUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RfpVendorCreateInput = {
    status?: string
    createdAt?: Date | string
    rfp: RfpCreateNestedOneWithoutRfpVendorsInput
    vendor: VendorCreateNestedOneWithoutRfpVendorsInput
  }

  export type RfpVendorUncheckedCreateInput = {
    id?: number
    rfpId: number
    vendorId: number
    status?: string
    createdAt?: Date | string
  }

  export type RfpVendorUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfp?: RfpUpdateOneRequiredWithoutRfpVendorsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutRfpVendorsNestedInput
  }

  export type RfpVendorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfpVendorCreateManyInput = {
    id?: number
    rfpId: number
    vendorId: number
    status?: string
    createdAt?: Date | string
  }

  export type RfpVendorUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfpVendorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateInput = {
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp: RfpCreateNestedOneWithoutProposalsInput
    vendor: VendorCreateNestedOneWithoutProposalsInput
    score?: ProposalScoreCreateNestedOneWithoutProposalInput
    selectedOnRfp?: RfpCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: number
    rfpId: number
    vendorId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedCreateNestedOneWithoutProposalInput
    selectedOnRfp?: RfpUncheckedCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalUpdateInput = {
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp?: RfpUpdateOneRequiredWithoutProposalsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutProposalsNestedInput
    score?: ProposalScoreUpdateOneWithoutProposalNestedInput
    selectedOnRfp?: RfpUpdateOneWithoutSelectedProposalNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedUpdateOneWithoutProposalNestedInput
    selectedOnRfp?: RfpUncheckedUpdateOneWithoutSelectedProposalNestedInput
  }

  export type ProposalCreateManyInput = {
    id?: number
    rfpId: number
    vendorId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProposalUpdateManyMutationInput = {
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProposalScoreCreateInput = {
    priceScore?: number | null
    deliveryScore?: number | null
    warrantyScore?: number | null
    overallScore?: number | null
    explanation?: string | null
    proposal: ProposalCreateNestedOneWithoutScoreInput
  }

  export type ProposalScoreUncheckedCreateInput = {
    id?: number
    proposalId: number
    priceScore?: number | null
    deliveryScore?: number | null
    warrantyScore?: number | null
    overallScore?: number | null
    explanation?: string | null
  }

  export type ProposalScoreUpdateInput = {
    priceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    warrantyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    proposal?: ProposalUpdateOneRequiredWithoutScoreNestedInput
  }

  export type ProposalScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    proposalId?: IntFieldUpdateOperationsInput | number
    priceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    warrantyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProposalScoreCreateManyInput = {
    id?: number
    proposalId: number
    priceScore?: number | null
    deliveryScore?: number | null
    warrantyScore?: number | null
    overallScore?: number | null
    explanation?: string | null
  }

  export type ProposalScoreUpdateManyMutationInput = {
    priceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    warrantyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProposalScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    proposalId?: IntFieldUpdateOperationsInput | number
    priceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    warrantyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RfpListRelationFilter = {
    every?: RfpWhereInput
    some?: RfpWhereInput
    none?: RfpWhereInput
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RfpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type RfpVendorListRelationFilter = {
    every?: RfpVendorWhereInput
    some?: RfpVendorWhereInput
    none?: RfpVendorWhereInput
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RfpVendorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPerson?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPerson?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPerson?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProposalNullableScalarRelationFilter = {
    is?: ProposalWhereInput | null
    isNot?: ProposalWhereInput | null
  }

  export type RfpCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionRaw?: SortOrder
    budget?: SortOrder
    currency?: SortOrder
    deliveryBy?: SortOrder
    paymentTerms?: SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    selectedProposalId?: SortOrder
  }

  export type RfpAvgOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
    requesterId?: SortOrder
    selectedProposalId?: SortOrder
  }

  export type RfpMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionRaw?: SortOrder
    budget?: SortOrder
    currency?: SortOrder
    deliveryBy?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    selectedProposalId?: SortOrder
  }

  export type RfpMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionRaw?: SortOrder
    budget?: SortOrder
    currency?: SortOrder
    deliveryBy?: SortOrder
    paymentTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requesterId?: SortOrder
    selectedProposalId?: SortOrder
  }

  export type RfpSumOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
    requesterId?: SortOrder
    selectedProposalId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type RfpScalarRelationFilter = {
    is?: RfpWhereInput
    isNot?: RfpWhereInput
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type RfpVendorRfpIdVendorIdCompoundUniqueInput = {
    rfpId: number
    vendorId: number
  }

  export type RfpVendorCountOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RfpVendorAvgOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
  }

  export type RfpVendorMaxOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RfpVendorMinOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RfpVendorSumOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
  }

  export type ProposalScoreNullableScalarRelationFilter = {
    is?: ProposalScoreWhereInput | null
    isNot?: ProposalScoreWhereInput | null
  }

  export type RfpNullableScalarRelationFilter = {
    is?: RfpWhereInput | null
    isNot?: RfpWhereInput | null
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    emailMessageId?: SortOrder
    parsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    deliveryDays?: SortOrder
    warrantyMonths?: SortOrder
    paymentTermsText?: SortOrder
    lineItems?: SortOrder
    rawExtracted?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    totalPrice?: SortOrder
    deliveryDays?: SortOrder
    warrantyMonths?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    emailMessageId?: SortOrder
    parsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    deliveryDays?: SortOrder
    warrantyMonths?: SortOrder
    paymentTermsText?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    emailMessageId?: SortOrder
    parsedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    deliveryDays?: SortOrder
    warrantyMonths?: SortOrder
    paymentTermsText?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    id?: SortOrder
    rfpId?: SortOrder
    vendorId?: SortOrder
    totalPrice?: SortOrder
    deliveryDays?: SortOrder
    warrantyMonths?: SortOrder
  }

  export type ProposalScalarRelationFilter = {
    is?: ProposalWhereInput
    isNot?: ProposalWhereInput
  }

  export type ProposalScoreCountOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    priceScore?: SortOrder
    deliveryScore?: SortOrder
    warrantyScore?: SortOrder
    overallScore?: SortOrder
    explanation?: SortOrder
  }

  export type ProposalScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    priceScore?: SortOrder
    deliveryScore?: SortOrder
    warrantyScore?: SortOrder
    overallScore?: SortOrder
  }

  export type ProposalScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    priceScore?: SortOrder
    deliveryScore?: SortOrder
    warrantyScore?: SortOrder
    overallScore?: SortOrder
    explanation?: SortOrder
  }

  export type ProposalScoreMinOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    priceScore?: SortOrder
    deliveryScore?: SortOrder
    warrantyScore?: SortOrder
    overallScore?: SortOrder
    explanation?: SortOrder
  }

  export type ProposalScoreSumOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    priceScore?: SortOrder
    deliveryScore?: SortOrder
    warrantyScore?: SortOrder
    overallScore?: SortOrder
  }

  export type RfpCreateNestedManyWithoutRequesterInput = {
    create?: XOR<RfpCreateWithoutRequesterInput, RfpUncheckedCreateWithoutRequesterInput> | RfpCreateWithoutRequesterInput[] | RfpUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RfpCreateOrConnectWithoutRequesterInput | RfpCreateOrConnectWithoutRequesterInput[]
    createMany?: RfpCreateManyRequesterInputEnvelope
    connect?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
  }

  export type VendorCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type RfpUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<RfpCreateWithoutRequesterInput, RfpUncheckedCreateWithoutRequesterInput> | RfpCreateWithoutRequesterInput[] | RfpUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RfpCreateOrConnectWithoutRequesterInput | RfpCreateOrConnectWithoutRequesterInput[]
    createMany?: RfpCreateManyRequesterInputEnvelope
    connect?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
  }

  export type VendorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RfpUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<RfpCreateWithoutRequesterInput, RfpUncheckedCreateWithoutRequesterInput> | RfpCreateWithoutRequesterInput[] | RfpUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RfpCreateOrConnectWithoutRequesterInput | RfpCreateOrConnectWithoutRequesterInput[]
    upsert?: RfpUpsertWithWhereUniqueWithoutRequesterInput | RfpUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: RfpCreateManyRequesterInputEnvelope
    set?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    disconnect?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    delete?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    connect?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    update?: RfpUpdateWithWhereUniqueWithoutRequesterInput | RfpUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: RfpUpdateManyWithWhereWithoutRequesterInput | RfpUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: RfpScalarWhereInput | RfpScalarWhereInput[]
  }

  export type VendorUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RfpUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<RfpCreateWithoutRequesterInput, RfpUncheckedCreateWithoutRequesterInput> | RfpCreateWithoutRequesterInput[] | RfpUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RfpCreateOrConnectWithoutRequesterInput | RfpCreateOrConnectWithoutRequesterInput[]
    upsert?: RfpUpsertWithWhereUniqueWithoutRequesterInput | RfpUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: RfpCreateManyRequesterInputEnvelope
    set?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    disconnect?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    delete?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    connect?: RfpWhereUniqueInput | RfpWhereUniqueInput[]
    update?: RfpUpdateWithWhereUniqueWithoutRequesterInput | RfpUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: RfpUpdateManyWithWhereWithoutRequesterInput | RfpUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: RfpScalarWhereInput | RfpScalarWhereInput[]
  }

  export type VendorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutVendorInput = {
    create?: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProposalCreateWithoutVendorInput, ProposalUncheckedCreateWithoutVendorInput> | ProposalCreateWithoutVendorInput[] | ProposalUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutVendorInput | ProposalCreateOrConnectWithoutVendorInput[]
    createMany?: ProposalCreateManyVendorInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type RfpVendorCreateNestedManyWithoutVendorInput = {
    create?: XOR<RfpVendorCreateWithoutVendorInput, RfpVendorUncheckedCreateWithoutVendorInput> | RfpVendorCreateWithoutVendorInput[] | RfpVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutVendorInput | RfpVendorCreateOrConnectWithoutVendorInput[]
    createMany?: RfpVendorCreateManyVendorInputEnvelope
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProposalCreateWithoutVendorInput, ProposalUncheckedCreateWithoutVendorInput> | ProposalCreateWithoutVendorInput[] | ProposalUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutVendorInput | ProposalCreateOrConnectWithoutVendorInput[]
    createMany?: ProposalCreateManyVendorInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type RfpVendorUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<RfpVendorCreateWithoutVendorInput, RfpVendorUncheckedCreateWithoutVendorInput> | RfpVendorCreateWithoutVendorInput[] | RfpVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutVendorInput | RfpVendorCreateOrConnectWithoutVendorInput[]
    createMany?: RfpVendorCreateManyVendorInputEnvelope
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutVendorNestedInput = {
    create?: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorInput
    upsert?: UserUpsertWithoutVendorInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorInput, UserUpdateWithoutVendorInput>, UserUncheckedUpdateWithoutVendorInput>
  }

  export type ProposalUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProposalCreateWithoutVendorInput, ProposalUncheckedCreateWithoutVendorInput> | ProposalCreateWithoutVendorInput[] | ProposalUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutVendorInput | ProposalCreateOrConnectWithoutVendorInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutVendorInput | ProposalUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProposalCreateManyVendorInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutVendorInput | ProposalUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutVendorInput | ProposalUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type RfpVendorUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RfpVendorCreateWithoutVendorInput, RfpVendorUncheckedCreateWithoutVendorInput> | RfpVendorCreateWithoutVendorInput[] | RfpVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutVendorInput | RfpVendorCreateOrConnectWithoutVendorInput[]
    upsert?: RfpVendorUpsertWithWhereUniqueWithoutVendorInput | RfpVendorUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RfpVendorCreateManyVendorInputEnvelope
    set?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    disconnect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    delete?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    update?: RfpVendorUpdateWithWhereUniqueWithoutVendorInput | RfpVendorUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RfpVendorUpdateManyWithWhereWithoutVendorInput | RfpVendorUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RfpVendorScalarWhereInput | RfpVendorScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProposalUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProposalCreateWithoutVendorInput, ProposalUncheckedCreateWithoutVendorInput> | ProposalCreateWithoutVendorInput[] | ProposalUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutVendorInput | ProposalCreateOrConnectWithoutVendorInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutVendorInput | ProposalUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProposalCreateManyVendorInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutVendorInput | ProposalUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutVendorInput | ProposalUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type RfpVendorUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RfpVendorCreateWithoutVendorInput, RfpVendorUncheckedCreateWithoutVendorInput> | RfpVendorCreateWithoutVendorInput[] | RfpVendorUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutVendorInput | RfpVendorCreateOrConnectWithoutVendorInput[]
    upsert?: RfpVendorUpsertWithWhereUniqueWithoutVendorInput | RfpVendorUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RfpVendorCreateManyVendorInputEnvelope
    set?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    disconnect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    delete?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    update?: RfpVendorUpdateWithWhereUniqueWithoutVendorInput | RfpVendorUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RfpVendorUpdateManyWithWhereWithoutVendorInput | RfpVendorUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RfpVendorScalarWhereInput | RfpVendorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedRfpsInput = {
    create?: XOR<UserCreateWithoutCreatedRfpsInput, UserUncheckedCreateWithoutCreatedRfpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRfpsInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalCreateNestedOneWithoutSelectedOnRfpInput = {
    create?: XOR<ProposalCreateWithoutSelectedOnRfpInput, ProposalUncheckedCreateWithoutSelectedOnRfpInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutSelectedOnRfpInput
    connect?: ProposalWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutRfpInput = {
    create?: XOR<ProposalCreateWithoutRfpInput, ProposalUncheckedCreateWithoutRfpInput> | ProposalCreateWithoutRfpInput[] | ProposalUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRfpInput | ProposalCreateOrConnectWithoutRfpInput[]
    createMany?: ProposalCreateManyRfpInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type RfpVendorCreateNestedManyWithoutRfpInput = {
    create?: XOR<RfpVendorCreateWithoutRfpInput, RfpVendorUncheckedCreateWithoutRfpInput> | RfpVendorCreateWithoutRfpInput[] | RfpVendorUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutRfpInput | RfpVendorCreateOrConnectWithoutRfpInput[]
    createMany?: RfpVendorCreateManyRfpInputEnvelope
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutRfpInput = {
    create?: XOR<ProposalCreateWithoutRfpInput, ProposalUncheckedCreateWithoutRfpInput> | ProposalCreateWithoutRfpInput[] | ProposalUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRfpInput | ProposalCreateOrConnectWithoutRfpInput[]
    createMany?: ProposalCreateManyRfpInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type RfpVendorUncheckedCreateNestedManyWithoutRfpInput = {
    create?: XOR<RfpVendorCreateWithoutRfpInput, RfpVendorUncheckedCreateWithoutRfpInput> | RfpVendorCreateWithoutRfpInput[] | RfpVendorUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutRfpInput | RfpVendorCreateOrConnectWithoutRfpInput[]
    createMany?: RfpVendorCreateManyRfpInputEnvelope
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutCreatedRfpsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRfpsInput, UserUncheckedCreateWithoutCreatedRfpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRfpsInput
    upsert?: UserUpsertWithoutCreatedRfpsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRfpsInput, UserUpdateWithoutCreatedRfpsInput>, UserUncheckedUpdateWithoutCreatedRfpsInput>
  }

  export type ProposalUpdateOneWithoutSelectedOnRfpNestedInput = {
    create?: XOR<ProposalCreateWithoutSelectedOnRfpInput, ProposalUncheckedCreateWithoutSelectedOnRfpInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutSelectedOnRfpInput
    upsert?: ProposalUpsertWithoutSelectedOnRfpInput
    disconnect?: ProposalWhereInput | boolean
    delete?: ProposalWhereInput | boolean
    connect?: ProposalWhereUniqueInput
    update?: XOR<XOR<ProposalUpdateToOneWithWhereWithoutSelectedOnRfpInput, ProposalUpdateWithoutSelectedOnRfpInput>, ProposalUncheckedUpdateWithoutSelectedOnRfpInput>
  }

  export type ProposalUpdateManyWithoutRfpNestedInput = {
    create?: XOR<ProposalCreateWithoutRfpInput, ProposalUncheckedCreateWithoutRfpInput> | ProposalCreateWithoutRfpInput[] | ProposalUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRfpInput | ProposalCreateOrConnectWithoutRfpInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutRfpInput | ProposalUpsertWithWhereUniqueWithoutRfpInput[]
    createMany?: ProposalCreateManyRfpInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutRfpInput | ProposalUpdateWithWhereUniqueWithoutRfpInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutRfpInput | ProposalUpdateManyWithWhereWithoutRfpInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type RfpVendorUpdateManyWithoutRfpNestedInput = {
    create?: XOR<RfpVendorCreateWithoutRfpInput, RfpVendorUncheckedCreateWithoutRfpInput> | RfpVendorCreateWithoutRfpInput[] | RfpVendorUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutRfpInput | RfpVendorCreateOrConnectWithoutRfpInput[]
    upsert?: RfpVendorUpsertWithWhereUniqueWithoutRfpInput | RfpVendorUpsertWithWhereUniqueWithoutRfpInput[]
    createMany?: RfpVendorCreateManyRfpInputEnvelope
    set?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    disconnect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    delete?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    update?: RfpVendorUpdateWithWhereUniqueWithoutRfpInput | RfpVendorUpdateWithWhereUniqueWithoutRfpInput[]
    updateMany?: RfpVendorUpdateManyWithWhereWithoutRfpInput | RfpVendorUpdateManyWithWhereWithoutRfpInput[]
    deleteMany?: RfpVendorScalarWhereInput | RfpVendorScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutRfpNestedInput = {
    create?: XOR<ProposalCreateWithoutRfpInput, ProposalUncheckedCreateWithoutRfpInput> | ProposalCreateWithoutRfpInput[] | ProposalUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRfpInput | ProposalCreateOrConnectWithoutRfpInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutRfpInput | ProposalUpsertWithWhereUniqueWithoutRfpInput[]
    createMany?: ProposalCreateManyRfpInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutRfpInput | ProposalUpdateWithWhereUniqueWithoutRfpInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutRfpInput | ProposalUpdateManyWithWhereWithoutRfpInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type RfpVendorUncheckedUpdateManyWithoutRfpNestedInput = {
    create?: XOR<RfpVendorCreateWithoutRfpInput, RfpVendorUncheckedCreateWithoutRfpInput> | RfpVendorCreateWithoutRfpInput[] | RfpVendorUncheckedCreateWithoutRfpInput[]
    connectOrCreate?: RfpVendorCreateOrConnectWithoutRfpInput | RfpVendorCreateOrConnectWithoutRfpInput[]
    upsert?: RfpVendorUpsertWithWhereUniqueWithoutRfpInput | RfpVendorUpsertWithWhereUniqueWithoutRfpInput[]
    createMany?: RfpVendorCreateManyRfpInputEnvelope
    set?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    disconnect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    delete?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    connect?: RfpVendorWhereUniqueInput | RfpVendorWhereUniqueInput[]
    update?: RfpVendorUpdateWithWhereUniqueWithoutRfpInput | RfpVendorUpdateWithWhereUniqueWithoutRfpInput[]
    updateMany?: RfpVendorUpdateManyWithWhereWithoutRfpInput | RfpVendorUpdateManyWithWhereWithoutRfpInput[]
    deleteMany?: RfpVendorScalarWhereInput | RfpVendorScalarWhereInput[]
  }

  export type RfpCreateNestedOneWithoutRfpVendorsInput = {
    create?: XOR<RfpCreateWithoutRfpVendorsInput, RfpUncheckedCreateWithoutRfpVendorsInput>
    connectOrCreate?: RfpCreateOrConnectWithoutRfpVendorsInput
    connect?: RfpWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutRfpVendorsInput = {
    create?: XOR<VendorCreateWithoutRfpVendorsInput, VendorUncheckedCreateWithoutRfpVendorsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutRfpVendorsInput
    connect?: VendorWhereUniqueInput
  }

  export type RfpUpdateOneRequiredWithoutRfpVendorsNestedInput = {
    create?: XOR<RfpCreateWithoutRfpVendorsInput, RfpUncheckedCreateWithoutRfpVendorsInput>
    connectOrCreate?: RfpCreateOrConnectWithoutRfpVendorsInput
    upsert?: RfpUpsertWithoutRfpVendorsInput
    connect?: RfpWhereUniqueInput
    update?: XOR<XOR<RfpUpdateToOneWithWhereWithoutRfpVendorsInput, RfpUpdateWithoutRfpVendorsInput>, RfpUncheckedUpdateWithoutRfpVendorsInput>
  }

  export type VendorUpdateOneRequiredWithoutRfpVendorsNestedInput = {
    create?: XOR<VendorCreateWithoutRfpVendorsInput, VendorUncheckedCreateWithoutRfpVendorsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutRfpVendorsInput
    upsert?: VendorUpsertWithoutRfpVendorsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutRfpVendorsInput, VendorUpdateWithoutRfpVendorsInput>, VendorUncheckedUpdateWithoutRfpVendorsInput>
  }

  export type RfpCreateNestedOneWithoutProposalsInput = {
    create?: XOR<RfpCreateWithoutProposalsInput, RfpUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: RfpCreateOrConnectWithoutProposalsInput
    connect?: RfpWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutProposalsInput = {
    create?: XOR<VendorCreateWithoutProposalsInput, VendorUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutProposalsInput
    connect?: VendorWhereUniqueInput
  }

  export type ProposalScoreCreateNestedOneWithoutProposalInput = {
    create?: XOR<ProposalScoreCreateWithoutProposalInput, ProposalScoreUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ProposalScoreCreateOrConnectWithoutProposalInput
    connect?: ProposalScoreWhereUniqueInput
  }

  export type RfpCreateNestedOneWithoutSelectedProposalInput = {
    create?: XOR<RfpCreateWithoutSelectedProposalInput, RfpUncheckedCreateWithoutSelectedProposalInput>
    connectOrCreate?: RfpCreateOrConnectWithoutSelectedProposalInput
    connect?: RfpWhereUniqueInput
  }

  export type ProposalScoreUncheckedCreateNestedOneWithoutProposalInput = {
    create?: XOR<ProposalScoreCreateWithoutProposalInput, ProposalScoreUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ProposalScoreCreateOrConnectWithoutProposalInput
    connect?: ProposalScoreWhereUniqueInput
  }

  export type RfpUncheckedCreateNestedOneWithoutSelectedProposalInput = {
    create?: XOR<RfpCreateWithoutSelectedProposalInput, RfpUncheckedCreateWithoutSelectedProposalInput>
    connectOrCreate?: RfpCreateOrConnectWithoutSelectedProposalInput
    connect?: RfpWhereUniqueInput
  }

  export type RfpUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<RfpCreateWithoutProposalsInput, RfpUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: RfpCreateOrConnectWithoutProposalsInput
    upsert?: RfpUpsertWithoutProposalsInput
    connect?: RfpWhereUniqueInput
    update?: XOR<XOR<RfpUpdateToOneWithWhereWithoutProposalsInput, RfpUpdateWithoutProposalsInput>, RfpUncheckedUpdateWithoutProposalsInput>
  }

  export type VendorUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<VendorCreateWithoutProposalsInput, VendorUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutProposalsInput
    upsert?: VendorUpsertWithoutProposalsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutProposalsInput, VendorUpdateWithoutProposalsInput>, VendorUncheckedUpdateWithoutProposalsInput>
  }

  export type ProposalScoreUpdateOneWithoutProposalNestedInput = {
    create?: XOR<ProposalScoreCreateWithoutProposalInput, ProposalScoreUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ProposalScoreCreateOrConnectWithoutProposalInput
    upsert?: ProposalScoreUpsertWithoutProposalInput
    disconnect?: ProposalScoreWhereInput | boolean
    delete?: ProposalScoreWhereInput | boolean
    connect?: ProposalScoreWhereUniqueInput
    update?: XOR<XOR<ProposalScoreUpdateToOneWithWhereWithoutProposalInput, ProposalScoreUpdateWithoutProposalInput>, ProposalScoreUncheckedUpdateWithoutProposalInput>
  }

  export type RfpUpdateOneWithoutSelectedProposalNestedInput = {
    create?: XOR<RfpCreateWithoutSelectedProposalInput, RfpUncheckedCreateWithoutSelectedProposalInput>
    connectOrCreate?: RfpCreateOrConnectWithoutSelectedProposalInput
    upsert?: RfpUpsertWithoutSelectedProposalInput
    disconnect?: RfpWhereInput | boolean
    delete?: RfpWhereInput | boolean
    connect?: RfpWhereUniqueInput
    update?: XOR<XOR<RfpUpdateToOneWithWhereWithoutSelectedProposalInput, RfpUpdateWithoutSelectedProposalInput>, RfpUncheckedUpdateWithoutSelectedProposalInput>
  }

  export type ProposalScoreUncheckedUpdateOneWithoutProposalNestedInput = {
    create?: XOR<ProposalScoreCreateWithoutProposalInput, ProposalScoreUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ProposalScoreCreateOrConnectWithoutProposalInput
    upsert?: ProposalScoreUpsertWithoutProposalInput
    disconnect?: ProposalScoreWhereInput | boolean
    delete?: ProposalScoreWhereInput | boolean
    connect?: ProposalScoreWhereUniqueInput
    update?: XOR<XOR<ProposalScoreUpdateToOneWithWhereWithoutProposalInput, ProposalScoreUpdateWithoutProposalInput>, ProposalScoreUncheckedUpdateWithoutProposalInput>
  }

  export type RfpUncheckedUpdateOneWithoutSelectedProposalNestedInput = {
    create?: XOR<RfpCreateWithoutSelectedProposalInput, RfpUncheckedCreateWithoutSelectedProposalInput>
    connectOrCreate?: RfpCreateOrConnectWithoutSelectedProposalInput
    upsert?: RfpUpsertWithoutSelectedProposalInput
    disconnect?: RfpWhereInput | boolean
    delete?: RfpWhereInput | boolean
    connect?: RfpWhereUniqueInput
    update?: XOR<XOR<RfpUpdateToOneWithWhereWithoutSelectedProposalInput, RfpUpdateWithoutSelectedProposalInput>, RfpUncheckedUpdateWithoutSelectedProposalInput>
  }

  export type ProposalCreateNestedOneWithoutScoreInput = {
    create?: XOR<ProposalCreateWithoutScoreInput, ProposalUncheckedCreateWithoutScoreInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutScoreInput
    connect?: ProposalWhereUniqueInput
  }

  export type ProposalUpdateOneRequiredWithoutScoreNestedInput = {
    create?: XOR<ProposalCreateWithoutScoreInput, ProposalUncheckedCreateWithoutScoreInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutScoreInput
    upsert?: ProposalUpsertWithoutScoreInput
    connect?: ProposalWhereUniqueInput
    update?: XOR<XOR<ProposalUpdateToOneWithWhereWithoutScoreInput, ProposalUpdateWithoutScoreInput>, ProposalUncheckedUpdateWithoutScoreInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RfpCreateWithoutRequesterInput = {
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedProposal?: ProposalCreateNestedOneWithoutSelectedOnRfpInput
    proposals?: ProposalCreateNestedManyWithoutRfpInput
    rfpVendors?: RfpVendorCreateNestedManyWithoutRfpInput
  }

  export type RfpUncheckedCreateWithoutRequesterInput = {
    id?: number
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedProposalId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutRfpInput
    rfpVendors?: RfpVendorUncheckedCreateNestedManyWithoutRfpInput
  }

  export type RfpCreateOrConnectWithoutRequesterInput = {
    where: RfpWhereUniqueInput
    create: XOR<RfpCreateWithoutRequesterInput, RfpUncheckedCreateWithoutRequesterInput>
  }

  export type RfpCreateManyRequesterInputEnvelope = {
    data: RfpCreateManyRequesterInput | RfpCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type VendorCreateWithoutUserInput = {
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalCreateNestedManyWithoutVendorInput
    rfpVendors?: RfpVendorCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutVendorInput
    rfpVendors?: RfpVendorUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutUserInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
  }

  export type RfpUpsertWithWhereUniqueWithoutRequesterInput = {
    where: RfpWhereUniqueInput
    update: XOR<RfpUpdateWithoutRequesterInput, RfpUncheckedUpdateWithoutRequesterInput>
    create: XOR<RfpCreateWithoutRequesterInput, RfpUncheckedCreateWithoutRequesterInput>
  }

  export type RfpUpdateWithWhereUniqueWithoutRequesterInput = {
    where: RfpWhereUniqueInput
    data: XOR<RfpUpdateWithoutRequesterInput, RfpUncheckedUpdateWithoutRequesterInput>
  }

  export type RfpUpdateManyWithWhereWithoutRequesterInput = {
    where: RfpScalarWhereInput
    data: XOR<RfpUpdateManyMutationInput, RfpUncheckedUpdateManyWithoutRequesterInput>
  }

  export type RfpScalarWhereInput = {
    AND?: RfpScalarWhereInput | RfpScalarWhereInput[]
    OR?: RfpScalarWhereInput[]
    NOT?: RfpScalarWhereInput | RfpScalarWhereInput[]
    id?: IntFilter<"Rfp"> | number
    title?: StringFilter<"Rfp"> | string
    descriptionRaw?: StringFilter<"Rfp"> | string
    budget?: FloatNullableFilter<"Rfp"> | number | null
    currency?: StringNullableFilter<"Rfp"> | string | null
    deliveryBy?: DateTimeNullableFilter<"Rfp"> | Date | string | null
    paymentTerms?: StringNullableFilter<"Rfp"> | string | null
    requirements?: JsonNullableFilter<"Rfp">
    createdAt?: DateTimeFilter<"Rfp"> | Date | string
    updatedAt?: DateTimeFilter<"Rfp"> | Date | string
    requesterId?: IntNullableFilter<"Rfp"> | number | null
    selectedProposalId?: IntNullableFilter<"Rfp"> | number | null
  }

  export type VendorUpsertWithoutUserInput = {
    update: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
  }

  export type VendorUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUpdateManyWithoutVendorNestedInput
    rfpVendors?: RfpVendorUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutVendorNestedInput
    rfpVendors?: RfpVendorUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutVendorInput = {
    email: string
    password: string
    name: string
    role?: string
    companyName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdRfps?: RfpCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutVendorInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: string
    companyName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdRfps?: RfpUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutVendorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
  }

  export type ProposalCreateWithoutVendorInput = {
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp: RfpCreateNestedOneWithoutProposalsInput
    score?: ProposalScoreCreateNestedOneWithoutProposalInput
    selectedOnRfp?: RfpCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalUncheckedCreateWithoutVendorInput = {
    id?: number
    rfpId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedCreateNestedOneWithoutProposalInput
    selectedOnRfp?: RfpUncheckedCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalCreateOrConnectWithoutVendorInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutVendorInput, ProposalUncheckedCreateWithoutVendorInput>
  }

  export type ProposalCreateManyVendorInputEnvelope = {
    data: ProposalCreateManyVendorInput | ProposalCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type RfpVendorCreateWithoutVendorInput = {
    status?: string
    createdAt?: Date | string
    rfp: RfpCreateNestedOneWithoutRfpVendorsInput
  }

  export type RfpVendorUncheckedCreateWithoutVendorInput = {
    id?: number
    rfpId: number
    status?: string
    createdAt?: Date | string
  }

  export type RfpVendorCreateOrConnectWithoutVendorInput = {
    where: RfpVendorWhereUniqueInput
    create: XOR<RfpVendorCreateWithoutVendorInput, RfpVendorUncheckedCreateWithoutVendorInput>
  }

  export type RfpVendorCreateManyVendorInputEnvelope = {
    data: RfpVendorCreateManyVendorInput | RfpVendorCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorInput = {
    update: XOR<UserUpdateWithoutVendorInput, UserUncheckedUpdateWithoutVendorInput>
    create: XOR<UserCreateWithoutVendorInput, UserUncheckedCreateWithoutVendorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorInput, UserUncheckedUpdateWithoutVendorInput>
  }

  export type UserUpdateWithoutVendorInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRfps?: RfpUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdRfps?: RfpUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutVendorInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutVendorInput, ProposalUncheckedUpdateWithoutVendorInput>
    create: XOR<ProposalCreateWithoutVendorInput, ProposalUncheckedCreateWithoutVendorInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutVendorInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutVendorInput, ProposalUncheckedUpdateWithoutVendorInput>
  }

  export type ProposalUpdateManyWithWhereWithoutVendorInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutVendorInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: IntFilter<"Proposal"> | number
    rfpId?: IntFilter<"Proposal"> | number
    vendorId?: IntFilter<"Proposal"> | number
    emailMessageId?: StringNullableFilter<"Proposal"> | string | null
    parsedAt?: DateTimeNullableFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    totalPrice?: FloatNullableFilter<"Proposal"> | number | null
    currency?: StringNullableFilter<"Proposal"> | string | null
    deliveryDays?: IntNullableFilter<"Proposal"> | number | null
    warrantyMonths?: IntNullableFilter<"Proposal"> | number | null
    paymentTermsText?: StringNullableFilter<"Proposal"> | string | null
    lineItems?: JsonNullableFilter<"Proposal">
    rawExtracted?: JsonNullableFilter<"Proposal">
  }

  export type RfpVendorUpsertWithWhereUniqueWithoutVendorInput = {
    where: RfpVendorWhereUniqueInput
    update: XOR<RfpVendorUpdateWithoutVendorInput, RfpVendorUncheckedUpdateWithoutVendorInput>
    create: XOR<RfpVendorCreateWithoutVendorInput, RfpVendorUncheckedCreateWithoutVendorInput>
  }

  export type RfpVendorUpdateWithWhereUniqueWithoutVendorInput = {
    where: RfpVendorWhereUniqueInput
    data: XOR<RfpVendorUpdateWithoutVendorInput, RfpVendorUncheckedUpdateWithoutVendorInput>
  }

  export type RfpVendorUpdateManyWithWhereWithoutVendorInput = {
    where: RfpVendorScalarWhereInput
    data: XOR<RfpVendorUpdateManyMutationInput, RfpVendorUncheckedUpdateManyWithoutVendorInput>
  }

  export type RfpVendorScalarWhereInput = {
    AND?: RfpVendorScalarWhereInput | RfpVendorScalarWhereInput[]
    OR?: RfpVendorScalarWhereInput[]
    NOT?: RfpVendorScalarWhereInput | RfpVendorScalarWhereInput[]
    id?: IntFilter<"RfpVendor"> | number
    rfpId?: IntFilter<"RfpVendor"> | number
    vendorId?: IntFilter<"RfpVendor"> | number
    status?: StringFilter<"RfpVendor"> | string
    createdAt?: DateTimeFilter<"RfpVendor"> | Date | string
  }

  export type UserCreateWithoutCreatedRfpsInput = {
    email: string
    password: string
    name: string
    role?: string
    companyName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedRfpsInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: string
    companyName?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor?: VendorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedRfpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRfpsInput, UserUncheckedCreateWithoutCreatedRfpsInput>
  }

  export type ProposalCreateWithoutSelectedOnRfpInput = {
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp: RfpCreateNestedOneWithoutProposalsInput
    vendor: VendorCreateNestedOneWithoutProposalsInput
    score?: ProposalScoreCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutSelectedOnRfpInput = {
    id?: number
    rfpId: number
    vendorId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedCreateNestedOneWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutSelectedOnRfpInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutSelectedOnRfpInput, ProposalUncheckedCreateWithoutSelectedOnRfpInput>
  }

  export type ProposalCreateWithoutRfpInput = {
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    vendor: VendorCreateNestedOneWithoutProposalsInput
    score?: ProposalScoreCreateNestedOneWithoutProposalInput
    selectedOnRfp?: RfpCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalUncheckedCreateWithoutRfpInput = {
    id?: number
    vendorId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedCreateNestedOneWithoutProposalInput
    selectedOnRfp?: RfpUncheckedCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalCreateOrConnectWithoutRfpInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutRfpInput, ProposalUncheckedCreateWithoutRfpInput>
  }

  export type ProposalCreateManyRfpInputEnvelope = {
    data: ProposalCreateManyRfpInput | ProposalCreateManyRfpInput[]
    skipDuplicates?: boolean
  }

  export type RfpVendorCreateWithoutRfpInput = {
    status?: string
    createdAt?: Date | string
    vendor: VendorCreateNestedOneWithoutRfpVendorsInput
  }

  export type RfpVendorUncheckedCreateWithoutRfpInput = {
    id?: number
    vendorId: number
    status?: string
    createdAt?: Date | string
  }

  export type RfpVendorCreateOrConnectWithoutRfpInput = {
    where: RfpVendorWhereUniqueInput
    create: XOR<RfpVendorCreateWithoutRfpInput, RfpVendorUncheckedCreateWithoutRfpInput>
  }

  export type RfpVendorCreateManyRfpInputEnvelope = {
    data: RfpVendorCreateManyRfpInput | RfpVendorCreateManyRfpInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedRfpsInput = {
    update: XOR<UserUpdateWithoutCreatedRfpsInput, UserUncheckedUpdateWithoutCreatedRfpsInput>
    create: XOR<UserCreateWithoutCreatedRfpsInput, UserUncheckedCreateWithoutCreatedRfpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRfpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRfpsInput, UserUncheckedUpdateWithoutCreatedRfpsInput>
  }

  export type UserUpdateWithoutCreatedRfpsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRfpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProposalUpsertWithoutSelectedOnRfpInput = {
    update: XOR<ProposalUpdateWithoutSelectedOnRfpInput, ProposalUncheckedUpdateWithoutSelectedOnRfpInput>
    create: XOR<ProposalCreateWithoutSelectedOnRfpInput, ProposalUncheckedCreateWithoutSelectedOnRfpInput>
    where?: ProposalWhereInput
  }

  export type ProposalUpdateToOneWithWhereWithoutSelectedOnRfpInput = {
    where?: ProposalWhereInput
    data: XOR<ProposalUpdateWithoutSelectedOnRfpInput, ProposalUncheckedUpdateWithoutSelectedOnRfpInput>
  }

  export type ProposalUpdateWithoutSelectedOnRfpInput = {
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp?: RfpUpdateOneRequiredWithoutProposalsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutProposalsNestedInput
    score?: ProposalScoreUpdateOneWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutSelectedOnRfpInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedUpdateOneWithoutProposalNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutRfpInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutRfpInput, ProposalUncheckedUpdateWithoutRfpInput>
    create: XOR<ProposalCreateWithoutRfpInput, ProposalUncheckedCreateWithoutRfpInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutRfpInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutRfpInput, ProposalUncheckedUpdateWithoutRfpInput>
  }

  export type ProposalUpdateManyWithWhereWithoutRfpInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutRfpInput>
  }

  export type RfpVendorUpsertWithWhereUniqueWithoutRfpInput = {
    where: RfpVendorWhereUniqueInput
    update: XOR<RfpVendorUpdateWithoutRfpInput, RfpVendorUncheckedUpdateWithoutRfpInput>
    create: XOR<RfpVendorCreateWithoutRfpInput, RfpVendorUncheckedCreateWithoutRfpInput>
  }

  export type RfpVendorUpdateWithWhereUniqueWithoutRfpInput = {
    where: RfpVendorWhereUniqueInput
    data: XOR<RfpVendorUpdateWithoutRfpInput, RfpVendorUncheckedUpdateWithoutRfpInput>
  }

  export type RfpVendorUpdateManyWithWhereWithoutRfpInput = {
    where: RfpVendorScalarWhereInput
    data: XOR<RfpVendorUpdateManyMutationInput, RfpVendorUncheckedUpdateManyWithoutRfpInput>
  }

  export type RfpCreateWithoutRfpVendorsInput = {
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requester?: UserCreateNestedOneWithoutCreatedRfpsInput
    selectedProposal?: ProposalCreateNestedOneWithoutSelectedOnRfpInput
    proposals?: ProposalCreateNestedManyWithoutRfpInput
  }

  export type RfpUncheckedCreateWithoutRfpVendorsInput = {
    id?: number
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId?: number | null
    selectedProposalId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutRfpInput
  }

  export type RfpCreateOrConnectWithoutRfpVendorsInput = {
    where: RfpWhereUniqueInput
    create: XOR<RfpCreateWithoutRfpVendorsInput, RfpUncheckedCreateWithoutRfpVendorsInput>
  }

  export type VendorCreateWithoutRfpVendorsInput = {
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutVendorInput
    proposals?: ProposalCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutRfpVendorsInput = {
    id?: number
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutRfpVendorsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutRfpVendorsInput, VendorUncheckedCreateWithoutRfpVendorsInput>
  }

  export type RfpUpsertWithoutRfpVendorsInput = {
    update: XOR<RfpUpdateWithoutRfpVendorsInput, RfpUncheckedUpdateWithoutRfpVendorsInput>
    create: XOR<RfpCreateWithoutRfpVendorsInput, RfpUncheckedCreateWithoutRfpVendorsInput>
    where?: RfpWhereInput
  }

  export type RfpUpdateToOneWithWhereWithoutRfpVendorsInput = {
    where?: RfpWhereInput
    data: XOR<RfpUpdateWithoutRfpVendorsInput, RfpUncheckedUpdateWithoutRfpVendorsInput>
  }

  export type RfpUpdateWithoutRfpVendorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneWithoutCreatedRfpsNestedInput
    selectedProposal?: ProposalUpdateOneWithoutSelectedOnRfpNestedInput
    proposals?: ProposalUpdateManyWithoutRfpNestedInput
  }

  export type RfpUncheckedUpdateWithoutRfpVendorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutRfpNestedInput
  }

  export type VendorUpsertWithoutRfpVendorsInput = {
    update: XOR<VendorUpdateWithoutRfpVendorsInput, VendorUncheckedUpdateWithoutRfpVendorsInput>
    create: XOR<VendorCreateWithoutRfpVendorsInput, VendorUncheckedCreateWithoutRfpVendorsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutRfpVendorsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutRfpVendorsInput, VendorUncheckedUpdateWithoutRfpVendorsInput>
  }

  export type VendorUpdateWithoutRfpVendorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVendorNestedInput
    proposals?: ProposalUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutRfpVendorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type RfpCreateWithoutProposalsInput = {
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requester?: UserCreateNestedOneWithoutCreatedRfpsInput
    selectedProposal?: ProposalCreateNestedOneWithoutSelectedOnRfpInput
    rfpVendors?: RfpVendorCreateNestedManyWithoutRfpInput
  }

  export type RfpUncheckedCreateWithoutProposalsInput = {
    id?: number
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId?: number | null
    selectedProposalId?: number | null
    rfpVendors?: RfpVendorUncheckedCreateNestedManyWithoutRfpInput
  }

  export type RfpCreateOrConnectWithoutProposalsInput = {
    where: RfpWhereUniqueInput
    create: XOR<RfpCreateWithoutProposalsInput, RfpUncheckedCreateWithoutProposalsInput>
  }

  export type VendorCreateWithoutProposalsInput = {
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutVendorInput
    rfpVendors?: RfpVendorCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutProposalsInput = {
    id?: number
    name: string
    email: string
    contactPerson?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    rfpVendors?: RfpVendorUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutProposalsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutProposalsInput, VendorUncheckedCreateWithoutProposalsInput>
  }

  export type ProposalScoreCreateWithoutProposalInput = {
    priceScore?: number | null
    deliveryScore?: number | null
    warrantyScore?: number | null
    overallScore?: number | null
    explanation?: string | null
  }

  export type ProposalScoreUncheckedCreateWithoutProposalInput = {
    id?: number
    priceScore?: number | null
    deliveryScore?: number | null
    warrantyScore?: number | null
    overallScore?: number | null
    explanation?: string | null
  }

  export type ProposalScoreCreateOrConnectWithoutProposalInput = {
    where: ProposalScoreWhereUniqueInput
    create: XOR<ProposalScoreCreateWithoutProposalInput, ProposalScoreUncheckedCreateWithoutProposalInput>
  }

  export type RfpCreateWithoutSelectedProposalInput = {
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requester?: UserCreateNestedOneWithoutCreatedRfpsInput
    proposals?: ProposalCreateNestedManyWithoutRfpInput
    rfpVendors?: RfpVendorCreateNestedManyWithoutRfpInput
  }

  export type RfpUncheckedCreateWithoutSelectedProposalInput = {
    id?: number
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    requesterId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutRfpInput
    rfpVendors?: RfpVendorUncheckedCreateNestedManyWithoutRfpInput
  }

  export type RfpCreateOrConnectWithoutSelectedProposalInput = {
    where: RfpWhereUniqueInput
    create: XOR<RfpCreateWithoutSelectedProposalInput, RfpUncheckedCreateWithoutSelectedProposalInput>
  }

  export type RfpUpsertWithoutProposalsInput = {
    update: XOR<RfpUpdateWithoutProposalsInput, RfpUncheckedUpdateWithoutProposalsInput>
    create: XOR<RfpCreateWithoutProposalsInput, RfpUncheckedCreateWithoutProposalsInput>
    where?: RfpWhereInput
  }

  export type RfpUpdateToOneWithWhereWithoutProposalsInput = {
    where?: RfpWhereInput
    data: XOR<RfpUpdateWithoutProposalsInput, RfpUncheckedUpdateWithoutProposalsInput>
  }

  export type RfpUpdateWithoutProposalsInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneWithoutCreatedRfpsNestedInput
    selectedProposal?: ProposalUpdateOneWithoutSelectedOnRfpNestedInput
    rfpVendors?: RfpVendorUpdateManyWithoutRfpNestedInput
  }

  export type RfpUncheckedUpdateWithoutProposalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    rfpVendors?: RfpVendorUncheckedUpdateManyWithoutRfpNestedInput
  }

  export type VendorUpsertWithoutProposalsInput = {
    update: XOR<VendorUpdateWithoutProposalsInput, VendorUncheckedUpdateWithoutProposalsInput>
    create: XOR<VendorCreateWithoutProposalsInput, VendorUncheckedCreateWithoutProposalsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutProposalsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutProposalsInput, VendorUncheckedUpdateWithoutProposalsInput>
  }

  export type VendorUpdateWithoutProposalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVendorNestedInput
    rfpVendors?: RfpVendorUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutProposalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    rfpVendors?: RfpVendorUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ProposalScoreUpsertWithoutProposalInput = {
    update: XOR<ProposalScoreUpdateWithoutProposalInput, ProposalScoreUncheckedUpdateWithoutProposalInput>
    create: XOR<ProposalScoreCreateWithoutProposalInput, ProposalScoreUncheckedCreateWithoutProposalInput>
    where?: ProposalScoreWhereInput
  }

  export type ProposalScoreUpdateToOneWithWhereWithoutProposalInput = {
    where?: ProposalScoreWhereInput
    data: XOR<ProposalScoreUpdateWithoutProposalInput, ProposalScoreUncheckedUpdateWithoutProposalInput>
  }

  export type ProposalScoreUpdateWithoutProposalInput = {
    priceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    warrantyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProposalScoreUncheckedUpdateWithoutProposalInput = {
    id?: IntFieldUpdateOperationsInput | number
    priceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    warrantyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RfpUpsertWithoutSelectedProposalInput = {
    update: XOR<RfpUpdateWithoutSelectedProposalInput, RfpUncheckedUpdateWithoutSelectedProposalInput>
    create: XOR<RfpCreateWithoutSelectedProposalInput, RfpUncheckedCreateWithoutSelectedProposalInput>
    where?: RfpWhereInput
  }

  export type RfpUpdateToOneWithWhereWithoutSelectedProposalInput = {
    where?: RfpWhereInput
    data: XOR<RfpUpdateWithoutSelectedProposalInput, RfpUncheckedUpdateWithoutSelectedProposalInput>
  }

  export type RfpUpdateWithoutSelectedProposalInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneWithoutCreatedRfpsNestedInput
    proposals?: ProposalUpdateManyWithoutRfpNestedInput
    rfpVendors?: RfpVendorUpdateManyWithoutRfpNestedInput
  }

  export type RfpUncheckedUpdateWithoutSelectedProposalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutRfpNestedInput
    rfpVendors?: RfpVendorUncheckedUpdateManyWithoutRfpNestedInput
  }

  export type ProposalCreateWithoutScoreInput = {
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp: RfpCreateNestedOneWithoutProposalsInput
    vendor: VendorCreateNestedOneWithoutProposalsInput
    selectedOnRfp?: RfpCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalUncheckedCreateWithoutScoreInput = {
    id?: number
    rfpId: number
    vendorId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    selectedOnRfp?: RfpUncheckedCreateNestedOneWithoutSelectedProposalInput
  }

  export type ProposalCreateOrConnectWithoutScoreInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutScoreInput, ProposalUncheckedCreateWithoutScoreInput>
  }

  export type ProposalUpsertWithoutScoreInput = {
    update: XOR<ProposalUpdateWithoutScoreInput, ProposalUncheckedUpdateWithoutScoreInput>
    create: XOR<ProposalCreateWithoutScoreInput, ProposalUncheckedCreateWithoutScoreInput>
    where?: ProposalWhereInput
  }

  export type ProposalUpdateToOneWithWhereWithoutScoreInput = {
    where?: ProposalWhereInput
    data: XOR<ProposalUpdateWithoutScoreInput, ProposalUncheckedUpdateWithoutScoreInput>
  }

  export type ProposalUpdateWithoutScoreInput = {
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp?: RfpUpdateOneRequiredWithoutProposalsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutProposalsNestedInput
    selectedOnRfp?: RfpUpdateOneWithoutSelectedProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    selectedOnRfp?: RfpUncheckedUpdateOneWithoutSelectedProposalNestedInput
  }

  export type RfpCreateManyRequesterInput = {
    id?: number
    title: string
    descriptionRaw: string
    budget?: number | null
    currency?: string | null
    deliveryBy?: Date | string | null
    paymentTerms?: string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedProposalId?: number | null
  }

  export type RfpUpdateWithoutRequesterInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedProposal?: ProposalUpdateOneWithoutSelectedOnRfpNestedInput
    proposals?: ProposalUpdateManyWithoutRfpNestedInput
    rfpVendors?: RfpVendorUpdateManyWithoutRfpNestedInput
  }

  export type RfpUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutRfpNestedInput
    rfpVendors?: RfpVendorUncheckedUpdateManyWithoutRfpNestedInput
  }

  export type RfpUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    descriptionRaw?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerms?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProposalCreateManyVendorInput = {
    id?: number
    rfpId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RfpVendorCreateManyVendorInput = {
    id?: number
    rfpId: number
    status?: string
    createdAt?: Date | string
  }

  export type ProposalUpdateWithoutVendorInput = {
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    rfp?: RfpUpdateOneRequiredWithoutProposalsNestedInput
    score?: ProposalScoreUpdateOneWithoutProposalNestedInput
    selectedOnRfp?: RfpUpdateOneWithoutSelectedProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedUpdateOneWithoutProposalNestedInput
    selectedOnRfp?: RfpUncheckedUpdateOneWithoutSelectedProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RfpVendorUpdateWithoutVendorInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rfp?: RfpUpdateOneRequiredWithoutRfpVendorsNestedInput
  }

  export type RfpVendorUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfpVendorUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfpId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyRfpInput = {
    id?: number
    vendorId: number
    emailMessageId?: string | null
    parsedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalPrice?: number | null
    currency?: string | null
    deliveryDays?: number | null
    warrantyMonths?: number | null
    paymentTermsText?: string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RfpVendorCreateManyRfpInput = {
    id?: number
    vendorId: number
    status?: string
    createdAt?: Date | string
  }

  export type ProposalUpdateWithoutRfpInput = {
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    vendor?: VendorUpdateOneRequiredWithoutProposalsNestedInput
    score?: ProposalScoreUpdateOneWithoutProposalNestedInput
    selectedOnRfp?: RfpUpdateOneWithoutSelectedProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutRfpInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
    score?: ProposalScoreUncheckedUpdateOneWithoutProposalNestedInput
    selectedOnRfp?: RfpUncheckedUpdateOneWithoutSelectedProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutRfpInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    emailMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    parsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDays?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyMonths?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTermsText?: NullableStringFieldUpdateOperationsInput | string | null
    lineItems?: NullableJsonNullValueInput | InputJsonValue
    rawExtracted?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RfpVendorUpdateWithoutRfpInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutRfpVendorsNestedInput
  }

  export type RfpVendorUncheckedUpdateWithoutRfpInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RfpVendorUncheckedUpdateManyWithoutRfpInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}