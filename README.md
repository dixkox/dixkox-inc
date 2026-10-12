# DIXKOX Inc. website

Single file site: `index.html` (no build step).

## Publish on GitHub Pages
1. On GitHub (account `dixkox`) create a new public repository named `dixkox-inc`.
2. Add file > Upload files: upload `index.html` and `.nojekyll`, then Commit.
3. Settings > Pages > Deploy from a branch > `main` / root > Save.

## Use dixkox.com
Do this at the place where dixkox.com is registered (DNS page). **Do not delete the existing Zoho MX, SPF (TXT) or DKIM records**, or info@dixkox.com stops receiving mail.
- Add four A records for host `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- Add a CNAME for host `www` pointing to `dixkox.github.io`
- In GitHub: Settings > Pages > Custom domain = `dixkox.com`, then tick Enforce HTTPS once it is available.
