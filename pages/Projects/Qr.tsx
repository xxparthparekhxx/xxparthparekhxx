import React, { useCallback, useRef, useState } from "react";
import QRCode from "react-qr-code";
import Hoverborder from "../../components/common/Hoverborder";

const Qr = () => {
  const [qrVal, setqrVal] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  const processQRCode = (callback: (canvas: HTMLCanvasElement) => void): void => {
    if (!qrRef.current) return;

    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      const padding = img.width * 0.05; // 0.75em is approximately 15% of the image width
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;

      // Fill the canvas with white
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the QR code image
      ctx.drawImage(img, padding, padding);

      callback(canvas);
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };
  const [Downloading, setDownloading] = useState(false);
  const [Coppied, setCoppied] = useState(false);
  const downloadQRCode = useCallback((): void => {
    setDownloading(true)
    setTimeout(()=>{
        setDownloading(false)
    },1000)
    processQRCode((canvas) => {
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    });
  }, []);

  const copyQRCodeToClipboard = useCallback(async (): Promise<void> => {
    setCoppied(true)
    setTimeout(()=>{
        setCoppied(false)
    },1000)
    processQRCode((canvas) => {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }, 'image/png');
    });
  }, []);


  const contextValue = React.useMemo(() => ({
    downloadQRCode,
    copyQRCodeToClipboard
  }), [downloadQRCode, copyQRCodeToClipboard]);

function checkString(str:string){
    console.log(str.length)
    if (str.length < 2953){
        setqrVal(str)
    }else{
        setqrVal(str.substring(0,2953))
    }
}
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
        <div className="flex justify-center flex-col text-center">
            <div className="m-2 text-4xl bold">QR Code Generator - Create QR Codes for Free</div>
            <div className="m-2">Generate QR Codes effortlessly with our intuitive interface. Access a free plan that never expires! Customize your QR Codes, track their performance, and make informed decisions with ease.</div>
        </div>
      <div className="m-10 p-10 rounded-xl w-3/4 border bg-card text-card-foreground shadow">
        <div className="flex flex-row justify-between">
          <div className="w-[100%] min-h-[100%] flex justify-between flex-col">
            <div className="flex  justify-center text-2xl">
                Just enter the data in the textfield below it will auto reflect on the qrcode
            </div>
            <div>
            <textarea
            className="flex min-h-[60px] min-w-[100%] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              value={qrVal}
              onChange={(e)=>checkString(e.target.value)}
            />
            <div className="flex justify-end">

            <input onClick={downloadQRCode} type="button" value={Downloading?"✅ Downloading":"Download"} className="p-2 border-white border rounded-xl mt-2" />
            <input onClick={copyQRCodeToClipboard} type="button" value={Coppied?"✅ Coppied" :"Copy"} className="p-2 ml-3 border-white border rounded-xl mt-2" />
            </div>
            </div>
          </div>
          <div  ref={qrRef}>
          <div  className="ml-10 bg-white p-3">
          <QRCode value={qrVal} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
