import React, { useState } from "react";
import * as openpgp from "openpgp";
import { load } from "../utils/localstore";

export default function DecryptVerify() {
  const [encText, setEncText] = useState("");
  const [pass, setPass] = useState("");
  const [senderPub, setSenderPub] = useState("");

  const [plain, setPlain] = useState("");
  const [verify, setVerify] = useState("");

  async function decryptMsg() {
    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({ armoredKey: load("privateKey") }),
      passphrase: pass,
    });

    const result = await openpgp.decrypt({
      message: await openpgp.readMessage({ armoredMessage: encText }),
      verificationKeys: await openpgp.readKey({ armoredKey: senderPub }),
      decryptionKeys: privateKey,
    });

    setPlain(result.data);
    setVerify(result.signatures[0].verified ? "Signature: VALID ✅" : "Signature: INVALID ❌");
  }

  return (
    <div className="container">
      <h2>Decrypt & Verify</h2>

      <label>Encrypted Message</label>
      <textarea value={encText} onChange={(e) => setEncText(e.target.value)} />

      <label>Your Passphrase</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} />

      <label>Sender Public Key</label>
      <textarea value={senderPub} onChange={(e) => setSenderPub(e.target.value)} />

      <button onClick={decryptMsg}>Decrypt</button>

      <label>Decrypted Plaintext</label>
      <textarea value={plain} readOnly />

      <label>Signature Verification</label>
      <input value={verify} readOnly />
    </div>
  );
}