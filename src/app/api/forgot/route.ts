import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "E-mail é obrigatório." },
      { status: 400 }
    );
  }

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.BREVO_SENDER_NAME,
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email }],
        subject: "Recuperação de Senha",
        htmlContent: `
          <p>Olá,</p>
          <p>Clique no link abaixo para redefinir sua senha:</p>
          <p><a href="https://portfolio-git-main-volnei-daniellis-projects.vercel.app/reset?email=${email}">Redefinir Senha</a></p>
          <p>Se você não solicitou isso, ignore este e-mail.</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY!,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      return NextResponse.json({ message: "E-mail de recuperação enviado!" });
    } else {
      return NextResponse.json(
        { message: "Erro ao enviar e-mail." },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.error(
      "Erro ao enviar e-mail:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { message: "Erro ao processar solicitação." },
      { status: 500 }
    );
  }
}
