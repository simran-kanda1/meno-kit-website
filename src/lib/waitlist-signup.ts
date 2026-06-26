import { addDoc, collection, serverTimestamp } from "firebase/firestore"

import { db } from "@/lib/firebase"

export async function submitWaitlistSignup(email: string, source: string) {
  await addDoc(collection(db, "waitlist_signups"), {
    email: email.trim().toLowerCase(),
    source,
    createdAt: serverTimestamp(),
  })
}
