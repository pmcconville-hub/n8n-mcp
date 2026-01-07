window.BENCHMARK_DATA = {
  "lastUpdate": 1767795961347,
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
          "id": "60479e0eb47a7c83e77f36e2667a73e2e3ec115a",
          "message": "test: update tests for v2.28.5 behavior changes (v2.28.6) (#470)\n\n- Update n8n-version tests: 'v' prefix now supported in version strings\n- Update n8n-validation tests: empty settings now return minimal defaults\n  { executionOrder: 'v1' } instead of {} to avoid API rejection (Issue #431)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-05T13:38:06+01:00",
          "tree_id": "399afed181c7f2e2552ec90c91b0418f9dcc6382",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/60479e0eb47a7c83e77f36e2667a73e2e3ec115a"
        },
        "date": 1764944792319,
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
          "id": "cdaa29e7a2445f1e84144965a7b803be00f6b760",
          "message": "fix: memory leak in session removal - close MCP server properly (#471) (#472)\n\n- Add close() method to N8NDocumentationMCPServer that:\n  - Calls server.close() (MCP SDK cleanup)\n  - Clears internal cache\n  - Nullifies service references to help GC\n- Update removeSession() to call server.close() before releasing references\n\nRoot cause: removeSession() deleted server from map but didn't call cleanup\nEvidence: Production server memory grew ~1GB in 43 minutes (10% to 35%)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-05T18:30:51+01:00",
          "tree_id": "2e72fdb4e4336b7c17f579b885fbdeae90c0439c",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/cdaa29e7a2445f1e84144965a7b803be00f6b760"
        },
        "date": 1764966401527,
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
          "id": "560e0c5b86d5e44a1537b7c3299cdc5aff3f645e",
          "message": "fix: pass context parameter to handleGetWorkflow in handleValidateWorkflow (#474) (#475)\n\nFixed n8n_validate_workflow tool failing in multi-tenant mode with error:\n\"n8n API not configured. Please set N8N_API_URL and N8N_API_KEY environment variables.\"\n\nRoot cause: handleValidateWorkflow called handleGetWorkflow without the context parameter.\n\nCloses #474\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-07T23:49:21+01:00",
          "tree_id": "07ce244e8e060e3c75a1207dcd2602aafb70d65b",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/560e0c5b86d5e44a1537b7c3299cdc5aff3f645e"
        },
        "date": 1765160786110,
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
          "id": "130dd44ea5e6172870a1d6e2dd2ab789452ea819",
          "message": "chore: update n8n to 1.123.4 and bump version to 2.28.9 (#478)\n\n- Updated n8n from 1.122.4 to 1.123.4\n- Updated n8n-core from 1.121.1 to 1.122.1\n- Updated n8n-workflow from 1.119.1 to 1.120.0\n- Updated @n8n/n8n-nodes-langchain from 1.121.1 to 1.122.1\n- Rebuilt node database with 545 nodes (439 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-08T22:54:50+01:00",
          "tree_id": "667d3a9dd9770565c0aa319255f0bf2110cbc2f5",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/130dd44ea5e6172870a1d6e2dd2ab789452ea819"
        },
        "date": 1765247179050,
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
          "id": "b92e5114634e52aee1fbb477396a21f8c229d470",
          "message": "perf: optimize workflow tool responses for token efficiency (v2.29.0) (#479)\n\n* perf: optimize workflow tool responses for token efficiency (v2.29.0)\n\nReduce response sizes by 75-90% for 4 workflow management tools:\n\n- n8n_update_partial_workflow: Returns {id, name, active, operationsApplied}\n- n8n_create_workflow: Returns {id, name, active, nodeCount}\n- n8n_update_full_workflow: Returns {id, name, active, nodeCount}\n- n8n_delete_workflow: Returns {id, name, deleted: true}\n\nAI agents can use n8n_get_workflow with mode 'structure' if they need\nto verify the current workflow state after operations.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update tests and add nodeCount to partial update response\n\n- Fix handleCreateWorkflow test to expect minimal response\n- Fix handleDeleteWorkflow test to expect minimal response\n- Add nodeCount to n8n_update_partial_workflow response for consistency\n- Update documentation and CHANGELOG\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update handlers-workflow-diff tests for minimal response\n\nUpdate 3 more tests that expected full workflow in response:\n- should apply diff operations successfully\n- should activate workflow after successful update\n- should deactivate workflow after successful update\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update integration tests to use minimal response format\n\nIntegration tests now verify minimal response format and use\nclient.getWorkflow() to fetch actual workflow state for verification.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n* fix: update create/update workflow integration tests for minimal response\n\nIntegration tests now verify minimal response and use client.getWorkflow()\nto fetch actual workflow state for detailed verification.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n* fix: add type assertions to fix TypeScript errors in tests\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-09T16:36:17+01:00",
          "tree_id": "6120e3cad0bd15cbc7b0ab855182413de487bcb7",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/b92e5114634e52aee1fbb477396a21f8c229d470"
        },
        "date": 1765311966160,
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
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "c6f3733fbd6de37b1514f5800cb8d43bded30eee",
          "message": "fix: upgrade npm for OIDC trusted publishing support\n\nOIDC trusted publishing requires npm >= 11.5.1, but Node.js 20/22\nships with npm 10.x. Added explicit npm upgrade step before publish.\n\nAlso upgraded to Node.js 22 for better npm compatibility.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-12T14:17:23+01:00",
          "tree_id": "9ba01f9525d17511d27acffe82237b3ec98b5e23",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/c6f3733fbd6de37b1514f5800cb8d43bded30eee"
        },
        "date": 1765549567319,
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
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "551445bcd5b8bd16fb273a3a129142e50401ed99",
          "message": "fix: revert to Node 20 and use granular NPM token\n\nNPM classic tokens were revoked on Dec 9, 2025. OIDC trusted publishing\nrequires npm >= 11.5.1 which caused lockfile sync issues with npm ci.\n\nReverted to Node 20 with granular access token approach:\n- Removed OIDC permissions block\n- Removed npm upgrade step\n- Restored NODE_AUTH_TOKEN usage\n- Removed --provenance flag\n\nUser created new granular token with \"Bypass 2FA\" enabled.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-12T16:22:04+01:00",
          "tree_id": "ca956e8b4150654d91afa6662138a60406f46e99",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/551445bcd5b8bd16fb273a3a129142e50401ed99"
        },
        "date": 1765571158397,
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
          "id": "0f13e7aeee497d03c80e2a2e50227aed1e57a0a8",
          "message": "chore: update n8n to 2.0.2 and bump version to 2.30.0 (#487)\n\n- Updated n8n from 1.123.4 to 2.0.2\n- Updated n8n-core from 1.122.1 to 2.0.1\n- Updated n8n-workflow from 1.120.0 to 2.0.1\n- Updated @n8n/n8n-nodes-langchain from 1.122.1 to 2.0.1\n- Rebuilt node database with 541 nodes (435 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-15T23:34:49+01:00",
          "tree_id": "f137970fb5ce3f036135bb967cf55180407a7f4c",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/0f13e7aeee497d03c80e2a2e50227aed1e57a0a8"
        },
        "date": 1765851998030,
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
          "id": "562f4b0c4ecb98d3e9c8993ea4a911f64a5d7c40",
          "message": "feat: add _cnd conditional operator support and n8n 2.0+ executeWorkflowTrigger fix (#495)\n\n* feat: add _cnd conditional operator support and n8n 2.0+ executeWorkflowTrigger fix\n\nAdded:\n- Support for all 12 _cnd operators in displayOptions validation (eq, not, gte, lte, gt, lt, between, startsWith, endsWith, includes, regex, exists)\n- Version-based visibility checking with @version in config\n- 42 new unit tests for _cnd operators\n\nFixed:\n- n8n 2.0+ breaking change: executeWorkflowTrigger now recognized as activatable trigger\n- Removed outdated validation blocking Execute Workflow Trigger workflows\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: harden _cnd operators and add edge case tests\n\n- Add try/catch for invalid regex patterns in regex operator\n- Add structure validation for between operator (from/to fields)\n- Add 5 new edge case tests for invalid inputs\n- Bump version to 2.30.1\n- Resolve merge conflict with main (n8n 2.0 update)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: update workflow activation tests for n8n 2.0+ executeWorkflowTrigger\n\n- Update test to expect SUCCESS for executeWorkflowTrigger-only workflows\n- Remove outdated assertion about \"executeWorkflowTrigger cannot activate\"\n- executeWorkflowTrigger is now a valid activatable trigger in n8n 2.0+\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: skip flaky versionId test pending n8n 2.0 investigation\n\nThe versionId behavior appears to have changed in n8n 2.0 - simple\nname updates may no longer trigger versionId changes. This needs\ninvestigation but is unrelated to the _cnd operator PR.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-17T18:37:55+01:00",
          "tree_id": "77fb60c370c021171dab06a01f19e0d523c926ba",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/562f4b0c4ecb98d3e9c8993ea4a911f64a5d7c40"
        },
        "date": 1766003189879,
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
          "id": "fa216e4d1375dfec7e2de424ee0c05a3869db65c",
          "message": "fix: restore templates database with 2,768 workflow templates (v2.30.2) (#502)\n\n- Restored templates from git history (commit 03a4b07)\n- Updated nodes schema with tool variant columns\n- Database now contains 803 nodes and 2,768 templates\n- Compatible with n8n 2.0.2\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-21T14:11:57+01:00",
          "tree_id": "acd674c606d60c4aff7260b253fb1d2d0c55d08a",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/fa216e4d1375dfec7e2de424ee0c05a3869db65c"
        },
        "date": 1766327178228,
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
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "a40f6a5077001fbfbdc7529663a4ebcba608f5e6",
          "message": "test: make templates database validation critical instead of optional\n\nPreviously, the CI test only warned when templates were missing but\nalways passed. This allowed the templates database to be lost without\nfailing CI. Now the test will fail if templates are empty or below\nthe expected count of 2500.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-21T15:33:25+01:00",
          "tree_id": "8c445e411ac900ad406f2a5d351e94109f9201ff",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/a40f6a5077001fbfbdc7529663a4ebcba608f5e6"
        },
        "date": 1766348784720,
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
          "id": "705d31c35e93f868b58add97f074500857368381",
          "message": "fix: mcpTrigger nodes no longer flagged as disconnected (#503) (#506)\n\nFixed validation bug where mcpTrigger nodes were incorrectly flagged as\n\"disconnected nodes\" when using n8n_update_partial_workflow or\nn8n_update_full_workflow. This blocked ALL updates to MCP server workflows.\n\nChanges:\n- Extended validateWorkflowStructure() to check all 7 connection types\n  (main, error, ai_tool, ai_languageModel, ai_memory, ai_embedding, ai_vectorStore)\n- Updated trigger node validation to accept either outgoing OR inbound connections\n- Added 7 new tests covering all AI connection types\n\nFixes #503\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-23T18:50:55+01:00",
          "tree_id": "bbe4aa26da9600ff36b8951b04e6cf8434e3f51a",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/705d31c35e93f868b58add97f074500857368381"
        },
        "date": 1766521576707,
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
          "id": "20663dad0d3b4064796ccf50ef3db27b55b68b85",
          "message": "chore: update n8n to 2.1.4 and bump version to 2.31.2 (#507)\n\n- Updated n8n from 2.0.2 to 2.1.4\n- Updated n8n-core from 2.0.1 to 2.1.3\n- Updated n8n-workflow from 2.0.1 to 2.1.1\n- Updated @n8n/n8n-nodes-langchain from 2.0.1 to 2.1.3\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Refreshed template database with 2,737 workflow templates from n8n.io\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-24T15:15:22+01:00",
          "tree_id": "03f1ad88a37931c6464c4de9c8af3d3294aa246c",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/20663dad0d3b4064796ccf50ef3db27b55b68b85"
        },
        "date": 1766586386619,
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
          "id": "808088f25eccf3cf73a90017af9f5abdd1893886",
          "message": "docs: fix connection keys documentation to say \"node names\" not \"node IDs\" (#510) (#511)\n\nThe documentation incorrectly stated connection keys should be \"node IDs\"\nwhen n8n actually requires \"node names\". This caused workflow creation\nfailures for AI-generated workflows.\n\nChanges:\n- tools-n8n-manager.ts: \"Keys are source node names (the name field, not id)\"\n- n8n-create-workflow.ts: \"Keys are source node names (not IDs)\"\n- Fixed example: \"Webhook\"/\"Slack\" instead of \"webhook_1\"/\"slack_1\"\n- get-template.ts: clarified \"source node names\"\n\nCloses #510\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-26T14:50:58+01:00",
          "tree_id": "9110d3624af99a21e45601fe3c7e9c9248362159",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/808088f25eccf3cf73a90017af9f5abdd1893886"
        },
        "date": 1766759202354,
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
          "id": "f10772a9d28f67fca6e14ccf7477af9d99651830",
          "message": "fix: preserve workflow data during serialization (Issue #517) (#519)\n\nFixed a critical bug where workflow mutation data was corrupted during\nserialization to Supabase. The recursive toSnakeCase() function was\nconverting nested workflow data, mangling:\n- Connection keys (node names like \"Webhook\" → \"_webhook\")\n- Node field names (typeVersion → type_version)\n\nSolution: Replace recursive conversion with selective mutationToSupabaseFormat()\nthat only converts top-level field names to snake_case while preserving\nnested workflow data exactly as-is.\n\nImpact:\n- 98.9% of workflow mutations had corrupted data\n- Deployability rate improved from ~21% to ~68%\n\nChanges:\n- src/telemetry/batch-processor.ts: New selective converter\n- tests/unit/telemetry/batch-processor.test.ts: 3 new regression tests\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-02T10:44:13+01:00",
          "tree_id": "b2f3780bf0bc44b0edbd7e423710a1f87f21b11b",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/f10772a9d28f67fca6e14ccf7477af9d99651830"
        },
        "date": 1767364004444,
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
            "email": "bthompson@maillocker.net",
            "name": "Bryan Thompson",
            "username": "triepod-ai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2713db6d106f30554f3f144c548504c2097f2741",
          "message": "feat: add MCP tool annotations to all 20 tools (#512)\n\n* feat: add MCP tool annotations to all 20 tools\n\nAdd MCP tool annotations per specification to help AI assistants\nunderstand tool behavior and capabilities.\n\nDocumentation tools (7):\n- tools_documentation, search_nodes, get_node, validate_node,\n  get_template, search_templates, validate_workflow\n- All marked readOnlyHint=true (local database queries)\n\nManagement tools (13):\n- n8n_create_workflow, n8n_get_workflow, n8n_update_full_workflow,\n  n8n_update_partial_workflow, n8n_delete_workflow, n8n_list_workflows,\n  n8n_validate_workflow, n8n_autofix_workflow, n8n_test_workflow,\n  n8n_executions, n8n_health_check, n8n_workflow_versions,\n  n8n_deploy_template\n- All marked openWorldHint=true (n8n API access)\n- Destructive operations (delete_workflow, executions delete,\n  workflow_versions delete/truncate) marked destructiveHint=true\n\nAnnotations follow MCP spec:\nhttps://spec.modelcontextprotocol.io/specification/2025-03-26/server/tools/#annotations\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: add idempotentHint to all read-only tools\n\nAdds idempotentHint: true annotation to all read-only tools that produce\nthe same output when called multiple times:\n- 7 documentation tools (tools.ts)\n- 4 management tools (tools-n8n-manager.ts): n8n_get_workflow,\n  n8n_list_workflows, n8n_validate_workflow, n8n_health_check\n\nAlso adds trailing newline to tools-n8n-manager.ts.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: add idempotentHint to update operations, bump to 2.31.5\n\nAdds idempotentHint: true to update operations that produce the same\nresult when called repeatedly with the same arguments:\n- n8n_update_full_workflow\n- n8n_update_partial_workflow\n- n8n_autofix_workflow\n\nAlso bumps version to 2.31.5 and updates CHANGELOG.md with complete\ndocumentation of all MCP tool annotations added in this PR.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: triepod-ai <noreply@github.com>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>",
          "timestamp": "2026-01-02T15:48:47+01:00",
          "tree_id": "2699ee78d2f42d632b1937c421986a2d38a7f1b7",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/2713db6d106f30554f3f144c548504c2097f2741"
        },
        "date": 1767385602695,
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
          "id": "25cb8bb4559a78e36e0f3c32e3d78a807b107abf",
          "message": "chore: update n8n to 2.1.5 and bump version to 2.31.6 (#521)\n\n- Updated n8n from 2.1.4 to 2.1.5\n- Updated n8n-core from 2.1.3 to 2.1.4\n- Updated @n8n/n8n-nodes-langchain from 2.1.3 to 2.1.4\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-04T10:43:35+01:00",
          "tree_id": "458ef1376f2cfc6d2a39a9dc5f9586bc418051ca",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/25cb8bb4559a78e36e0f3c32e3d78a807b107abf"
        },
        "date": 1767536760691,
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
          "id": "7b0ff990ec656b3bbd2f37b763f2206a1468a577",
          "message": "chore: update n8n to 2.2.3 and bump version to 2.31.7 (#523)\n\n- Updated n8n from 2.1.5 to 2.2.3\n- Updated n8n-core from 2.1.4 to 2.2.2\n- Updated n8n-workflow from 2.1.1 to 2.2.2\n- Updated @n8n/n8n-nodes-langchain from 2.1.4 to 2.2.2\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-06T13:18:56+01:00",
          "tree_id": "66c78d7c4efc3ae032888f5da73d96cf5a0076be",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/7b0ff990ec656b3bbd2f37b763f2206a1468a577"
        },
        "date": 1767709577837,
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
          "id": "861005eeedf880be2489bc197b85a385735c0356",
          "message": "fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524) (#525)\n\n* fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524)\n\nThe fixed HTTP implementation does not support SSE streaming required\nby clients like OpenAI Codex. This commit deprecates USE_FIXED_HTTP\nand makes SingleSessionHTTPServer the default.\n\nChanges:\n- Add deprecation warnings in src/mcp/index.ts and src/http-server.ts\n- Remove USE_FIXED_HTTP from docker-compose.yml and Dockerfile.railway\n- Update .env.example with deprecation notice\n- Rename npm script to start:http:fixed:deprecated\n- Update all documentation to remove USE_FIXED_HTTP references\n- Mark test case as deprecated\n\nUsers should unset USE_FIXED_HTTP to use the modern SingleSessionHTTPServer\nwhich supports both JSON-RPC and SSE streaming.\n\nCloses #524\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* chore: bump version to 2.31.8 and add CHANGELOG entry\n\n- Fix comment inaccuracy: \"deprecated\" not \"deprecated and removed\"\n- Bump version from 2.31.7 to 2.31.8\n- Add CHANGELOG entry documenting USE_FIXED_HTTP deprecation\n- Update all deprecation messages to reference v2.31.8\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-07T13:42:16+01:00",
          "tree_id": "1675efb5c222304f76aa99a4ee1dd8396056b1ac",
          "url": "https://github.com/pmcconville-hub/n8n-mcp/commit/861005eeedf880be2489bc197b85a385735c0356"
        },
        "date": 1767795960908,
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