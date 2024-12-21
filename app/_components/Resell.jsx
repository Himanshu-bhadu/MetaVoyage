import { useEffect, useState } from "react";
import { HttpAgent, Actor } from "@dfinity/agent";

const Resell = () => {
  const [tickets, setTickets] = useState([]);
  const [owners, setOwners] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/tickets");
        const data = await response.json();
        if (Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        } else {
          console.error("Invalid tickets data", data);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    const initWallet = async () => {
      if (window.ic && window.ic.plug) {
        const plug = window.ic.plug;
        setWallet(plug);
        const isConnected = await plug.isConnected();
        setIsConnected(isConnected);
        if (isConnected) {
          await plug.loadActor("ticketNFT");
        }
      }
    };

    fetchTickets();
    initWallet();
  }, []);

  const buyTicket = async (ticketId) => {
    const actor = Actor.createActor(ticketNFT, { agent: new HttpAgent({ host: "http://localhost:8000" }) });
    const result = await actor.buyTicket(ticketId, wallet.getPrincipal().toText());
    alert(result);
  };

  const resellTicket = async (ticketId, newOwner) => {
    const actor = Actor.createActor(ticketNFT, { agent: new HttpAgent({ host: "http://localhost:8000" }) });
    const result = await actor.resellTicket(ticketId, newOwner);
    alert(result);
  };

  return (
    <div>
      <h1>Tickets</h1>
      {tickets.length > 0 ? (
        tickets.map((ticket, index) => (
          <div key={index}>
            <h3>{ticket}</h3>
            <p>Owner: {owners[index] || "Not purchased"}</p>
            <button onClick={() => buyTicket(index)}>Buy Ticket</button>
            <button onClick={() => resellTicket(index, prompt("Enter new owner's wallet ID:"))}>Resell Ticket</button>
          </div>
        ))
      ) : (
        <p>Buy tickets for reselling</p>
      )}
    </div>
  );
};

export default Resell;
