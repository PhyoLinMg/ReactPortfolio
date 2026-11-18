import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { Bookmark } from './Bookmark';
import { Stamp } from './Stamp';
import { imageUrl } from '../../lib/record';

const { colors, space } = theme;

const Frame = styled.div`
  position: relative;
  padding: clamp(0.75rem, 2.2vw, 1.4rem);
  background: ${colors.mat};
  border-radius: 3px;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.5) inset,
    0 14px 28px -18px rgba(42, 38, 34, 0.45),
    0 2px 5px -2px rgba(42, 38, 34, 0.25);
`;

const Window = styled.div`
  padding: ${space.sm};
  background: ${colors.buff};
  border: 1px solid ${colors.rule};
  box-shadow: inset 0 2px 6px rgba(42, 38, 34, 0.12);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    max-height: 28rem;
    object-fit: contain;
    mix-blend-mode: multiply;
  }
`;

const Tab = styled(Bookmark)`
  position: absolute;
  top: -4px;
  right: clamp(1rem, 3vw, 2rem);
`;

// Unreleased work: the window holds unwoven thread (the world's mark for a gap) under a red stamp.
const Unreleased = styled.div`
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 9;
  max-height: 28rem;
  width: 100%;
  background:
    repeating-linear-gradient(45deg, rgba(142, 138, 130, 0.16) 0 1px, transparent 1px 9px),
    repeating-linear-gradient(-45deg, rgba(142, 138, 130, 0.16) 0 1px, transparent 1px 9px),
    ${colors.buffDeep};

  svg {
    width: clamp(7.5rem, 38%, 10.5rem);
    height: auto;
  }
`;

const initials = (title: string) =>
  title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

export const PendingMount = ({ title }: { title: string }) => (
  <Frame>
    <Window>
      <Unreleased role="img" aria-label={`${title}: not yet released, no screenshot available`}>
        <Stamp top="NOT YET RELEASED" bottom="IN DEVELOPMENT" center={initials(title)} ink={colors.ribbon} />
      </Unreleased>
    </Window>
    <Tab size={34} />
  </Frame>
);

interface MountProps {
  src: string;
  alt: string;
  eager?: boolean;
}

// A screenshot mounted on a mat like a catalogued document; never cropped.
export const Mount = ({ src, alt, eager }: MountProps) => (
  <Frame>
    <Window>
      <img
        src={imageUrl(src, 900)}
        srcSet={`${imageUrl(src, 600)} 600w, ${imageUrl(src, 900)} 900w, ${imageUrl(src, 1400)} 1400w`}
        sizes="(min-width: 1180px) 34vw, (min-width: 900px) 45vw, 92vw"
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </Window>
    <Tab size={34} />
  </Frame>
);
