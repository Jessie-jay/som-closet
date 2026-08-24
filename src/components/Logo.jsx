const Logo = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF8C42', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2"/>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle 
          cx="100" 
          cy="100" 
          r="95" 
          fill="url(#logoGradient)"
          filter="url(#shadow)"
        />
        
        {/* Inner decorative circle */}
        <circle 
          cx="100" 
          cy="100" 
          r="85" 
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.3"
        />
        
        {/* Hanger icon */}
        <g transform="translate(100, 85)">
          {/* Hanger hook */}
          <path
            d="M -3,-25 Q -3,-35 5,-35 Q 13,-35 13,-25"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Hanger bar */}
          <line
            x1="-30"
            y1="-10"
            x2="30"
            y2="-10"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          
          {/* Left shoulder */}
          <line
            x1="-30"
            y1="-10"
            x2="-20"
            y2="10"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Right shoulder */}
          <line
            x1="30"
            y1="-10"
            x2="20"
            y2="10"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Bottom bar */}
          <line
            x1="-20"
            y1="10"
            x2="20"
            y2="10"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        
        {/* Brand text - SC monogram */}
        <text
          x="100"
          y="145"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          letterSpacing="2"
        >
          SC
        </text>
        
        {/* Small decorative dots */}
        <circle cx="70" cy="145" r="2" fill="white" opacity="0.6" />
        <circle cx="130" cy="145" r="2" fill="white" opacity="0.6" />
      </svg>
    </div>
  )
}

export default Logo
