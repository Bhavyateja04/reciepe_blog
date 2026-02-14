"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    setSuccess(true);
  };

  if (success) {
    return (
      <div data-testid="newsletter-success">
        Successfully subscribed!
      </div>
    );
  }

  return (
    <form
      data-testid="newsletter-form"
      onSubmit={handleSubmit}
    >
      <input
        data-testid="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {error && (
        <div data-testid="newsletter-error">
          {error}
        </div>
      )}

      <button
        type="submit"
        data-testid="newsletter-submit"
      >
        Subscribe
      </button>
    </form>
  );
}
