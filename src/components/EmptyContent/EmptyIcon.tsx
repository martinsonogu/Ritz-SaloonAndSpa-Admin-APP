export const EmptyIcon = ({ onClick }: { onClick?: () => void }) => {
  return (
    <svg
      width='152'
      height='120'
      viewBox='0 0 152 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className=' cursor-pointer'
    >
      <circle cx='76' cy='52' r='52' fill='#EAECF0' />
      <g filter='url(#filter0_dd_223_10852)'>
        <path
          d='M77.6 16C66.8273 16 57.2978 21.3233 51.4987 29.4829C49.605 29.0363 47.6301 28.8 45.6 28.8C31.4615 28.8 20 40.2615 20 54.4C20 68.5385 31.4615 80 45.6 80L109.6 80C121.971 80 132 69.9712 132 57.6C132 45.2288 121.971 35.2 109.6 35.2C108.721 35.2 107.854 35.2506 107.002 35.349C102.098 23.9677 90.7797 16 77.6 16Z'
          fill='#F9FAFB'
        />
        <ellipse cx='45.6' cy='54.4' rx='25.6' ry='25.6' fill='url(#paint0_linear_223_10852)' />
        <circle cx='77.6001' cy='48' r='32' fill='url(#paint1_linear_223_10852)' />
        <ellipse cx='109.6' cy='57.5999' rx='22.4' ry='22.4' fill='url(#paint2_linear_223_10852)' />
      </g>
      <circle cx='21' cy='19' r='5' fill='#F2F4F7' />
      <circle cx='18' cy='109' r='7' fill='#F2F4F7' />
      <circle cx='145' cy='35' r='7' fill='#F2F4F7' />
      <circle cx='134' cy='8' r='4' fill='#F2F4F7' />
      <g filter='url(#filter1_b_223_10852)'>
        <rect x='52' y='62' width='48' height='48' rx='24' fill='#344054' fillOpacity='0.4' />
        <path
          d='M76 80V92M82 86L70 86'
          stroke='#F9FAFB'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_dd_223_10852'
          x='0'
          y='16'
          width='152'
          height='104'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='4'
            operator='erode'
            in='SourceAlpha'
            result='effect1_dropShadow_223_10852'
          />
          <feOffset dy='8' />
          <feGaussianBlur stdDeviation='4' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_223_10852' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='4'
            operator='erode'
            in='SourceAlpha'
            result='effect2_dropShadow_223_10852'
          />
          <feOffset dy='20' />
          <feGaussianBlur stdDeviation='12' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_223_10852'
            result='effect2_dropShadow_223_10852'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_223_10852'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_b_223_10852'
          x='44'
          y='54'
          width='64'
          height='64'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='4' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_223_10852' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_223_10852'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_223_10852'
          x1='25.9429'
          y1='37.4858'
          x2='71.2'
          y2='80'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D0D5DD' />
          <stop offset='0.350715' stopColor='white' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_223_10852'
          x1='53.0287'
          y1='26.8571'
          x2='109.6'
          y2='80'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D0D5DD' />
          <stop offset='0.350715' stopColor='white' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_223_10852'
          x1='92.3999'
          y1='42.8'
          x2='132'
          y2='79.9999'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D0D5DD' />
          <stop offset='0.350715' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};
