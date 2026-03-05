document.addEventListener("DOMContentLoaded", () => {

    const loginBox = document.getElementById("loginBox");
    const mainGrid = document.getElementById("main-grid");

    if (sessionStorage.getItem("isLoggedIn") === "true") {
        loginBox.style.display = "none";
        mainGrid.style.display = "grid";

    } else {
        mainGrid.style.display = "none";
    }

});

const menus = [
    { nama: "KETUA", link: "ketua.html", img: "img/ketua.png" },
    { nama: "WAKIL KETUA", link: "wakilketua.html", img: "img/wakil.png" },
    { nama: "SEKRETARIS", link: "sekretaris.html", img: "img/sekretaris.png" },
    { nama: "BENDAHARA", link: "sendahara.html", img: "img/bendahara.png" },
    { nama: "PENDIDIKAN", link: "pendidikan.html", img: "img/pendidikan.png" },
    { nama: "KEAMANAN", link: "keamanan.html", img: "img/keamanan.png" },
    { nama: "AKOMODASI", link: "akomodasi.html", img: "img/akomodasi.png" },
    { nama: "KONHUM", link: "konhum.html", img: "img/konhum.png" },
    { nama: "ORKES", link: "orkes.html", img: "img/orkes.png" },
    { nama: "KEBERSIHAN", link: "kebersihan.html", img: "img/kebersihan.png" }
];

const gridContainer = document.getElementById("main-grid");

menus.forEach(menu => {

    const navItem = document.createElement("a");
    navItem.href = menu.link;
    navItem.className = "nav-item";

    navItem.innerHTML = `
        <div class="circle">
            <img src="${menu.img}" alt="${menu.nama}">
        </div>
        <span class="caption">${menu.nama}</span>
    `;

    gridContainer.appendChild(navItem);

});

const correctPassword = "rudal2026";

window.addEventListener("load", () => {

    const toast = document.getElementById("welcomeToast");

    if (toast) {
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

});

function checkPassword() {

    const input = document.getElementById("passwordInput");
    const errorText = document.getElementById("errorText");
    const loginBox = document.getElementById("loginBox");
    const mainGrid = document.getElementById("main-grid");
    const toast = document.getElementById("welcomeToast");

    const password = input.value.trim();

    if (password === correctPassword) {

        sessionStorage.setItem("isLoggedIn", "true");

        loginBox.style.opacity = "0";
        loginBox.style.display = "none";
        mainGrid.style.display = "grid";

        setTimeout(() => {
            loginBox.style.display = "none";
            
            toast.classList.add("show");
            
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);

        }, 300);
            
    } else {

        errorText.innerText = "Password salah!";

    }
} 