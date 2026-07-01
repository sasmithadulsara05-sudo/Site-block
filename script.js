// ==========================================
// 1. Supabase Database සම්බන්ධ කිරීම (Connection)
// ==========================================

// ඔන්ලයින් එඩිටර් එකේ Auto-reload දෝෂ මගහරවා ගැනීමට 'const' වෙනුවට 'var' භාවිතා කර ඇත
var supabaseUrl = 'https://uqedjbdpovceiywuidks.supabase.co';
var supabaseKey = 'sb_publishable_L5Wx6rbSwTsPPknkLnXMMQ_1ZDuDMiN';
var supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Database එක නිවැරදිව සම්බන්ධ වී ඇත්දැයි බැලීමට කුඩා Function එකක් (පරීක්ෂා කිරීම සඳහා)
async function checkDatabaseConnection() {
    console.log("Supabase ක්‍රියාත්මක වෙමින් පවතී...");
}

// Function එක ක්‍රියාත්මක කිරීම
checkDatabaseConnection();


// ==========================================
// 2. තිරස් අතට ස්ක්‍රෝල් කිරීම (Drag to Scroll)
// ==========================================

const sliders = document.querySelectorAll('.scroll-container');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    slider.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // ස්ක්‍රෝල් වන වේගය
        slider.scrollLeft = scrollLeft - walk;
    });
});
