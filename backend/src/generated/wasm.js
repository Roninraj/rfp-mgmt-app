
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  contactPerson: 'contactPerson',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.RfpScalarFieldEnum = {
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

exports.Prisma.RfpVendorScalarFieldEnum = {
  id: 'id',
  rfpId: 'rfpId',
  vendorId: 'vendorId',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.ProposalScalarFieldEnum = {
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

exports.Prisma.ProposalScoreScalarFieldEnum = {
  id: 'id',
  proposalId: 'proposalId',
  priceScore: 'priceScore',
  deliveryScore: 'deliveryScore',
  warrantyScore: 'warrantyScore',
  overallScore: 'overallScore',
  explanation: 'explanation'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Vendor: 'Vendor',
  Rfp: 'Rfp',
  RfpVendor: 'RfpVendor',
  Proposal: 'Proposal',
  ProposalScore: 'ProposalScore'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/roninraj/Documents/GitHub/aerchain-assignment-rfp-mgmt-sys/backend/src/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/home/roninraj/Documents/GitHub/aerchain-assignment-rfp-mgmt-sys/backend/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.1.0",
  "engineVersion": "11f085a2012c0f4778414c8db2651556ee0ef959",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\nmodel User {\n  id          Int      @id @default(autoincrement())\n  email       String   @unique\n  password    String\n  name        String\n  role        String   @default(\"vendor\") // \"requester\" or \"vendor\"\n  companyName String?\n  phone       String?\n  address     String?\n  city        String?\n  state       String?\n  country     String?\n  postalCode  String?\n  isActive    Boolean  @default(true)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  // Relations\n  createdRfps Rfp[]   @relation(\"RequesterRfps\")\n  vendor      Vendor? @relation(\"UserVendor\") // Link to Vendor (optional, only for vendor users)\n}\n\nmodel Vendor {\n  id            Int      @id @default(autoincrement())\n  name          String\n  email         String   @unique\n  contactPerson String?\n  notes         String?\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n\n  // Link back to User (optional, for vendor users)\n  userId Int?  @unique\n  user   User? @relation(\"UserVendor\", fields: [userId], references: [id], onDelete: SetNull)\n\n  proposals  Proposal[]\n  rfpVendors RfpVendor[]\n}\n\nmodel Rfp {\n  id             Int       @id @default(autoincrement())\n  title          String\n  descriptionRaw String\n  budget         Float?\n  currency       String?   @default(\"USD\")\n  deliveryBy     DateTime?\n  paymentTerms   String?\n  requirements   Json?\n  createdAt      DateTime  @default(now())\n  updatedAt      DateTime  @updatedAt\n\n  // Requester relation\n  requesterId Int?\n  requester   User? @relation(\"RequesterRfps\", fields: [requesterId], references: [id], onDelete: Cascade)\n\n  // Selected proposal (optional) - stores the chosen proposal for this RFP\n  selectedProposalId Int?      @unique\n  selectedProposal   Proposal? @relation(\"RfpSelectedProposal\", fields: [selectedProposalId], references: [id], onDelete: SetNull)\n\n  proposals  Proposal[]\n  rfpVendors RfpVendor[]\n}\n\nmodel RfpVendor {\n  id        Int      @id @default(autoincrement())\n  rfp       Rfp      @relation(fields: [rfpId], references: [id], onDelete: Cascade)\n  rfpId     Int\n  vendor    Vendor   @relation(fields: [vendorId], references: [id], onDelete: Cascade)\n  vendorId  Int\n  status    String   @default(\"invited\")\n  createdAt DateTime @default(now())\n\n  @@unique([rfpId, vendorId]) // Prevent duplicate invites\n}\n\nmodel Proposal {\n  id             Int       @id @default(autoincrement())\n  rfp            Rfp       @relation(fields: [rfpId], references: [id], onDelete: Cascade)\n  rfpId          Int\n  vendor         Vendor    @relation(fields: [vendorId], references: [id], onDelete: Cascade)\n  vendorId       Int\n  emailMessageId String?\n  parsedAt       DateTime?\n  createdAt      DateTime  @default(now())\n  updatedAt      DateTime  @updatedAt\n\n  totalPrice       Float?\n  currency         String? @default(\"USD\")\n  deliveryDays     Int?\n  warrantyMonths   Int?\n  paymentTermsText String?\n  lineItems        Json?\n  rawExtracted     Json?\n\n  score ProposalScore?\n\n  // Back-reference for when a proposal is selected for an RFP\n  selectedOnRfp Rfp? @relation(\"RfpSelectedProposal\")\n}\n\nmodel ProposalScore {\n  id            Int      @id @default(autoincrement())\n  proposal      Proposal @relation(fields: [proposalId], references: [id], onDelete: Cascade)\n  proposalId    Int      @unique\n  priceScore    Float?\n  deliveryScore Float?\n  warrantyScore Float?\n  overallScore  Float?\n  explanation   String?\n}\n",
  "inlineSchemaHash": "721752b01366021152bf45f9df02994dce9852bc106364d64ff804592e0113ac",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"companyName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"postalCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdRfps\",\"kind\":\"object\",\"type\":\"Rfp\",\"relationName\":\"RequesterRfps\"},{\"name\":\"vendor\",\"kind\":\"object\",\"type\":\"Vendor\",\"relationName\":\"UserVendor\"}],\"dbName\":null},\"Vendor\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contactPerson\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserVendor\"},{\"name\":\"proposals\",\"kind\":\"object\",\"type\":\"Proposal\",\"relationName\":\"ProposalToVendor\"},{\"name\":\"rfpVendors\",\"kind\":\"object\",\"type\":\"RfpVendor\",\"relationName\":\"RfpVendorToVendor\"}],\"dbName\":null},\"Rfp\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"descriptionRaw\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"budget\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"currency\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"deliveryBy\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"paymentTerms\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"requirements\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"requesterId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"requester\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"RequesterRfps\"},{\"name\":\"selectedProposalId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"selectedProposal\",\"kind\":\"object\",\"type\":\"Proposal\",\"relationName\":\"RfpSelectedProposal\"},{\"name\":\"proposals\",\"kind\":\"object\",\"type\":\"Proposal\",\"relationName\":\"ProposalToRfp\"},{\"name\":\"rfpVendors\",\"kind\":\"object\",\"type\":\"RfpVendor\",\"relationName\":\"RfpToRfpVendor\"}],\"dbName\":null},\"RfpVendor\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"rfp\",\"kind\":\"object\",\"type\":\"Rfp\",\"relationName\":\"RfpToRfpVendor\"},{\"name\":\"rfpId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"vendor\",\"kind\":\"object\",\"type\":\"Vendor\",\"relationName\":\"RfpVendorToVendor\"},{\"name\":\"vendorId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Proposal\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"rfp\",\"kind\":\"object\",\"type\":\"Rfp\",\"relationName\":\"ProposalToRfp\"},{\"name\":\"rfpId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"vendor\",\"kind\":\"object\",\"type\":\"Vendor\",\"relationName\":\"ProposalToVendor\"},{\"name\":\"vendorId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"emailMessageId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"parsedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"currency\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"deliveryDays\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"warrantyMonths\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"paymentTermsText\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lineItems\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"rawExtracted\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"score\",\"kind\":\"object\",\"type\":\"ProposalScore\",\"relationName\":\"ProposalToProposalScore\"},{\"name\":\"selectedOnRfp\",\"kind\":\"object\",\"type\":\"Rfp\",\"relationName\":\"RfpSelectedProposal\"}],\"dbName\":null},\"ProposalScore\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"proposal\",\"kind\":\"object\",\"type\":\"Proposal\",\"relationName\":\"ProposalToProposalScore\"},{\"name\":\"proposalId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"priceScore\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"deliveryScore\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"warrantyScore\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"overallScore\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"explanation\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

