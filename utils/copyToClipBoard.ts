const copyToClipboard = (text: string): void => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text to clipboard', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

export default copyToClipboard