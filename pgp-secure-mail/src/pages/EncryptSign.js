import React, { useState } from "react";
import * as openpgp from "openpgp";
import { load } from "../utils/localstore";

export default function EncryptSign() {
  const [recipientPub, setRecipientPub] = useState("");
  const [message, setMessage] = useState("");
  const [pass, setPass] = useState("");

  const [output, setOutput] = useState("");

  async function encryptAndSign() {
    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({ armoredKey: load("privateKey") }),
      passphrase: pass,
    });

    const encrypted = await openpgp.encrypt({
      message: await openpgp.createMessage({ text: message }),
      encryptionKeys: await openpgp.readKey({ armoredKey: recipientPub }),
      signingKeys: privateKey
    });

    setOutput(encrypted);
  }

  return (
    <div className="container">
      <h2>Encrypt & Sign</h2>

      <label>Recipient Public Key</label>
      <textarea value={recipientPub} onChange={(e) => setRecipientPub(e.target.value)} />

      <label>Message</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

      <label>Your Key Passphrase</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} />

      <button onClick={encryptAndSign}>Encrypt & Sign</button>

      <label>Encrypted Message</label>
      <textarea value={output} readOnly />
    </div>
  );
}