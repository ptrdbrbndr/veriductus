#!/usr/bin/env bash
set -e

echo "=== Vibe Check — Veriductus ==="
echo "Base URL: ${VIBE_BASE_URL:-http://localhost:3001}"
echo ""

# Zorg dat browsers geïnstalleerd zijn
npx playwright install chromium --with-deps 2>/dev/null || true

# Run tests
npx playwright test --reporter=list

echo ""
echo "=== Vibe Check klaar ==="
