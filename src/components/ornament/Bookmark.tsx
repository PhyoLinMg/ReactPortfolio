import { theme } from '../../styles/theme';

interface BookmarkProps {
  size?: number;
  color?: string;
  className?: string;
}

// A cut silk tab: straight top, swallowtail notch at the foot.
export const Bookmark = ({ size = 28, color = theme.colors.ribbon, className }: BookmarkProps) => (
  <svg
    className={className}
    width={size * 0.55}
    height={size}
    viewBox="0 0 11 20"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M0 0h11v20l-5.5-4.2L0 20z" fill={color} />
    <path d="M1.4 0v16.6" stroke={theme.colors.ribbonSheen} strokeWidth="0.6" opacity="0.7" />
  </svg>
);
