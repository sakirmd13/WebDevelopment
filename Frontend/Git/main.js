// 1. Har <code> ko terminal style box me badlo aur Copy button lagao
document.querySelectorAll('main code').forEach(function (code) {
    var box = document.createElement('div');
    box.className = 'code-box';

    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';

    code.parentNode.insertBefore(box, code);
    box.appendChild(code);
    box.appendChild(btn);

    btn.addEventListener('click', function () {
        navigator.clipboard.writeText(code.innerText).then(function () {
            btn.textContent = 'Copied ✓';
            btn.classList.add('done');
            setTimeout(function () {
                btn.textContent = 'Copy';
                btn.classList.remove('done');
            }, 1500);
        });
    });
});

// 2. Page scroll hone par upar progress bar chalao
var progress = document.getElementById('progress');

function updateProgress() {
    var scrollTop = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progress.style.width = (height > 0 ? (scrollTop / height) * 100 : 0) + '%';
}

window.addEventListener('scroll', updateProgress);
updateProgress();

// 3. Jo step screen par hai, uska nav button highlight karo
var navLinks = document.querySelectorAll('#stepsNav a');

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-30% 0px -60% 0px' });

document.querySelectorAll('.step').forEach(function (step) {
    observer.observe(step);
});