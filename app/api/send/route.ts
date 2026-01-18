/*import {Resend} from "resend";
import {NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const {name, email, message} = await request.json();

        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'darrenyeo245@gmail.com',
            subject: `New message from ${name}`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });
        return NextResponse.json({success: true, data}, {status: 200});
    } catch (error) {
        NextResponse.json({success: false, error: error}, {status: 500});
    }
}*/