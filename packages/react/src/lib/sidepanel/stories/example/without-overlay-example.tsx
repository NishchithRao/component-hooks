import { useSidePanel } from '../../sidepanel';
import './without-overlay.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const WithoutOverlayExample = () => {
  const { panelRef, triggerRef } = useSidePanel();
  return (
    <div className="root">
      <div ref={panelRef} className="sidebar">
        <span>Acne Co.</span>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Live Shows</li>
          <li>Contact</li>
        </ul>
      </div>
      <header>
        <button ref={triggerRef}>
          <GiHamburgerMenu size={24} />
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Live Shows</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  );
};

export { WithoutOverlayExample };
