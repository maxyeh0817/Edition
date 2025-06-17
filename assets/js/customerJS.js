// 原有程式碼：處理 body padding
function updateBodyPadding() {
    var nav = document.getElementById('mainNav');
    if (nav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    }
}
window.addEventListener('resize', updateBodyPadding);
window.addEventListener('DOMContentLoaded', updateBodyPadding);
updateBodyPadding();

// 你的新程式碼：處理文字截斷並加省略號
document.addEventListener('DOMContentLoaded', function() {
    // 選擇所有帶有 'js-truncate-text' class 的文字元素
    const textElementsToTruncate = document.querySelectorAll('.js-truncate-text');

    textElementsToTruncate.forEach(element => {
        const originalText = element.textContent; // 儲存原始文字內容
        const maxLines = 3; // 設定你希望顯示的最大行數，可以調整這個數字

        // 計算單行文字的像素高度，使用 parseFloat 確保能獲取小數點
        const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        // 計算允許的最大總高度 (行高 * 最大行數)
        const maxHeight = maxLines * lineHeight;

        // 暫時移除可能會影響高度計算的 overflow 屬性，確保能測量到完整的 scrollHeight
        element.style.overflow = 'visible';
        element.style.whiteSpace = 'normal'; // 確保文字正常換行

        // 如果元素的實際滾動高度 (scrollHeight) 大於最大允許高度
        if (element.scrollHeight > maxHeight) {
            let truncatedText = originalText;
            // 逐步縮短文字，直到它適合指定的行數為止
            // 每次移除一個字元，並檢查高度
            while (element.scrollHeight > maxHeight && truncatedText.length > 0) {
                truncatedText = truncatedText.substring(0, truncatedText.length - 1);
                element.textContent = truncatedText + '...'; // 加上省略號
            }
            // 確保即使原始文字很短，也能正確加上省略號
            if (element.textContent !== originalText && !element.textContent.endsWith('...')) {
                 element.textContent = element.textContent.slice(0, -3) + '...';
            }
        }
        // 處理完畢後，恢復 overflow 屬性為 hidden，確保內容不會溢出父容器
        element.style.overflow = 'hidden';
    });
});

