import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(), // For auth
  }).index("by_token", ["tokenIdentifier"]),

  teams: defineTable({
    name: v.string(),
    ownerId: v.id("users"),
  }),

  teamMembers: defineTable({
    teamId: v.id("teams"),
    userId: v.id("users"),
    role: v.union(v.literal("owner"), v.literal("member")),
  }).index("by_team", ["teamId"])
    .index("by_user", ["userId"]),

  workspaces: defineTable({
    teamId: v.id("teams"),
    name: v.string(),
  }).index("by_team", ["teamId"]),

  collections: defineTable({
    workspaceId: v.id("workspaces"),
    name: v.string(),
    description: v.optional(v.string()),
  }).index("by_workspace", ["workspaceId"]),

  requests: defineTable({
    collectionId: v.id("collections"),
    name: v.string(),
    method: v.string(), // GET, POST, etc.
    url: v.string(),
    headers: v.string(), // JSON string
    body: v.string(), // JSON string or text
    auth: v.optional(v.string()), // JSON string
    preScript: v.optional(v.string()),
    postScript: v.optional(v.string()),
  }).index("by_collection", ["collectionId"]),

  requestExamples: defineTable({
    requestId: v.id("requests"),
    name: v.string(),
    responseStatus: v.number(),
    responseBody: v.string(),
  }).index("by_request", ["requestId"]),

  environments: defineTable({
    workspaceId: v.id("workspaces"),
    name: v.string(),
    variables: v.string(), // JSON string: { key: value }
  }).index("by_workspace", ["workspaceId"]),
});
