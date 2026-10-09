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
  smartUrl: string;
  mailtoUrl: string;
  androidIntentUrl: string;
  iosGmailUrl: string;
}

export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";
  return (
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
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

  // Standard mailto URL (opens native Gmail / Mail app with To, Subject, Body pre-filled)
  const mailtoUrl = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

  // Desktop Web Gmail compose URL
  const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;

  // Android Intent targeting Gmail app directly with mailto fallback
  const androidIntentUrl = `intent:mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}#Intent;action=android.intent.action.SENDTO;package=com.google.android.gm;end`;

  // iOS Gmail App URL Scheme
  const iosGmailUrl = `googlegmail:///co?to=${recipient}&subject=${encodedSubject}&body=${encodedBody}`;

  // Smart URL based on client device: On mobile, use mailto to avoid Google's mobile web redirect; on desktop use Gmail Web compose
  const smartUrl = isMobileDevice() ? mailtoUrl : webGmailUrl;

  return {
    webGmailUrl,
    smartUrl,
    mailtoUrl,
    androidIntentUrl,
    iosGmailUrl,
  };
}

/**
 * Triggers direct redirection to Gmail:
 * - Mobile: Launches Gmail app / native mail composer directly with pre-filled fields (prevents Google mobile web inbox redirect)
 * - Desktop / Laptop: Opens Gmail Web compose directly in a new tab
 */
export function openGmailCompose({
  to = COMPANY_EMAIL,
  subject,
  body,
}: EmailOptions): void {
  if (typeof window === "undefined") return;

  const { webGmailUrl, mailtoUrl, androidIntentUrl, iosGmailUrl } = buildGmailUrls({
    to,
    subject,
    body,
  });

  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isMobile = isAndroid || isIOS || /Mobile|Mobi/i.test(ua);

  if (isMobile) {
    if (isAndroid) {
      // 1. Try launching Android Gmail App directly
      try {
        window.location.href = androidIntentUrl;
        setTimeout(() => {
          if (!document.hidden) {
            window.location.href = mailtoUrl;
          }
        }, 600);
      } catch {
        window.location.href = mailtoUrl;
      }
      return;
    }

    if (isIOS) {
      // 2. Try launching iOS Gmail App directly, fallback to standard mailto
      const startTime = Date.now();
      try {
        window.location.href = iosGmailUrl;
      } catch {
        window.location.href = mailtoUrl;
      }

      setTimeout(() => {
        if (!document.hidden && Date.now() - startTime < 2000) {
          window.location.href = mailtoUrl;
        }
      }, 800);
      return;
    }

    // Generic Mobile fallback
    window.location.href = mailtoUrl;
    return;
  }

  // Desktop / Laptop: Open Gmail Web compose directly in a new tab
  try {
    const opened = window.open(webGmailUrl, "_blank", "noopener,noreferrer");
    if (!opened || opened.closed || typeof opened.closed === "undefined") {
      window.location.href = webGmailUrl;
    }
  } catch {
    window.location.href = webGmailUrl;
  }
}
