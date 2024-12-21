import { useState, useEffect } from "react";
import { HttpAgent, Principal } from "@dfinity/agent";

export default function Buy({ recipient, amount }) {
  const [status, setStatus] = useState("");
  const [amountInput, setAmountInput] = useState(amount);

  useEffect(() => {
    setAmountInput(amount);
  }, [amount]);

  const sendICP = async () => {
    if (!recipient || !amountInput || isNaN(amountInput) || Number(amountInput) <= 0) {
      setStatus("Enter valid recipient and amount");
      return;
    }

    try {
      if (!window.ic?.plug) {
        setStatus("Plug Wallet not installed. Please install it to proceed.");
        return;
      }

      const isConnected = await window.ic.plug.requestConnect({
        whitelist: ["rkp4c-7iaaa-aaaaa-aaaca-cai"],
      });
      if (!isConnected) {
        setStatus("Failed to connect to Plug Wallet");
        return;
      }

      const recipientPrincipal = Principal.fromText(recipient);

      const transferRequest = {
        to: recipientPrincipal.toText(),
        amount: Number(amountInput) * 1e8, 
      };

      const response = await window.ic.plug.requestTransfer(transferRequest);

      if (response) {
        setStatus(`Payment successful! Transaction ID: ${response.txId}`);
      } else {
        setStatus("Payment failed. Please try again.");
      }
    } catch (error) {
      setStatus("Payment failed: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ICP Payment</h1>
      <input
        type="text"
        placeholder="Recipient Principal ID"
        value={recipient}
        readOnly
      />
      <input
        type="text"
        placeholder="Amount in ICP"
        value={amountInput}
        onChange={(e) => setAmountInput(e.target.value)}
      />
      <button onClick={sendICP}>Send Payment</button>
      {status && <p>{status}</p>}
    </div>
  );
}
