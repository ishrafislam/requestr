# Requestr V1 --- Development Plan

## Tech Stack

-   Frontend: Vue 3 + Vite + TailwindCSS (Bun)
-   Backend: Convex (DB + Auth + Realtime)

------------------------------------------------------------------------

## Product Scope (V1 Only)

A minimal collaborative API client with: - Authentication - Teams -
Workspaces - Collections - Requests (with auth inheritance + scripts) -
Request examples - Environments (variables) - Realtime sync

Out of scope: - CLI - Import/export - Advanced testing engine - Mock
servers

------------------------------------------------------------------------

## Core Entities (Data Model)

### User

-   id
-   email
-   name
-   createdAt

### Team

-   id
-   name
-   ownerId
-   createdAt

### TeamMember

-   id
-   teamId
-   userId
-   role (owner \| member)

### Workspace

-   id
-   teamId
-   name
-   createdAt

### Collection

-   id
-   workspaceId
-   name
-   description
-   createdAt

### Request

-   id
-   collectionId
-   name
-   method (GET, POST, PUT, DELETE, PATCH)
-   url
-   headers (json)
-   body (json \| text)
-   auth (json)
-   preScript (string)
-   postScript (string)
-   createdAt

### RequestExample

-   id
-   requestId
-   name
-   responseStatus
-   responseBody
-   createdAt

### Environment

-   id
-   workspaceId
-   name
-   variables (json: { key: value })
-   createdAt

------------------------------------------------------------------------

## Architecture Overview

### Frontend

-   Vue 3 SPA
-   State via composables (avoid heavy store initially)
-   Service layer wraps Convex client
-   Tailwind for UI

### Backend (Convex)

-   Tables map directly to entities
-   Queries for reads
-   Mutations for writes
-   Built-in realtime subscriptions

------------------------------------------------------------------------

## Phase Plan

### Phase 1 --- Setup

-   Initialize Vite + Vue using Bun
-   Setup TailwindCSS
-   Initialize Convex
-   Connect frontend with Convex

### Phase 2 --- Authentication

-   Configure Convex Auth
-   Login / Signup
-   Persist session
-   Route protection

### Phase 3 --- Teams

-   Create team
-   Add creator as owner
-   List user teams
-   Team switcher UI

### Phase 4 --- Workspaces

-   CRUD workspaces
-   Filter by team
-   Sidebar UI

### Phase 5 --- Collections

-   CRUD collections
-   Link to workspace
-   Sidebar tree view

### Phase 6 --- Requests

-   CRUD requests
-   Method, URL, headers, body
-   Auth config
-   Pre/Post scripts
-   Auth inheritance logic

### Phase 7 --- Examples

-   Save response as example
-   Attach to request
-   View examples

### Phase 8 --- Environments

-   CRUD environments
-   Key-value variables
-   Variable injection in requests

### Phase 9 --- Realtime

-   Live updates via Convex subscriptions
-   Sync:
    -   teams
    -   workspaces
    -   collections
    -   requests
    -   environments

------------------------------------------------------------------------

## Done Criteria (V1)

-   User logs in
-   Creates team → workspace → collection → request
-   Sends request and sees response
-   Saves example
-   Uses environment variables
-   Changes reflect instantly across sessions
