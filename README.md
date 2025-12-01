PGP Secure Email – A Layered Email Security System Using PGP Encryption

This project demonstrates a lightweight and user-friendly email security system built using PGP (Pretty Good Privacy). It allows users to generate keypairs, encrypt and digitally sign messages, and decrypt and verify incoming messages—all directly in the browser using OpenPGP.js.
The goal of this application is to show how layered security techniques like asymmetric encryption, hybrid cryptography, and digital signatures can provide strong protection for modern communication.

✨ Features
🔐 1. Generate PGP Keypair

Users can create their own RSA public–private keys.

Keys are generated locally inside the browser for maximum privacy.

Public key can be shared; private key stays with the user.

✉️ 2. Encrypt & Sign Messages

Enter the recipient’s public key and your message.

Your private key passphrase is used for signature creation.

The system outputs a fully encrypted and digitally signed PGP message.

🔎 3. Decrypt & Verify Messages

Paste an incoming encrypted message.

Enter your passphrase to unlock your private key.

Provide the sender’s public key to verify their signature.

The decrypted plaintext is displayed only if verification succeeds.

🧰 Tech Stack

React.js – Frontend framework

OpenPGP.js – PGP encryption and signing library

JavaScript / HTML / CSS – UI and logic

Local Storage / In-Memory – Temporary key handling

📁 Project Structure
pgp-secure-email/
│── public/
│── src/
│    ├── components/
│    │     ├── GenerateKeys.js
│    │     ├── EncryptSign.js
│    │     ├── DecryptVerify.js
│    ├── App.js
│    ├── index.js
│── package.json
│── .gitignore
│── README.md

🚀 How to Run the Project Locally

Clone the repository:

git clone <your-repo-url>


Install dependencies:

npm install


Start the development server:

npm start


Open the app in the browser:
👉 http://localhost:3000/

🔒 Security Notes

All encryption, decryption, signing, and verification happen client-side.

Private keys never leave the browser session.

No backend server is required for cryptographic operations.

This project is intended for educational and demonstration purposes.

📘 Purpose of the Project

This application was developed as part of a study on Layered Email Security, focusing on:

End-to-end encryption

Digital signatures

Public–private key management

Decentralized security without certificate authorities

It aims to show how PGP can protect communication in distributed and cloud-based environments.

📄 Screenshots

Generate Keypair

Encrypt & Sign Message

Decrypt & Verify Message

(Add your images here)

📝 License

This project is open-source and free to use for learning and research.
