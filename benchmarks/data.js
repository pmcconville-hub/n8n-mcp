window.BENCHMARK_DATA = {
  "lastUpdate": 1764728783490,
  "repoUrl": "https://github.com/pmcconville-hub/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "devangkantharia@gmail.com",
            "name": "devangkantharia",
            "username": "devangkantharia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f5a8571427a6ce3dc614c5435f61925edebb376",
          "message": "Added Antigravity Setup Instructions (#452)\n\n* Add Antigravity setup documentation\n\nDocument the setup process for Antigravity with n8n MCP server, including preconditions, installation steps, configuration, and best practices.\n\n* Add Antigravity integration guide to README\n\nAdded a new section for Antigravity integration.",
          "timestamp": "2025-11-29T00:56:12+01:00",
          "tree_id": "d1cc0c90e0cdbfefde9f4021b0293f4c75643384",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/2f5a8571427a6ce3dc614c5435f61925edebb376"
        },
        "date": 1764383181259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9b45688718cdb186c2018d85f0acd19fb48148",
          "message": "fix: pin MCP SDK version in Docker build files (v2.27.1) (#456)\n\n* fix: pin MCP SDK version in Docker build files (#454)\n\nThe Docker image 2.27.0 was missing the Zod fix from #450 because:\n- package.runtime.json had @modelcontextprotocol/sdk@^1.13.2\n- Dockerfile builder had @modelcontextprotocol/sdk@^1.12.1\n\nBoth now use the pinned version 1.20.1 (no caret) to match package.json.\nAlso pinned zod@3.24.1 in Dockerfile for consistency.\n\nFixes #454\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* chore: bump version to 2.27.1 and update CHANGELOG\n\n- Version bump from 2.27.0 to 2.27.1\n- Added CHANGELOG entry for #454 fix (Docker SDK version)\n- Added missing CHANGELOG entry for 2.27.0 (n8n_deploy_template)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-11-29T10:13:16+01:00",
          "tree_id": "e744e19e2463d673547bb5c40cc7f9a46dc364ad",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/7d9b45688718cdb186c2018d85f0acd19fb48148"
        },
        "date": 1764426376379,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddf95567591a5b0a56e9df393e368969536fce3e",
          "message": "feat: n8n_deploy_template deploy-first with auto-fix (v2.27.2) (#457)\n\n* feat: n8n_deploy_template deploy-first with auto-fix (v2.27.2)\n\nImproved template deployment to deploy first, then automatically fix common\nissues. This dramatically improves deployment success rates for templates\nwith expression format issues.\n\nKey Changes:\n- Deploy-first behavior: templates deployed before validation\n- Auto-fix runs automatically after deployment (configurable via `autoFix`)\n- Returns `fixesApplied` array showing all corrections made\n- Fixed expression validator \"nested expressions\" false positive\n- Fixed Zod schema missing `typeversion-upgrade` and `version-migration` fix types\n\nTesting: 87% deployment success rate across 15 diverse templates\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n* fix: address code review findings for deploy template\n\nCode review fixes:\n- CRITICAL: Update test schema to use `autoFix` instead of old `validate` parameter\n- WARNING: Add `AppliedFix` and `AutofixResultData` interfaces for type safety\n- WARNING: Add `autoFixStatus` field to response (success/failed/skipped)\n- WARNING: Report auto-fix failure in response message\n\nChanges:\n- tests/unit/mcp/handlers-deploy-template.test.ts: Fixed schema and test cases\n- src/mcp/handlers-n8n-manager.ts: Added type definitions, autoFixStatus tracking\n- src/mcp/tool-docs/workflow_management/n8n-deploy-template.ts: Updated docs\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-11-29T16:10:14+01:00",
          "tree_id": "56b1723f2108688a5528e4ad0ca621e73aa41495",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/ddf95567591a5b0a56e9df393e368969536fce3e"
        },
        "date": 1764448014544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3188d209b78ad8267fb0afb70bf3050174116230",
          "message": "fix: AI connection type propagation and get_node improvements (v2.28.1) (#461)\n\n* fix: AI connection type propagation and get_node improvements (v2.28.1)\n\nBug fixes:\n- Issue #458: addConnection now preserves AI connection types (ai_tool, ai_memory, ai_languageModel) instead of defaulting to 'main'\n- Fixed false positive \"AI Agent has no tools connected\" validation warning\n\nEnhancements:\n- Added expectedFormat field to resourceLocator properties in get_node output\n- Added versionNotice field to make typeVersion more prominent\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* test: add missing test coverage for PR #461 improvements\n\n- Added test for AI Agent validation positive case (tools properly connected)\n- Added 3 tests for expectedFormat on resourceLocator properties\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-01T18:54:15+01:00",
          "tree_id": "22bdf426543cce8d7ff7a2cacc9e70eb68994bed",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/3188d209b78ad8267fb0afb70bf3050174116230"
        },
        "date": 1764620793732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef9b6f634145fcb9434894c78ae7e082b9a88581",
          "message": "fix: n8n_test_workflow webhookId resolution and form handling (v2.28.2) (#462)",
          "timestamp": "2025-12-01T22:33:25+01:00",
          "tree_id": "026244aca6861837436dd0bfadb89a84776aa77e",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/ef9b6f634145fcb9434894c78ae7e082b9a88581"
        },
        "date": 1764642402303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "527e9874ab6b26b3dbae131f5259f81bac1cd1ab",
          "message": "chore: update n8n to 1.122.4 and remove ludwig's templates (v2.28.3) (#463)\n\n- Updated n8n from 1.121.2 to 1.122.4\n- Updated n8n-core from 1.120.1 to 1.121.1\n- Updated n8n-workflow from 1.118.1 to 1.119.1\n- Updated @n8n/n8n-nodes-langchain from 1.120.1 to 1.121.1\n- Rebuilt node database with 544 nodes (438 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Removed 7 templates from creator \"ludwig\" at author's request (IDs: 2795, 2816, 2825, 2850, 2869, 2939, 3847)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-03T00:11:41+01:00",
          "tree_id": "72f7371af9598b14c1914c2b5a82b75d2b9d4851",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/527e9874ab6b26b3dbae131f5259f81bac1cd1ab"
        },
        "date": 1764728783086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}