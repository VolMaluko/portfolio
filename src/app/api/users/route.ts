import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET() {
  const users = await prisma?.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const { name, email, password, confirmPassword } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Todos os campos são obrigatórios." },
      { status: 400 }
    );
  }

  if (password !== confirmPassword) {
    return NextResponse.json(
      { message: "As senhas não coincidem." },
      { status: 400 }
    );
  }
  const user = await prisma?.user.findUnique({ where: { email } });
  if (user) {
    return NextResponse.json(
      { message: "Email já foi utilizado" },
      { status: 400 }
    );
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return NextResponse.json({ message: "Usuário criado com sucesso!" });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    return NextResponse.json(
      { message: "Usuário não encontrado" },
      { status: 404 }
    );
  }
  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ message: "Usuário deletado com sucesso!" });
}

export async function PUT(request: Request) {
  const { id, name, email, password } = await request.json();

  if (!id) {
    return NextResponse.json({ message: "ID é obrigatório" }, { status: 400 });
  }

  if (!name && !email) {
    return NextResponse.json(
      { message: "Nome e email são obrigatórios" },
      { status: 404 }
    );
  }
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    return NextResponse.json(
      { message: "Usuário não encontrado" },
      { status: 404 }
    );
  }
  if (!password) {
    return NextResponse.json(
      { message: "Senha é obrigatória" },
      { status: 400 }
    );
  }

  await prisma.user.update({ where: { id }, data: { name, email } });

  return NextResponse.json({ message: "Usuário atualizado com sucesso!" });
}
