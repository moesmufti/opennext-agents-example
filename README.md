# OpenNext Agents Example

This project demonstrates the issue with Cloudflare AI Agents with Next.js, where the useAgentChat hook creates a crash.

## Project Setup

This project was created with the following steps:

1. Created using Cloudflare's Next.js template:

   ```bash
   npm create cloudflare@latest -- opennext-agents-example --framework=next --experimental
   ```

2. Removed lock file and reinstalled dependencies with pnpm:

   ```bash
   rm package-lock.json
   pnpm install
   ```

3. Update to twcss v4 using

   ```bash
   npx @tailwindcss/upgrade --force
   ```

4. Upgrade to latest packages

   ```bash
   pnpm update --latest
   ```

5. Installed Agent-related package:

   ```bash
   pnpm add agents-sdk
   ```

6. Bound the Chat agent to wrangler.jsonc configuration

7. Generated TypeScript types for Cloudflare Workers:

   ```bash
   pnpm cf-typegen
   ```

8. Add "use client" to page.tsx


9. Added the boilerplate useAgent and useAgentChat hooks to page.tsx for integrating AI chat functionality
Commented out the useAgentChat import and implementation. Once you uncomment them, an error occurs.

## Getting Started

### Prerequisites

- Node.js
- pnpm
- Cloudflare account

### Development

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

To build the application:

```bash
pnpm build
```