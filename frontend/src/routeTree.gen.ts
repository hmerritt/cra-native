/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './view/routes/__root'
import { Route as IndexImport } from './view/routes/index'

// Create Virtual Routes

const UserLazyImport = createFileRoute('/user')()
const UserUserIdLazyImport = createFileRoute('/user/$userId')()

// Create/Update Routes

const UserLazyRoute = UserLazyImport.update({
  path: '/user',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./view/routes/user.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UserUserIdLazyRoute = UserUserIdLazyImport.update({
  path: '/$userId',
  getParentRoute: () => UserLazyRoute,
} as any).lazy(() =>
  import('./view/routes/user.$userId.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/user': {
      id: '/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserLazyImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId': {
      id: '/user/$userId'
      path: '/$userId'
      fullPath: '/user/$userId'
      preLoaderRoute: typeof UserUserIdLazyImport
      parentRoute: typeof UserLazyImport
    }
  }
}

// Create and export the route tree

interface UserLazyRouteChildren {
  UserUserIdLazyRoute: typeof UserUserIdLazyRoute
}

const UserLazyRouteChildren: UserLazyRouteChildren = {
  UserUserIdLazyRoute: UserUserIdLazyRoute,
}

const UserLazyRouteWithChildren = UserLazyRoute._addFileChildren(
  UserLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/user': typeof UserLazyRouteWithChildren
  '/user/$userId': typeof UserUserIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/user': typeof UserLazyRouteWithChildren
  '/user/$userId': typeof UserUserIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/user': typeof UserLazyRouteWithChildren
  '/user/$userId': typeof UserUserIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/user' | '/user/$userId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/user' | '/user/$userId'
  id: '__root__' | '/' | '/user' | '/user/$userId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  UserLazyRoute: typeof UserLazyRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  UserLazyRoute: UserLazyRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/user"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/user": {
      "filePath": "user.lazy.tsx",
      "children": [
        "/user/$userId"
      ]
    },
    "/user/$userId": {
      "filePath": "user.$userId.lazy.tsx",
      "parent": "/user"
    }
  }
}
ROUTE_MANIFEST_END */
