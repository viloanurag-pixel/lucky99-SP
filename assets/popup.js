(function () {
  var STORAGE_KEY = 'gfh_cookie_consent';
  var REDIRECT_URL = 'https://dealdiscovery.online/';
  var isLander = window.location.pathname.indexOf('lander.html') !== -1;

  // Function to create and show the popup
  (function showPopup() {

  var style = document.createElement('style');
  style.textContent = [
    '#gfh-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:99998;display:flex;align-items:center;justify-content:center;padding:1rem;animation:gfh-fadein 0.3s ease;}',
    '@keyframes gfh-fadein{from{opacity:0}to{opacity:1}}',
    '@keyframes gfh-popin{from{opacity:0;transform:scale(0.92) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}',
    '#gfh-popup{width:100%;max-width:480px;background:#fff;border-radius:16px;padding:2.2rem 2rem 2.4rem;box-shadow:0 20px 60px rgba(0,0,0,0.3);animation:gfh-popin 0.35s cubic-bezier(0.34,1.4,0.64,1);font-family:Arial,sans-serif;}',
    '#gfh-popup .gfh-icon{font-size:2.4rem;margin-bottom:0.7rem;display:block;text-align:center;}',
    '#gfh-popup h2{font-size:1.15rem;font-weight:700;color:#0f4524;text-align:center;margin:0 0 0.6rem;letter-spacing:-0.2px;}',
    '#gfh-popup p{font-size:0.85rem;color:#555;line-height:1.7;text-align:center;margin:0 0 1.6rem;}',
    '#gfh-popup p a{color:#1a6b38;text-decoration:underline;}',
    '#gfh-popup p a:hover{color:#0f4524;}',
    '#gfh-divider{border:none;border-top:1px solid #e8e8e8;margin:0 0 1.6rem;}',
    '#gfh-btns{display:flex;gap:0.75rem;justify-content:center;}',
    '#gfh-accept{flex:1;background:#0f4524;color:#fff;border:none;padding:0.8rem 1.5rem;border-radius:8px;font-size:0.92rem;font-weight:700;cursor:pointer;transition:background 0.2s,transform 0.1s;letter-spacing:0.02em;}',
    '#gfh-accept:hover{background:#09301a;transform:translateY(-1px);}',
    '#gfh-reject{flex:1;background:#fff;color:#0f4524;border:2px solid #0f4524;padding:0.8rem 1.5rem;border-radius:8px;font-size:0.92rem;font-weight:700;cursor:pointer;transition:all 0.2s;letter-spacing:0.02em;}',
    '#gfh-reject:hover{background:#e8f5ee;transform:translateY(-1px);}',
    '#gfh-policy{display:block;text-align:center;margin-top:1rem;font-size:0.76rem;color:#999;}',
    '#gfh-policy a{color:#999;text-decoration:underline;}',
    '#gfh-policy a:hover{color:#1a6b38;}',
  ].join('');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.id = 'gfh-overlay';
  overlay.innerHTML = [
    '<div id="gfh-popup">',
    '  <span class="gfh-icon">🍪</span>',
    '  <h2>We Value Your Privacy</h2>',
    '  <p>We use cookies to enhance your browsing experience, analyse site traffic, and personalise content.',
    '  By clicking <strong>Accept All</strong> you agree to our use of cookies.</p>',
    '  <hr id="gfh-divider">',
    '  <div id="gfh-btns">',
    '    <button id="gfh-accept">✓ Accept All</button>',
    '    <button id="gfh-reject">✕ Reject All</button>',
    '  </div>',
    '  <span id="gfh-policy">',
    '    <a href="privacy.html">Privacy Policy</a> &nbsp;·&nbsp; <a href="terms.html">Terms of Service</a>',
    '  </span>',
    '</div>',
  ].join('');
  document.body.appendChild(overlay);

  function closePopup() {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.2s ease';
    setTimeout(function () { overlay.remove(); }, 200);
  }

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    if (isLander) {
      window.location.href = REDIRECT_URL;
    } else {
      closePopup();
    }
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    if (isLander) {
      window.location.href = REDIRECT_URL;
    } else {
      closePopup();
    }
  }

  document.getElementById('gfh-accept').addEventListener('click', handleAccept);
  document.getElementById('gfh-reject').addEventListener('click', handleReject);

  if (!isLander) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closePopup();
    });
  }

  })(); // end of showPopup function, and execute it immediately

})();
