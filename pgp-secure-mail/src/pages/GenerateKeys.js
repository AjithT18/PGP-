import React, { useState } from "react";
import * as openpgp from "openpgp";
import { save, load } from "../utils/localstore";

export default function GenerateKeys() {
  const [name, setName] = useState(load("name"));
  const [email, setEmail] = useState(load("email"));
  const [passphrase, setPassphrase] = useState("");

  const [publicKey, setPublicKey] = useState(load("publicKey"));
  const [privateKey, setPrivateKey] = useState(load("privateKey"));

  async function generateKeys() {
    const { privateKey, publicKey } = await openpgp.generateKey({
      type: "rsa",
      rsaBits: 2048,
      userIDs: [{ name, email }],
      passphrase
    });

    setPublicKey(publicKey);
    setPrivateKey(privateKey);

    save("publicKey", publicKey);
    save("privateKey", privateKey);
    save("name", name);
    save("email", email);
  }

  return (
    <div className="container">
      <h2>Generate Keypair</h2>

      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Passphrase</label>
      <input value={passphrase} onChange={(e) => setPassphrase(e.target.value)} />

      <button onClick={generateKeys}>Generate Keypair</button>

      <label>Your Public Key</label>
      <textarea value={publicKey} readOnly />

      <label>Your Private Key</label>
      <textarea value={privateKey} readOnly />
    </div>
  );
}