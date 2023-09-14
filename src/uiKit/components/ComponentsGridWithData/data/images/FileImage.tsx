import * as React from 'react';

const FileImage = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 200 120" fill="none" {...props}>
      <path
        d="M0 4a4 4 0 014-4h192a4 4 0 014 4v112a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"
        fill="#fff"
      />
      <rect x={34} y={36} width={36} height={48} rx={2} fill="#0078D2" />
      <path
        d="M67.6 36H36.4a2.4 2.4 0 00-2.4 2.4v43.2a2.4 2.4 0 002.4 2.4h31.2a2.4 2.4 0 002.4-2.4V38.4a2.4 2.4 0 00-2.4-2.4z"
        fill="#004269"
        fillOpacity={0.07}
      />
      <path
        d="M46.143 65.606c-.377.263-.834.394-1.372.394h-.857c-1.005 0-1.743-.211-2.211-.634-.469-.435-.703-1.137-.703-2.109v-3.086c0-.96.234-1.657.703-2.091.48-.434 1.32-.651 2.314-.651h2.126V54h1.714v12h-1.714v-.394zm-1.114-1.32c.377 0 .657-.097.84-.292.182-.205.274-.423.274-.651v-4.2H44c-.423 0-.743.097-.96.291-.217.195-.326.469-.326.823v2.914c0 .355.109.629.326.823.217.195.537.292.96.292h1.029zM56.429 63.257c0 .96-.24 1.657-.72 2.092-.469.434-1.2.651-2.195.651h-1.028c-.995 0-1.732-.217-2.212-.651-.468-.435-.703-1.132-.703-2.092v-3.086c0-.96.235-1.657.703-2.091.48-.434 1.217-.651 2.212-.651h1.028c.995 0 1.726.217 2.195.651.48.434.72 1.131.72 2.091v3.086zm-1.715-3c0-.354-.108-.628-.325-.823-.218-.194-.538-.291-.96-.291h-.858c-.422 0-.742.097-.96.291-.217.195-.325.469-.325.823v2.914c0 .355.108.629.325.823.218.195.538.292.96.292h.858c.422 0 .742-.097.96-.292.217-.194.325-.468.325-.823v-2.914zM61.074 66c-1.005 0-1.743-.211-2.211-.634-.469-.435-.703-1.137-.703-2.109v-3.086c0-.96.234-1.657.703-2.091.48-.434 1.217-.651 2.211-.651h2.212v1.714h-2.143c-.423 0-.743.097-.96.291-.217.195-.326.469-.326.823v2.914c0 .355.109.629.326.823.217.195.537.292.96.292h2.143V66h-2.212z"
        fill="#fff"
      />
      <path
        d="M163.6 36h-31.2a2.4 2.4 0 00-2.4 2.4v43.2a2.4 2.4 0 002.4 2.4h31.2a2.4 2.4 0 002.4-2.4V38.4a2.4 2.4 0 00-2.4-2.4z"
        fill="#F38B00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141.4 55.333V54h-1.76v1.333h1.76zm-1.936 9.214c-.106.08-.252.12-.44.12H137V66h2.57c.539 0 .979-.133 1.32-.4.34-.258.51-.613.51-1.067v-7.866h-3.52V58h1.76v6.267c0 .115-.059.209-.176.28zm5.104-7.56v-.32h-1.408V66h1.778v-2.667h2.27c1.021 0 1.772-.169 2.253-.506.493-.338.739-.88.739-1.627v-2.4c0-.756-.241-1.298-.722-1.627-.481-.337-1.237-.506-2.27-.506h-1.232c-.575 0-1.044.106-1.408.32zm.634 1.253c.187-.16.475-.24.862-.24h1.056c.434 0 .763.076.986.227a.728.728 0 01.334.64v2.266a.728.728 0 01-.334.64c-.223.151-.552.227-.986.227h-2.182l-.018-3.267c0-.177.094-.342.282-.493zm10.718 5.093c.516 0 .956-.089 1.32-.266v.266c0 1.334 0 1.334-1.76 1.334h-2.64V66h4.4c.972 0 1.76-.597 1.76-1.333v-8h-4.048c-1.021 0-1.778.169-2.27.506-.481.338-.722.88-.722 1.627v2.4c0 .756.241 1.302.722 1.64.481.329 1.237.493 2.27.493h.968zm1.038-1.56c-.187.151-.475.227-.862.227h-1.056c-.434 0-.763-.076-.986-.227a.728.728 0 01-.334-.64v-2.266c0-.276.111-.49.334-.64.223-.151.552-.227.986-.227h2.2v3.267c0 .177-.094.346-.282.506z"
        fill="#fff"
      />
      <path
        d="M115.6 36H84.4a2.4 2.4 0 00-2.4 2.4v43.2a2.4 2.4 0 002.4 2.4h31.2a2.4 2.4 0 002.4-2.4V38.4a2.4 2.4 0 00-2.4-2.4z"
        fill="#002033"
        fillOpacity={0.35}
      />
      <path
        d="M104 56.64c0 .56-.027.98-.08 1.26-.053.267-.173.54-.36.82L101.04 61v2H99v-2.5l2.92-2.92c.053-.187.08-.44.08-.76v-.52c0-.413-.12-.733-.36-.96-.24-.227-.607-.34-1.1-.34H98v-2h2.3c2.24 0 3.7 1 3.7 3v.64zM101 65v2h-2v-2h2z"
        fill="#fff"
      />
    </svg>
  );
};

export default FileImage;
