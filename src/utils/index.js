export const copyToClipboard = async (copyText, message) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(copyText);
      alert(message ?? '복사되었습니다.');
    }
  } catch (error) {
    console.error('Failed to copy to clipboard: ', error);
  }
};

export const setCookie = () => {
  const now = new Date();
  const nextDay = new Date(now.getTime() + (1 + 24 * 60 * 60 * 1000));

  document.cookie = `WSY_GUIDE=TRUE; path=/; expires=${nextDay}`;
};

export const hasCookie = () => {
  const cookie = document.cookie;

  let isCookie = false;

  cookie.split('=').forEach((value) => {
    if (value === 'WSY_GUIDE') {
      isCookie = true;
    }
  });

  return isCookie;
};
