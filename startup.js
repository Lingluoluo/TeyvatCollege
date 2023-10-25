startupContent({ company: true, game: true, warning: true });
function startupContent(page) {
	let t = 1000;
	if (page.company) {
		setTimeout(() => {
			document.getElementById("startup_company").style.opacity = "1";
		}, t);
		t += 3000;
	}
	if (page.game) {
		setTimeout(() => {
			document.getElementById("startup_company").style.opacity = "0";
		}, t);
		t += 2000;
		setTimeout(() => {
			document.getElementById("startup_game").style.opacity = "1";
		}, t);
		t += 500;
		setTimeout(() => {
			document.getElementById("startup_game_g").style.opacity = "1";
		}, t);
		t += 4000;
	}
	if (page.warning) {
		setTimeout(() => {
			document.getElementById("startup_game").style.opacity = "0";
			document.getElementById("startup_game_g").style.opacity = "0";
		}, t);
		t += 1000;
		setTimeout(() => {
			document.getElementById("startup_warning").style.opacity = "1";
		}, t);
		t += 3000;
        setTimeout(() => {
         window.location.href = "https://www.hrbcu.edu.cn/";
        }, t);
	}
};