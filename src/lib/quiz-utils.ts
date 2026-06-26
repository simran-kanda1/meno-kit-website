export function emailToDocId(email: string) {
  return email.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "_")
}

export const QUIZ_EMAIL_KEY = "menokit_quiz_email"
