export const enum Kind {
  Unknown = 0,
  Parameter = 139,
  PropertySignature = 141,
  PropertyDeclaration = 142,
  MethodSignature = 143,
  MethodDeclaration = 144,
  VariableDeclaration = 214,
  FunctionDeclaration = 216,
  ClassDeclaration = 217,
  InterfaceDeclaration = 218,
  TypeAliasDeclaration = 219,
  EnumDeclaration = 220,
  ModuleDeclaration = 221,
  HeritageClause = 246,
  EnumMember = 250,
}

type Membership = {
  isAbstract?: boolean
  isProtected?: boolean
  isPrivate?: boolean
  isStatic?: boolean
}

export type Property = Membership & {
  kind: 141
  documentation: string
  name: string
  type: string
}

export type Parameter = {
  kind: 139
  name: string
  documentation: string
  isDotDotDot?: boolean
  optional?: boolean
  type: string
}

export type Method = Membership & {
  kind: 143
  returnDocumentation?: string
  parameters: Parameter[]
  documentation: string
  name: string
  type: string
}

export type Member = Property | Method

export type ClassDeclaration = {
  kind: Kind.PropertyDeclaration
  documentation: string
  isAbstract?: boolean
  members: Member[]
  name: string
}
