## Known Security Vulnerabilities (as of 2025-03-29)

The following vulnerabilities exist in development dependencies and are being tracked:

1. **High Severity (6)**

   - Package: `nth-check` (via `svgo/css-select`)
   - Issue: Inefficient Regular Expression Complexity
   - Risk: Build-time only, no runtime impact
   - Tracking: https://github.com/advisories/GHSA-rp65-9cf3-cjxr

2. **Moderate Severity (2)**
   - Package: `postcss` (via `resolve-url-loader`)
   - Issue: PostCSS line return parsing error
   - Risk: Build-time only, no runtime impact
   - Tracking: https://github.com/advisories/GHSA-7fh5-64p2-3v2j

**Mitigation Plan**:

- Monitor for updates to `react-scripts` that address these dependencies
- Re-evaluate when upgrading React or build tooling
