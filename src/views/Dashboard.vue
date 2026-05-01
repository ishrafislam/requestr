<script setup>
</script>

<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
        <span class="text-xl font-bold">Requestr</span>
      </div>
      <nav class="flex-1 overflow-y-auto p-4">
        <div class="space-y-1">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Workspaces</p>
          <div class="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md font-medium text-sm">
            Default Workspace
          </div>
        </div>
      </nav>
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <span class="text-sm font-medium">User Profile</span>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- Header -->
      <header class="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
        <div class="flex items-center gap-4">
          <h2 class="text-lg font-semibold">New Request</h2>
        </div>
        <div class="flex items-center gap-2">
          <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors">
            Send
          </button>
        </div>
      </header>

      <!-- Main Area -->
      <main class="flex-1 overflow-y-auto p-6">
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="flex gap-2">
            <select class="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
            <input 
              type="text" 
              placeholder="https://api.example.com"
              class="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div class="border-b border-gray-200 dark:border-gray-700 flex">
              <button class="px-4 py-2 text-sm font-medium border-b-2 border-blue-500 text-blue-600 dark:text-blue-400">Headers</button>
              <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Body</button>
              <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Auth</button>
            </div>
            <div class="p-4">
              <p class="text-sm text-gray-500 italic">No headers defined</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
