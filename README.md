# For Kannammaa ❤️ — Birthday Website

A mobile-first, single-page birthday surprise made with HTML, CSS, and JavaScript.

## Preview locally

1. Extract the ZIP file.
2. Open `index.html` in a modern browser.
3. On the login screen, enter the password configured in `script.js`. The starter password is `kannammaa1111`.

For a more realistic local preview, use VS Code's Live Server extension or Python's built-in static server:
- Open a terminal in this folder.
- Run `python -m http.server 8000`
- Visit `http://localhost:8000`

## Personalise before publishing

### 1. Change the login password
Open `script.js` and edit `CONFIG.password`. Use a word or date meaningful to you both.

**Important:** this is a playful front-end gate, not secure authentication. The password is visible in the downloaded JavaScript. Do not use it to protect confidential photos or information.

### 2. Add your real photos
In `index.html`, find the three `.memory-card` blocks. Replace each image URL in `src="..."` with a photo you are allowed to share. You can create a folder named `images` and use paths such as `images/our-first-photo.jpg`. Update the alt text and captions too.

### 3. Personalise the letter and final message
Edit the paragraphs inside `#letterContent` and `#finalMessage` in `index.html`. Your own specific memories and wording will make the page much more meaningful.

### 4. Add background music
Use an audio file you own or have permission to use. Put it in this folder as `music.mp3`. In `index.html`, find the `<audio id="backgroundMusic">` element and uncomment this line inside it:
`<source src="music.mp3" type="audio/mpeg">`
The music button works after she taps it; browsers generally block autoplay with sound.

### 5. Birthday date
The date is set to 2026-11-11 in both `index.html` (footer) and `script.js`. The page is designed to remain usable before and after the date.

## Publish free with GitHub Pages

1. Sign in to GitHub and create a new repository.
2. Upload `index.html`, `style.css`, `script.js`, and any image/music assets you added.
3. Open the repository's **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site and open the provided URL.
6. Test the URL on a phone, including the login, letter, cake button, and final surprise.

You can also use another static host that supports HTML/CSS/JS.

## Notes
- Google Fonts and the sample Unsplash photos require internet access. For a fully self-contained site, download permitted fonts/photos and serve them locally.
- No analytics, external JavaScript libraries, or server are used.
- This website does not store the password or user input.
