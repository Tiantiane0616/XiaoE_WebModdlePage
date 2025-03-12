// 主域名配置
const MAIN_DOMAIN = 'tiantiane0616.github.io';

// 获取URL参数
const params = new URLSearchParams(location.search);
const targetUrl = params.has('url') ? decodeURIComponent(params.get('url')) : '/';

// 验证URL合法性
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// 检测是否为外部链接
function isExternal(url) {
    try {
        const { hostname } = new URL(url);
        return !hostname.includes(MAIN_DOMAIN);
    } catch {
        return true;
    }
}

// 自动处理内部链接
if (!isExternal(targetUrl)) {
    window.location.href = targetUrl;
}

// 显示目标URL
document.getElementById('targetUrl').textContent = targetUrl;

// 确认跳转功能
function proceedRedirect() {
    if (!isValidUrl(targetUrl)) {
        alert('无效的目标链接');
        return;
    }
    // 显示加载动画
    document.getElementById('loadingOverlay').style.display = 'flex';
    // 执行跳转
    window.location.href = targetUrl;
}

// 取消跳转功能
function cancelRedirect() {
    window.history.back();
}

// 键盘控制 - 按Esc键取消跳转
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cancelRedirect();
    }
});

// 鼠标跟随3D旋转效果
let lastTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime > 16) { // 限制每秒最多触发60次
        lastTime = now;
        const container = document.querySelector('.glass-container');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});