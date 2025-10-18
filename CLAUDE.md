# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based documentation site using the Starlight framework. Starlight is Astro's official documentation theme designed for building beautiful, accessible, and performant documentation websites.

## Development Commands

All commands are run from the root of the project:

- `npm install` - Install dependencies
- `npm run dev` - Start local dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

## Architecture

### Content Structure

- **Content Location**: All documentation content lives in `src/content/docs/`
- **Content Format**: Documentation pages are written in Markdown (`.md`) or MDX (`.mdx`)
- **Routing**: Files in `src/content/docs/` are automatically exposed as routes based on their file names
  - Example: `src/content/docs/guides/example.md` → `/guides/example/`
- **Content Collections**: The site uses Astro's content collections system configured in `src/content.config.ts`
  - Uses Starlight's `docsLoader()` and `docsSchema()` for type-safe documentation

### Configuration

- **Main Config**: `astro.config.mjs` - Contains Astro and Starlight configuration
  - Site title, social links, and sidebar navigation are configured here
  - Sidebar can use manual entries or `autogenerate` for directories
- **TypeScript**: Uses Astro's strict TypeScript configuration (`astro/tsconfigs/strict`)

### Assets

- **Images**: Store in `src/assets/` and reference with relative paths in Markdown
- **Static Files**: Place in `public/` directory (favicons, robots.txt, etc.)

### Page Types

- **Splash Pages**: Landing pages without sidebars (use `template: splash` in frontmatter)
- **Doc Pages**: Standard documentation pages with sidebar navigation (default)
- **Frontmatter**: Each page requires `title` and `description` in YAML frontmatter

### Components

Starlight provides built-in components that can be imported in MDX files:
- `Card` and `CardGrid` - For creating card-based layouts
- Other Starlight components available from `@astrojs/starlight/components`

## Working with Content

When creating new documentation pages:
1. Add `.md` or `.mdx` files to `src/content/docs/`
2. Include required frontmatter: `title` and `description`
3. Update sidebar configuration in `astro.config.mjs` if manual navigation is used
4. For directories with `autogenerate`, new files appear automatically

## Build Output

- Production builds output to `./dist/`
- The build process uses Sharp for image optimization

## Sub-Agent Architecture

This repository uses specialized sub-agents for different aspects of development. Understanding when and how to use each agent is critical for efficient, error-free development.

### Sub-Agent Overview

| Agent | Model | Purpose | When to Use |
|-------|-------|---------|-------------|
| **astro-docs-specialist** | haiku-4.5 | Documentation research | API verification, feature research |
| **astro-content-specialist** | sonnet | Content architecture | Collection design, loader planning, routing strategy |
| **astro-developer** | sonnet | Implementation | Writing code, making changes, building features |
| **astro-code-auditor** | sonnet | Code review & validation | Auditing changes for correctness, security, performance |

### Sub-Agent Usage Protocol

**CRITICAL**: Always follow this workflow to avoid errors:

1. **Architecture First** → Use `astro-content-specialist` to design the solution
2. **Verify APIs** → Use `astro-docs-specialist` to confirm current syntax
3. **Implement** → Use `astro-developer` to write the code
4. **Audit** → Use `astro-code-auditor` to review changes (proactively after significant changes)

### 1. astro-docs-specialist (Research Agent)

**Model**: haiku-4.5 (fast, cost-effective for docs lookup)

**Purpose**: Documentation research and API verification ONLY

**When to Use**:
- Verifying current API syntax (e.g., "What are the exact parameters for getCollection()?")
- Looking up Astro or Starlight API references
- Researching specific features or best practices
- Checking if a feature exists or is stable
- Finding documentation URLs

**How It Works**:
1. Reads `.claude/astro-docs/astro-sitemap.md` (345 sections) to identify relevant docs
2. Performs targeted searches via `mcp__astro-docs__search_astro_docs` MCP server
3. Falls back to `.claude/astro-docs/llms-full.md` (72K lines) if MCP unavailable
4. Returns documentation with source URLs

**What It Doesn't Do**:
- ❌ Design architecture
- ❌ Write code
- ❌ Make implementation decisions

### 2. astro-content-specialist (Architecture Agent)

**Model**: sonnet

**Purpose**: Planning and architecting content systems

**When to Use**:
- Designing content collection structures
- Planning custom loaders for external data (GitBook, APIs, CMSs)
- Architecting routing and page strategies
- Planning pagination and navigation
- Designing data transformation pipelines
- Structuring Starlight content organization

**Knowledge Base**:
- `.claude/content-knowledge/content-collections-reference.md`
- `.claude/content-knowledge/content-loader-api.md`
- `.claude/content-knowledge/routing-pages-reference.md`
- `.claude/content-knowledge/starlight-specific.md`
- `.claude/content-knowledge/external-data-integration.md`

**How It Works**:
1. Reads relevant knowledge base files
2. Designs architecture and patterns
3. Provides implementation roadmap
4. Recommends using astro-docs-specialist for API verification

**What It Doesn't Do**:
- ❌ Look up documentation (use astro-docs-specialist)
- ❌ Write code (use astro-developer)

### 3. astro-developer (Implementation Agent)

**Model**: sonnet

**Purpose**: Writing code and implementing features

**When to Use**:
- Implementing features based on architecture plans
- Writing components, pages, and layouts
- Creating content loaders and collections
- Fixing bugs and errors
- Refactoring code
- Making configuration changes

**Knowledge Base**:
- `.claude/astro-knowledge/` (syntax reference - shared with auditor)
- `.claude/developer-knowledge/` (implementation patterns)
- `.claude/content-knowledge/` (content architecture)

**How It Works**:
1. Receives architecture plan or task description
2. Reviews relevant code and knowledge base
3. Implements changes following best practices
4. Tests and verifies implementation

**What It Doesn't Do**:
- ❌ Design architecture from scratch (use astro-content-specialist)
- ❌ Look up documentation (use astro-docs-specialist)
- ❌ Audit code after completion (use astro-code-auditor)

### 4. astro-code-auditor (Audit Agent)

**Model**: sonnet

**Purpose**: Code review and validation for correctness, security, performance, and best practices

**When to Use**:
- After implementing significant changes
- Before committing code to repository
- When fixing critical bugs
- For security-sensitive code
- When unsure about code quality

**Knowledge Base**:
- `.claude/astro-knowledge/` (Astro syntax rules - 5 reference files)
- `.claude/auditor-knowledge/` (quality standards, TypeScript best practices, audit checklist)
- `.claude/developer-knowledge/common-mistakes.md` (patterns to check against)

**How It Works**:
1. Reads all changed files
2. Checks against Priority 1 (Critical), Priority 2 (Important), Priority 3 (Best Practices)
3. Cross-references common mistakes catalog
4. Validates against Astro syntax rules
5. Returns prioritized findings with specific fixes

**Audit Categories**:
- ✅ Astro Syntax (code fences, directives, routing, imports)
- ✅ TypeScript Quality (type safety, proper typing)
- ✅ Security (XSS prevention, secret exposure, input validation)
- ✅ Performance (hydration, images, bundle size)
- ✅ Accessibility (semantic HTML, ARIA, keyboard navigation)
- ✅ Best Practices (code organization, error handling, naming)

**What It Doesn't Do**:
- ❌ Implement fixes (reports issues, developer implements)
- ❌ Design architecture
- ❌ Look up documentation

**Example Usage**:
```
"Audit the recent changes to the blog collection implementation"
```
→ Returns: Prioritized report with file:line references and specific fixes

## Sub-Agent Workflow Examples

### Example 1: Integrating GitBook Content

**Step 1 - Architecture** (astro-content-specialist):
```
"Design a GitBook integration for pulling docs from our GitBook space into this Starlight site"
```
→ Returns: Loader architecture, collection design, auth pattern, caching strategy

**Step 2 - API Verification** (astro-docs-specialist):
```
"Verify current API for LoaderContext.meta, generateDigest, and renderMarkdown"
```
→ Returns: Current syntax with documentation URLs

**Step 3 - Implementation** (astro-developer):
```
"Implement the GitBook loader following the architecture plan with verified APIs"
```
→ Creates: Loader file, collection config, env var setup

**Step 4 - Audit** (astro-code-auditor):
```
"Audit the GitBook loader implementation"
```
→ Returns: Audit report with any issues found (syntax, security, performance)

### Example 2: Adding Versioned Docs

**Step 1 - Architecture** (astro-content-specialist):
```
"Design routing for versioned product docs: /products/[product]/[version]/[page]"
```
→ Returns: Route structure, getStaticPaths pattern, version management

**Step 2 - API Verification** (astro-docs-specialist):
```
"Verify syntax for nested dynamic routes and getStaticPaths with multiple params"
```
→ Returns: Current API and examples

**Step 3 - Implementation** (astro-developer):
```
"Implement the versioned routing structure following the architecture"
```
→ Creates: Dynamic route files, getStaticPaths implementations

**Step 4 - Audit** (astro-code-auditor):
```
"Audit the versioned routing implementation focusing on getStaticPaths patterns"
```
→ Returns: Validation of routing correctness and potential issues

### Example 3: Bug Fix

**For simple bugs**:
1. astro-developer: Implement the fix
2. astro-code-auditor: Verify fix is correct (optional but recommended)

**For complex bugs**:
1. astro-docs-specialist: Research the feature causing issues
2. astro-developer: Implement the fix with correct patterns
3. astro-code-auditor: Audit the fix for correctness

### Example 4: Code Audit Workflow

**Scenario**: After implementing a new feature

1. astro-developer completes implementation
2. astro-code-auditor reviews changes
3. Audit report identifies issues (if any)
4. astro-developer fixes reported issues
5. astro-code-auditor re-audits (optional for minor fixes)

## Key Guidelines

**DO**:
✅ Use astro-content-specialist for architecture and planning
✅ Use astro-docs-specialist to verify APIs before implementing
✅ Use astro-developer for all code changes
✅ Use astro-code-auditor after significant implementations
✅ Follow the 4-step workflow for complex features (architecture → verify → implement → audit)
✅ Read agent knowledge bases to understand capabilities

**DON'T**:
❌ Ask astro-docs-specialist to design architecture
❌ Ask astro-content-specialist to write code
❌ Ask astro-developer to design architecture without a plan
❌ Ask astro-code-auditor to implement fixes (it only reports issues)
❌ Skip API verification for unfamiliar features
❌ Implement based on assumptions about APIs
❌ Skip auditing for security-sensitive or complex changes

## Knowledge Base Organization

The knowledge bases are organized by concern for efficient access:

### `.claude/astro-knowledge/` (Syntax Reference)
**Shared between**: developer and auditor
**Purpose**: Authoritative Astro syntax rules
- `astro-syntax-reference.md` - Component structure, templates, expressions
- `astro-directives-reference.md` - All directives usage rules
- `astro-routing-reference.md` - Dynamic routes, getStaticPaths
- `astro-imports-reference.md` - Import patterns and module specifiers
- `astro-configuration-reference.md` - Config validation rules

### `.claude/developer-knowledge/` (Implementation Patterns)
**Shared between**: developer only
**Purpose**: "How to implement correctly"
- `astro-best-practices.md` - Correct patterns for common tasks
- `common-mistakes.md` - Cataloged errors and their fixes
- `starlight-patterns.md` - Starlight-specific implementation

### `.claude/content-knowledge/` (Content Architecture)
**Shared between**: content-specialist and developer
**Purpose**: Content system design patterns
- `content-collections-reference.md` - Collections and schemas
- `content-loader-api.md` - Custom loader implementation
- `routing-pages-reference.md` - Routes and pagination
- `starlight-specific.md` - Starlight features
- `external-data-integration.md` - API loaders and data sources

### `.claude/auditor-knowledge/` (Quality Standards)
**Shared between**: auditor only
**Purpose**: Code quality, security, and best practices
- `audit-checklist.md` - Prioritized audit checklist
- `code-quality-standards.md` - Web development best practices
- `typescript-standards.md` - TypeScript quality standards
