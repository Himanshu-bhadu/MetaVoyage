export async function GET(request) {
  try {
    const { email } = await request.json();

    if (email) {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (user) {
        return new Response(JSON.stringify({ user: user }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
      }
    } else {
      return new Response(JSON.stringify({ error: "Email parameter is required" }), { status: 400 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
