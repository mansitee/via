// ==UserScript==
// @name         Redirect poop.mobi and poop.com.co to poop.com.co/playr.php
// @namespace    https://example.com
// @version      1.0
// @description  Redirect URLs from poop.mobi and poop.com.co to poop.com.co/playr.php with the id parameter
// @author       Your Name
// @match        https://poop.mobi/d/*
// @match        https://poop.com.co/d/*
// @match        https://poopvid.com/d/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Fungsi untuk mengalihkan URL
    function redirectURL() {
        const currentURL = window.location.href;
        const url = new URL(currentURL);

        // Ambil parameter id dari URL
        const id = url.pathname.split('/d/')[1];
        if (id) {
            // Buat URL baru dengan id sebagai parameter
            const newURL = `https://poop.com.co/playr.php?id=${id}`;
            window.location.replace(newURL);
        }
    }

    // Jalankan fungsi pengalihan saat halaman dimuat
    redirectURL();
})();