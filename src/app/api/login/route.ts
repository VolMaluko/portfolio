import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "E-mail e senha são obrigatórios." },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { message: "Usuário não encontrado." },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Senha incorreta." },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Login realizado com sucesso!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Ocorreu um erro inesperado." },
      { status: 500 }
    );
  }
}

export async function forgot(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { message: "E-mail é obrigatório." },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { message: "Usuário não encontrado." },
        { status: 404 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Recuperação de Senha",
      text: "Clique no link para redefinir sua senha: [link aqui]",
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "E-mail de recuperação enviado com sucesso!",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Ocorreu um erro inesperado." },
      { status: 500 }
    );
  }
}
