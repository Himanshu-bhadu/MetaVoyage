export async function POST(request) {
    try {
      const { userId, type, from, to, date, time, passengers, class: ticketClass, destination, paymentInfo } = await request.json();
      const newTicket = await prisma.ticket.create({
        data: {
          userId: userId,
          type: type,
          from: from,
          to: to,
          date: new Date(date),
          time: time,
          passengers: passengers,
          paymentInfo: paymentInfo,
        },
      });
      return new Response(JSON.stringify({ ticket: newTicket }), { status: 201 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}  