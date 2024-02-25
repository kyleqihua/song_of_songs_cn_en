document.addEventListener('DOMContentLoaded', function () {
    // 为所有h3标签添加点击事件监听器
    document.querySelectorAll('h3').forEach(function (h3, index) {
        h3.addEventListener('click', function () {
            // 查找下一个兄弟元素，即中文翻译的<div>
            let translation = this.nextElementSibling;
            
            // 切换翻译的显示状态
            if (translation.style.display === "none" || !translation.style.display) {
                translation.style.display = "block";
            } else {
                translation.style.display = "none";
            }
        });
    });
});
