import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '7px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0px',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: '-0.5px',
              lineHeight: 1,
              fontFamily: 'sans-serif',
            }}
          >
            SG
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
