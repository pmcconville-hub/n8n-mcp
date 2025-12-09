window.BENCHMARK_DATA = {
  "lastUpdate": 1765311966934,
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
      }
    ]
  }
}