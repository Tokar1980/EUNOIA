# EUNOIA website

Static, GitHub-ready website for the Jean Monnet Module **European Union New Order for Integrated Action (EUNOIA)**.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload all files and folders from this package to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Updating content
- Navigation/header/footer are repeated in each HTML page for maximum portability.
- Replace disabled social links in the HTML files when the LinkedIn and X pages are ready.
- Add downloadable OER files under `assets/` and link them from `resources.html`.
- Add news/event cards to `news.html`.

No build system or external dependencies are required.


## Updating the shared footer
The footer is generated centrally by `assets/js/site.js`, so you no longer need to edit every HTML page.

To activate the social links, open `assets/js/site.js` and edit only these two values near the top:

```js
linkedinUrl: "https://www.linkedin.com/...",
xUrl: "https://x.com/..."
```

Leave either value empty (`""`) to keep that network displayed as “coming soon”. The contact email and common footer text are also maintained in this file.
