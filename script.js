
        /* ================================================================
           AUTO LIGHT / DARK MODE
           Detects user's local time and switches theme automatically.
           Light Mode: 7:00 AM – 7:00 PM
           Dark Mode:  7:00 PM – 7:00 AM
           ================================================================ */
        (function() {
            function applyTheme() {
                const hour = new Date().getHours();
                const isDark = hour < 7 || hour >= 19;
                document.body.classList.toggle('dark-mode', isDark);
            }
            applyTheme();
            // Re-check every minute to handle edge cases
            setInterval(applyTheme, 60000);
        })();

        /* ================================================================
           AGE TOOLTIP INTERACTION (Touch Support)
           Tapping the Age item toggles the tooltip on touch devices.
           Tapping elsewhere dismisses it.
           ================================================================ */
        (function() {
            const ageItem = document.getElementById('ageItem');
            if (!ageItem) return;

            // Toggle on tap for touch devices
            ageItem.addEventListener('click', function(e) {
                if (window.matchMedia('(hover: none)').matches) {
                    e.stopPropagation();
                    ageItem.classList.toggle('active');
                }
            });

            // Dismiss tooltip when tapping elsewhere
            document.addEventListener('click', function() {
                if (ageItem.classList.contains('active')) {
                    ageItem.classList.remove('active');
                }
            });
        })();
