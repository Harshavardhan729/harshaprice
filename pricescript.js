document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function (event) {
        this.querySelector("input[type='radio']").checked = true;
        document.querySelectorAll('.box .content_size_color').forEach(content => {
            if (content !== this.querySelector('.content_size_color')) {
                content.style.display = 'none';
            }
        });

        const content = this.querySelector('.content_size_color');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
    });
});

document.querySelectorAll('.size_color select').forEach(select => {
    select.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
