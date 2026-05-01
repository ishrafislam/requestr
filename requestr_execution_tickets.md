# Requestr V1 --- Execution Tickets

## Phase 1 --- Setup

### T1: Initialize Frontend

-   Create Vite + Vue project using Bun
-   Install TailwindCSS
-   Clean default template
-   Setup base layout (header + sidebar + main)

**Done when:** - App runs - Tailwind works - Basic layout visible

------------------------------------------------------------------------

### T2: Setup Convex

-   Initialize Convex project
-   Connect frontend client
-   Verify query + mutation works

**Done when:** - Frontend can call a test query and display data

------------------------------------------------------------------------

## Phase 2 --- Authentication

### T3: Configure Auth

-   Setup Convex Auth
-   Implement login/signup UI
-   Persist session

------------------------------------------------------------------------

### T4: Protect Routes

-   Add route guard
-   Redirect unauthenticated users

**Done when:** - User can login - Session persists after refresh -
Protected routes enforced

------------------------------------------------------------------------

## Phase 3 --- Teams

### T5: Create Team

-   Mutation: createTeam(name)
-   Add creator as owner in TeamMember

------------------------------------------------------------------------

### T6: List Teams

-   Query teams by current user

------------------------------------------------------------------------

### T7: Team Switcher UI

-   Dropdown to switch active team
-   Store active team in state

**Done when:** - User can create and switch teams

------------------------------------------------------------------------

## Phase 4 --- Workspaces

### T8: Create Workspace

-   Mutation: createWorkspace(teamId, name)

------------------------------------------------------------------------

### T9: List Workspaces

-   Query by teamId

------------------------------------------------------------------------

### T10: Workspace UI

-   Sidebar list
-   Click to select

**Done when:** - Workspaces are scoped per team - Switching works

------------------------------------------------------------------------

## Phase 5 --- Collections

### T11: Create Collection

-   Mutation: createCollection(workspaceId, name)

------------------------------------------------------------------------

### T12: List Collections

-   Query by workspaceId

------------------------------------------------------------------------

### T13: Collection UI

-   Sidebar tree structure

**Done when:** - Collections appear under workspace

------------------------------------------------------------------------

## Phase 6 --- Requests

### T14: Create Request

-   Fields:
    -   method
    -   url
    -   headers
    -   body

------------------------------------------------------------------------

### T15: Edit/Delete Request

-   Update request mutation
-   Delete request mutation

------------------------------------------------------------------------

### T16: Request Editor UI

-   Method dropdown
-   URL input
-   Headers editor (key-value)
-   Body editor (raw JSON/text)

------------------------------------------------------------------------

### T17: Send Request

-   Use fetch to send request
-   Display:
    -   status
    -   response body

**Done when:** - User can create, edit, and send requests

------------------------------------------------------------------------

## Phase 7 --- Examples

### T18: Save Example

-   Save response as RequestExample

------------------------------------------------------------------------

### T19: View Examples

-   List examples per request

**Done when:** - User can save and view responses

------------------------------------------------------------------------

## Phase 8 --- Environments

### T20: Create Environment

-   CRUD environment

------------------------------------------------------------------------

### T21: Variables

-   Key-value store

------------------------------------------------------------------------

### T22: Inject Variables

-   Replace {{var}} in:
    -   URL
    -   headers
    -   body

**Done when:** - Requests use environment variables

------------------------------------------------------------------------

## Phase 9 --- Realtime

### T23: Realtime Subscriptions

-   Teams
-   Workspaces
-   Collections
-   Requests
-   Environments

**Done when:** - Changes reflect instantly across sessions

------------------------------------------------------------------------

## Final Done Criteria

-   User logs in
-   Creates team → workspace → collection → request
-   Sends request and sees response
-   Saves example
-   Uses environment variables
-   Data syncs in realtime
