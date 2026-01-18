"use client";

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    }, []);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        
        const form = e.currentTarget;

        try {
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                e.currentTarget,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            console.log('EmailJS Response:', result);

            if (result.status === 200) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center py-6 md:py-10">
            <div className="w-full max-w-4xl px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <p className="text-lg mb-2">Feel free to reach out through any of these channels:</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="font-semibold">Email:</span>
                                <a href="mailto:darrenyeo245@gmail.com" className="text-accent hover:underline">
                                    darrenyeo245@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="font-semibold">GitHub:</span>
                                <a href="https://github.com/darrenyeo245" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                    @darrenyeo245
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondarybackground border-2 border-accent rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                                <input type="text" id="name" name="user_name" className="w-full px-4 py-2 rounded-lg border-2 border-accent bg-background focus:outline-none focus:ring-2 focus:ring-accent" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input type="email" id="email" name="user_email" className="w-full px-4 py-2 rounded-lg border-2 border-accent bg-background focus:outline-none focus:ring-2 focus:ring-accent" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 rounded-lg border-2 border-accent bg-background focus:outline-none focus:ring-2 focus:ring-accent" required></textarea>
                            </div>

                            <button type="submit" disabled={status === 'loading'} className="w-full bg-accent text-background font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && <p className="text-green-500 text-center">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-500 text-center">Failed to send message. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


