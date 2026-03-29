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
          borderRadius: '38px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: '-3px',
            fontFamily: 'sans-serif',
          }}
        >
          SG
        </span>
      </div>
    ),
    { ...size }
  );
}
