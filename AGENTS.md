# Agent Configuration for betterfleets

BetterFleets is a data aggregation dashboard for ride-hailing fleet managers. It provides a unified interface to track vehicles, driver performance and earnings across multiple platforms  (e.g., Uber, Bolt, Prio).

## Build/Lint/Test Commands

• bun dev: Start all applications in development mode
• bun build: Build all applications
• bun check-types: Check TypeScript types across all apps
• bun check: Run biome formatter and linter
• For running a single test, use bun test <filename> in the appropriate app directory

## Code Style Guidelines

• Imports: Use absolute imports for src/ files, relative imports for same-directory files
• Formatting: Follow biomejs.dev formatting rules; enforced via bun check
• Types: Use TypeScript strictly with explicit types for all functions/variables
• Naming: Use camelCase for variables/functions, PascalCase for components/classes
• Error Handling: Use try/catch blocks for async operations, handle errors gracefully
• Comments: Use JSDoc-style comments for functions/classes

## Additional Rules

• Uses Ultracite preset for biome configuration
• Husky pre-commit hooks run formatting checks
• Drizzle ORM for database operations
• tRPC for type-safe API endpoints