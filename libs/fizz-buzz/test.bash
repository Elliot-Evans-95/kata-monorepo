#!/usr/bin/env sh

if npm run test fizz-buzz 2>&1 | grep -q "FAIL"; then
    echo "yes"
else
    echo "no"
fi
