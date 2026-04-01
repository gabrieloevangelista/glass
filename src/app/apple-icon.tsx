import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #5a9bb2 0%, #47869C 50%, #3a6f82 100%)',
          borderRadius: '22%',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="14,2 26,9 26,19 14,26 2,19 2,9" stroke="white" strokeWidth="2"/>
          <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" stroke="white" strokeWidth="1.2" opacity="0.6"/>
          <line x1="14" y1="2" x2="14" y2="7" stroke="white" strokeWidth="2"/>
          <line x1="26" y1="9" x2="21" y2="11" stroke="white" strokeWidth="2"/>
          <line x1="26" y1="19" x2="21" y2="17" stroke="white" strokeWidth="2"/>
          <line x1="14" y1="26" x2="14" y2="21" stroke="white" strokeWidth="2"/>
          <line x1="2" y1="19" x2="7" y2="17" stroke="white" strokeWidth="2"/>
          <line x1="2" y1="9" x2="7" y2="11" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
