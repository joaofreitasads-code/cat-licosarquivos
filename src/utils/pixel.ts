declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const trackInitiateCheckout = (value: number, contentName: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        value,
        currency: 'BRL',
        content_name: contentName,
      });
    }
  } catch (e) {
    // silently ignore tracking errors
  }
};
