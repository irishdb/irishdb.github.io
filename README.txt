JORDAN REYES — PERSONAL SITE
=============================

FOLDER STRUCTURE
----------------
index.html      The whole site (one page, five sections: Bio, Teaching, News, CV, Contact)
css/style.css   All styling
js/main.js      Scroll-spy behavior for the sidebar nav
cv.pdf          Placeholder — replace with your real CV, keep the filename "cv.pdf"

TO PUBLISH
----------
This is a static site — no build step, no server required.
- GitHub Pages: push this folder to a repo, enable Pages, done.
- Netlify / Vercel: drag-and-drop this folder into their dashboard.
- University server: upload via FTP/SFTP to your public_html or equivalent.

WHAT TO EDIT
------------
1. Open index.html in a text editor and replace every [bracketed placeholder]
   with your real info (name is already filled in as an example — change it).
2. Replace cv.pdf with your actual CV (same filename, or update the href
   in index.html under the CV section if you rename it).
3. Links marked with class="placeholder-link" (Scholar, GitHub, ORCID) still
   point to "#". Search index.html for placeholder-link and swap the href="#"
   for your real profile URLs, e.g.:
     href="https://scholar.google.com/citations?user=YOUR_ID"
     href="https://github.com/yourhandle"
     href="https://orcid.org/0000-0000-0000-0000"
   Once a link is real, you can also just delete the class="placeholder-link"
   attribute (it only adds a dashed underline as a visual reminder).
4. Update the email address in two places: the mailto: link in the sidebar
   and the one in the Contact section.

Everything else (fonts, colors, layout, scroll behavior) is ready to use as-is.
