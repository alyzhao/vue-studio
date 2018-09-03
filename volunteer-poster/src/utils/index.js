export default {
    /**
     * devicePixelRatio设备像素比 webkitBackingStorePixelRatio Canvas缓冲区的像素比
     * 将canvas中的1像素等于屏幕中的1像素
     */
    pixelRatio: function(ctx) {
        var backingstore = ctx.webkitBackingStorePixelRatio|| 1;
        return (window.devicePixelRatio || 1) / backingstore;
    },
    /**
     * 将图片进行压缩，减少页面大小
     * 旋转操作也放在此处
     */
    filterImage: function(image, width, height, deg) {
        var canvas = document.createElement('canvas');
        var pr = this.pixelRatio(canvas.getContext('2d'));

        //hidpi-canvas将canvas的width和height属性放大pr倍
        canvas.width = width / pr;//恢复为原先的大小
        canvas.height = height / pr;

        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFF';//绘制背景色
        ctx.fillRect(0,0,canvas.width,canvas.height);
        if(deg) {
            ctx.rotate(deg * Math.PI / 180);
            ctx.drawImage(image, 0, -canvas.width);
        }else {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }

        return canvas.toDataURL('image/jpeg', 0.7);
    },
    /**
     * 画图
     */
    drawImage: function(ctx, image, offset) {
        var pr = this.pixelRatio(ctx), key;
        ctx.save();

        for(key in offset.image) {
            offset.image[key] = Math.floor(offset.image[key]);
        }
        for(key in offset.frame) {
            offset.frame[key] = Math.floor(offset.frame[key]);
        }

        ctx.drawImage(image[0] || image,
            offset.image.x, offset.image.y, offset.image.w, offset.image.h,
            offset.frame.x * pr, offset.frame.y * pr, offset.frame.w * pr, offset.frame.h * pr);

        ctx.restore();
    },
    /**
     * 初始化拖拽,放缩事件
     * 开源库touch.js
     */
    initTouch: function(touchPad, img) {
        var offx = 0, offy = 0;
        var scale = 1;
        var currScale;

        function formatTransform(offx, offy, scale) {
            var translate = 'translate3d(' + (offx + 'px,') + (offy + 'px,') + '0)';
            scale = 'scale(' + scale + ')';
            //var rotate = 'rotate('+deg+'deg)';
            return translate + ' ' + scale;
        }

        touch.on(touchPad, 'touchstart', function (ev) {
            ev.preventDefault();
        });

        touch.on(touchPad, 'drag', function(ev) {
            var currOffx = offx + ev.x;
            var currOffy = offy + ev.y;
            img.style.webkitTransform = formatTransform(currOffx, currOffy, scale);
        });

        touch.on(touchPad, 'dragend', function(ev) {
            offx += ev.x;
            offy += ev.y;
        });

        touch.on(touchPad, 'pinch', function(ev) {
            if(typeof ev.scale != 'undefined') {
                currScale = ev.scale - 1 + scale;
                img.style.webkitTransform = formatTransform(offx, offy, currScale);
            }
        });

        touch.on(touchPad, 'pinchend', function() {
            scale = currScale;
        });
    },
    /**
     * 计算出img在frame中的可见部分相对于img和frame的坐标及尺寸
     */
    intersect: function($frame, $img) {
        var imgX = 0, imgY = 0, imgW = 0, imgH = 0;
        var frmX = 0, frmY = 0;
        var imgOffset, frmOffset;
        var left, right, top, bottom;

        imgOffset = $img.offset();//图片的偏移对象
        frmOffset = $frame.offset();//画框的偏移对象
        left = imgOffset.left - frmOffset.left - 3;//图片到边框左边的距离 去除1px的边框
        right = left + imgOffset.width;//画框模型是border-box，所以图片宽度需要减去边框的宽度 就是574
        top = imgOffset.top - frmOffset.top - 3;//图片到边框上边的距离
        bottom = top + imgOffset.height;

        //图片在画框内
        if(!(right <= 0 || left >= frmOffset.width || bottom <= 0 || top >= frmOffset.height)) {
            if(left < 0) {
                imgX = -left;
                frmX = 0;
                imgW = (right < frmOffset.width) ? right : frmOffset.width;
            } else {
                imgX = 0;
                frmX = left;
                imgW = (right < frmOffset.width ? right : frmOffset.width) - left;
            }

            if(top < 0) {
                imgY = -top;
                frmY = 0;
                imgH = (bottom < frmOffset.height) ? bottom : frmOffset.height;
            } else {
                imgY = 0;
                frmY = top;
                imgH = ((bottom < frmOffset.height) ? bottom : frmOffset.height) - top;

            }
        }

        var ratio = $img.data('width') / $img.width();//图片真实宽度 与 图片CSS宽度
        //图片的实际高度不能低于计算后的高度 否则iphone 5S中就不显示
        var imageHeight = imgH * ratio;
        if(+$img.data('height') < imageHeight) {
            imageHeight = $img.data('height');
        }
        return {
            frame: {x: frmX, y: frmY, w: (imgW + 6), h: (imgH + 6)},//此处画框是574，而画布是580
            image: {x: imgX * ratio, y: imgY * ratio, w: imgW * ratio, h: imageHeight}
        };
    }
};