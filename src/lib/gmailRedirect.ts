/**
 * Company's configured target email address for all incoming forms & inquiries
 */
export const COMPANY_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "idealcomputersmntdy@gmail.com";

export interface EmailOptions {
  to?: string;
  subject: string;
  body: string;
}

export interface EmailUrls {
  webGmailUrl: string;
  androidIntentUrl: string;
  iosGmailUrl: string;
  mailtoUrl: string;
}

/**
 * Generates platform-specific URLs for Gmail & universal mail fallback
 */
export function buildGmailUrls({
  to = COMPANY_EMAIL,
  subject,
  body,
}: EmailOptions): EmailUrls {
  const recipient = encodeURIComponent(to);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // 1. Desktop / Laptop Web Gmail compose URL
  const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;

  // 2. Android Intent targeting Gmail app with fallback to Gmail Web
  const androidIntentUrl = `intent:mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}#Intent;action=android.intent.action.SENDTO;package=com.google.android.gm;S.browser_fallback_url=${encodeURIComponent(
    webGmailUrl
  )};end`;

  // 3. iOS Gmail App URL Scheme
  const iosGmailUrl = `googlegmail:///co?to=${recipient}&subject=${encodedSubject}&body=${encodedBody}`;

  // 4. Universal mailto URL (fallback for all devices / custom email clients)
  const mailtoUrl = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

  return {
    webGmailUrl,
    androidIntentUrl,
    iosGmailUrl,
    mailtoUrl,
  };
}

/**
 * Triggers direct redirection to Gmail:
 * - Mobile: Opens Gmail App directly (Android intent / iOS URL scheme) with fallback
 * - Desktop / Laptop: Opens Gmail Web directly in a new tab (or current window if popup blocked)
 */
export function openGmailCompose({
  to = COMPANY_EMAIL,
  subject,
  body,
}: EmailOptions): void {
  if (typeof window === "undefined") return;

  const { webGmailUrl, androidIntentUrl, iosGmailUrl } = buildGmailUrls({
    to,
    subject,
    body,
  });

  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isAndroid) {
    try {
      window.location.href = androidIntentUrl;
    } catch {
      window.location.href = webGmailUrl;
    }
    return;
  }

  if (isIOS) {
    const startTime = Date.now();
    try {
      window.location.href = iosGmailUrl;
    } catch {
      window.location.href = webGmailUrl;
    }

    // Fallback if Gmail App is not installed on iOS device
    setTimeout(() => {
      if (!document.hidden && Date.now() - startTime < 2500) {
        window.location.href = webGmailUrl;
      }
    }, 1200);
    return;
  }

  // Laptop / Desktop: Open Gmail Web directly in a new tab
  try {
    const opened = window.open(webGmailUrl, "_blank", "noopener,noreferrer");
    if (!opened || opened.closed || typeof opened.closed === "undefined") {
      window.location.href = webGmailUrl;
    }
  } catch {
    window.location.href = webGmailUrl;
  }
}
