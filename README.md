# Upwork review sharing site

This project is a simple web-based tool that allows freelancers to capture and save client feedback from Upwork as an image. The site ensures that the feedback text is properly formatted and can be saved as a PNG file. Upwork only allows 162 characters in feedback image, and after that, it automatically adds  `...`. This site helps Upwork freelancers capture feedback up to 1008 characters for their portfolio, sharing with friends, or networking purposes.

## Features
- Real-time Feedback Input: Users can paste client feedback, and the tool automatically adjusts formatting.
- Unlimited Text Length: Automatically adjusts the image height to fit feedback of any length, ensuring the full review is always captured without truncation.
- Optional QR Code: Automatically generates a scannable QR code linking to your Upwork profile if you provide a URL, making it easy for potential clients to find and hire you. The QR code is hidden if no link is provided.
- Download as Image**: Uses `html2canvas` to convert the feedback container into an image and save it.
- User-friendly UI**: Simple and clean interface with validation for empty feedback.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/georgegognadze/upworkshare.git
   ```
2. Navigate to the project folder:
   ```bash
   cd upworkshare
   ```
3. Open `index.html` in your browser.

## Usage
1. Paste the client’s feedback into the input field.
2. Click the **Submit** button to preview the formatted feedback.
3. Click **Save Image** to download the feedback as a PNG file.
4. Click **Go Back** to enter a new feedback.

## Technologies Used
- **HTML, CSS, JavaScript**
- **html2canvas** for screenshot generation

## Contributing
If you’d like to contribute, feel free to fork the repository and submit a pull request with improvements.

## License
This project is open-source and available under the [MIT License](LICENSE).

---
Feel free to reach out if you have any suggestions or improvements!

