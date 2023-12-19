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
