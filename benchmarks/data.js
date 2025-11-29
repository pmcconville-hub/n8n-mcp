window.BENCHMARK_DATA = {
  "lastUpdate": 1764426376709,
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
      }
    ]
  }
}