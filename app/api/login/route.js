export async function POST(request) {
  try {
    const { email } = await request.json();
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 201 });
    }

    const newUser = await prisma.user.create({
      data: {
        email: email,
      },
    });

    return new Response(JSON.stringify({ user: newUser }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
