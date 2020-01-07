function myCopy() {
  const input = document.querySelector('#myNumber');
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        alert('不知道你在复制什么，但是你复制成功了！');
    }
}
