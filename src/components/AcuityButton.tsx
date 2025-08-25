import { useEffect } from 'react';
import { loadAcuityScheduling } from '../utils/loadAcuityScheduling';

interface AcuityButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const AcuityButton = ({ className = '', children }: AcuityButtonProps) => {
  useEffect(() => {
    const cleanup = loadAcuityScheduling();
    return cleanup;
  }, []);

  return (
    <a
      href="https://app.acuityscheduling.com/schedule.php?owner=36746772&ref=booking_button"
      className={`acuity-embed-button ${className}`}
      style={{
        textDecoration: 'none',
        display: 'inline-block',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        font: 'inherit',
        color: 'inherit',
        lineHeight: 'normal',
        WebkitFontSmoothing: 'inherit',
        MozOsxFontSmoothing: 'inherit',
        WebkitAppearance: 'none',
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none'
      }}
    >
      {children}
    </a>
  );
};
