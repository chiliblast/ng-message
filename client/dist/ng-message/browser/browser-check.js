(function () {
    /**
     * Browser Compatibility & Installer Selection Layer
     * Detects Chrome version and system architecture to provide offline installers.
     */

    function getChromeVersion() {
        const ua = navigator.userAgent;
        const isOpera = ua.indexOf('OPR') > -1 || ua.indexOf('Opera') > -1;
        const isEdge = ua.indexOf('Edg') > -1;
        const isBrave = !!navigator.brave;
        
        if (isOpera || isEdge || isBrave) return null;

        const chromeMatch = ua.match(/Chrome\/([0-9]+)\./);
        if (chromeMatch) {
            return parseInt(chromeMatch[1], 10);
        }
        return null;
    }

    function getFirefoxVersion() {
        const ua = navigator.userAgent;
        const firefoxMatch = ua.match(/Firefox\/([0-9]+)\./);
        if (firefoxMatch) {
            return parseInt(firefoxMatch[1], 10);
        }
        return null;
    }

    function getOS() {
        const ua = navigator.userAgent;
        if (ua.indexOf('Win') > -1) return 'Windows';
        if (ua.indexOf('Linux') > -1) {
            if (ua.indexOf('Android') > -1) return 'Android';
            return 'Linux';
        }
        if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1) return 'iOS';
        return 'Unknown';
    }

    function getDeviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) return 'mobile';
        return 'desktop';
    }

    function getLinuxArchitecture() {
        const ua = navigator.userAgent;
        const platform = navigator.platform || '';
        if (ua.indexOf('aarch64') > -1 || ua.indexOf('arm64') > -1 || platform.indexOf('aarch64') > -1 || platform.indexOf('arm64') > -1) return 'arm64';
        return 'x64';
    }

    function getArchitecture() {
        const ua = navigator.userAgent;
        const platform = navigator.platform || '';
        const is64 = ua.indexOf('Win64') > -1 || 
                     ua.indexOf('x64') > -1 || 
                     ua.indexOf('WOW64') > -1 || 
                     platform.indexOf('64') > -1 ||
                     (navigator.userAgentData && navigator.userAgentData.bitness === '64');
        return is64 ? '64' : '32';
    }

    async function init() {
        const os = getOS();
        const deviceType = getDeviceType();
        const chromeVersion = getChromeVersion();
        const firefoxVersion = getFirefoxVersion();
        const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';

        let browserName = '';
        let currentVersion = null;
        let targetVersion = 0;
        let minVersion = 0;
        let installerName = '';
        let systemLabel = os;

        // Validation Rules (Chrome 147+, Firefox 150+, Min 110)
        if (firefoxVersion !== null) {
            browserName = 'Firefox';
            currentVersion = firefoxVersion;
            targetVersion = 150;
            minVersion = 110;
        } else {
            browserName = 'Chrome';
            currentVersion = chromeVersion;
            targetVersion = 147;
            minVersion = 110;
        }

        const isMobileOrTablet = deviceType === 'mobile' || deviceType === 'tablet';

        // Only fetch config and determine installers if we are not on mobile/tablet 
        // AND we actually need to show a warning or block.
        const needsOverlay = currentVersion === null || currentVersion < targetVersion;

        if (needsOverlay && !isMobileOrTablet) {
            try {
                const response = await fetch(`${baseUrl}/api/browser-config`);
                const config = await response.json();
                
                if (os === 'Windows') {
                    const arch = getArchitecture();
                    systemLabel = `Windows ${arch}-bit`;
                    if (config.windows && config.windows[browserName]) {
                        installerName = config.windows[browserName][arch] || '';
                    }
                } else if (os === 'Linux') {
                    const linuxArch = getLinuxArchitecture();
                    systemLabel = `Linux ${linuxArch === 'arm64' ? 'ARM64' : 'x64'}`;
                    if (config.linux && config.linux[browserName]) {
                        installerName = config.linux[browserName][linuxArch] || config.linux[browserName]['x64'] || '';
                    }
                }
            } catch (error) {
                console.error('Failed to fetch browser installer config:', error);
                // Fallback label if fetch fails
                if (os === 'Windows') systemLabel = `Windows ${getArchitecture()}-bit`;
            }
        } else if (isMobileOrTablet) {
             // Basic label for mobile
             if (os === 'Windows') systemLabel = `Windows ${getArchitecture()}-bit`;
        }

        const installerUrl = installerName ? `${baseUrl}/assets/${installerName}` : '';

        if (currentVersion === null || currentVersion < minVersion) {
            showOverlay('block', installerUrl, systemLabel, browserName, targetVersion, isMobileOrTablet);
        } else if (currentVersion < targetVersion) {
            showOverlay('warning', installerUrl, systemLabel, browserName, targetVersion, isMobileOrTablet);
        }
    }

    function showOverlay(type, url, systemLabel, browserName, targetVersion, isMobileOrTablet) {
        // Inject the compatibility stylesheet only when showing the overlay
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'browser-check.css';
        document.head.appendChild(link);

        // Ensure Angular doesn't show its loader or content if blocking
        if (type === 'block') {
            const style = document.createElement('style');
            style.innerHTML = 'app-root { display: none !important; }';
            document.head.appendChild(style);
        }

        const overlay = document.createElement('div');
        overlay.id = 'browser-compatibility-overlay';
        overlay.className = type;

        const isBlock = type === 'block';
        
        overlay.innerHTML = `
            <div class="compatibility-wrapper">
                <div class="compatibility-card">
                    <div class="icon-container">
                        ${isBlock ? '🚫' : '⚠️'}
                    </div>
                    <h1>${isBlock ? 'Unsupported Browser' : 'Update Recommended'}</h1>
                    <p>
                        ${isBlock 
                            ? `To ensure security and performance, this application requires <strong>${browserName} version ${targetVersion}</strong> or higher. Your current browser version is not supported.` 
                            : `You are using an older version of ${browserName}. We recommend upgrading to <strong>version ${targetVersion}</strong> for the best experience.`}
                    </p>
                    <div class="installer-info">
                        Detected System: <strong>${systemLabel}</strong>
                    </div>
                    <div class="actions">
                        ${!isMobileOrTablet && url ? `<a href="${url}" class="btn-primary" download>Download ${browserName} ${targetVersion}</a>` : ''}
                        ${isMobileOrTablet ? '<p style="color: #fcd34d; font-size: 14px;">Please update your browser via your device\'s app store.</p>' : ''}
                        ${!isBlock ? '<button id="continue-app" class="btn-secondary">Continue to Application</button>' : ''}
                    </div>
                    <div class="footer">
                        ${!isMobileOrTablet ? 'Offline installer provided in the package.' : 'Direct updates are not available for mobile/tablet devices.'}
                    </div>
                </div>
            </div>
        `;

        // Wait for DOM to be ready
        if (document.body) {
            document.body.appendChild(overlay);
            setupListeners(overlay);
        } else {
            window.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(overlay);
                setupListeners(overlay);
            });
        }
    }

    function setupListeners(overlay) {
        const continueBtn = document.getElementById('continue-app');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                overlay.classList.add('fade-out');
                setTimeout(() => overlay.remove(), 300);
            });
        }
    }

    // Run the check
    init();
})();
