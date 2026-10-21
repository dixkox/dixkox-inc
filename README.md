# DIXKOX Inc. website

Live site: **https://dixkox.com**
Repository: https://github.com/dixkox/dixkox-inc

A static multi-page site (no build step): 17 HTML pages plus `styles.css`, `script.js`, images, `sitemap.xml` and `robots.txt`.

## Files that must always stay
- `CNAME` contains `dixkox.com` and connects the domain. Do not delete or edit it.
- `.nojekyll` tells GitHub to publish the files exactly as they are.

## How to update the site
1. Unzip the new website zip on your computer.
2. Open https://github.com/dixkox/dixkox-inc/upload/main
3. Select all files in the unzipped folder (Ctrl+A), drag them in, click **Commit changes**. Upload once only; files with the same name are replaced automatically.
4. Wait for the green tick in the **Actions** tab, then open https://dixkox.com in a private window.

## GitHub Pages and DNS (already set up)
- Settings > Pages: Deploy from a branch, `main`, `/ (root)`. Custom domain `dixkox.com`, Enforce HTTPS ticked.
- DNS at GoDaddy: four A records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a CNAME for `www` to `dixkox.github.io`. Keep the Zoho MX, SPF and DKIM records so info@dixkox.com keeps receiving mail.

## Language switcher
The globe button in the top bar translates every page with Google Translate. It works on the live site only.
