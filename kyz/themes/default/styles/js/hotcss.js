(function( window , document ){

    'use strict';

    //缁檋otcss寮€杈熶釜鍛藉悕绌洪棿锛屽埆闂垜涓轰粈涔堬紝鎴戣缁欎綘鍑嗗浣犱細鐢ㄥ埌鐨勬柟娉曪紝鍏嶅緱鐢ㄥ埌鐨勬椂鍊欒繕瑕佽嚜宸卞啓銆�
    var hotcss = {};

    (function() {
        //鏍规嵁devicePixelRatio鑷畾璁＄畻scale
        //鍙互鏈夋晥瑙ｅ喅绉诲姩绔�1px杩欎釜涓栫邯闅鹃銆�
        var viewportEl = document.querySelector('meta[name="viewport"]'),
            hotcssEl = document.querySelector('meta[name="hotcss"]'),
            dpr = window.devicePixelRatio || 1,
            maxWidth = 540,
            designWidth = 0;

        dpr = dpr >= 3 ? 3 : ( dpr >=2 ? 2 : 1 );

        //鍏佽閫氳繃鑷畾涔塶ame涓篽otcss鐨刴eta澶达紝閫氳繃initial-dpr鏉ュ己鍒跺畾涔夐〉闈㈢缉鏀�
        if (hotcssEl) {
            var hotcssCon = hotcssEl.getAttribute('content');
            if (hotcssCon) {
                var initialDprMatch = hotcssCon.match(/initial\-dpr=([\d\.]+)/);
                if (initialDprMatch) {
                    dpr = parseFloat(initialDprMatch[1]);
                }
                var maxWidthMatch = hotcssCon.match(/max\-width=([\d\.]+)/);
                if (maxWidthMatch) {
                    maxWidth = parseFloat(maxWidthMatch[1]);
                }
                var designWidthMatch = hotcssCon.match(/design\-width=([\d\.]+)/);
                if (designWidthMatch) {
                    designWidth = parseFloat(designWidthMatch[1]);
                }
            }
        }

        document.documentElement.setAttribute('data-dpr', dpr);
        hotcss.dpr = dpr;

        document.documentElement.setAttribute('max-width', maxWidth);
        hotcss.maxWidth = maxWidth;

        if( designWidth ){
            document.documentElement.setAttribute('design-width', designWidth);
            hotcss.designWidth = designWidth;
        }

        var scale = 1 / dpr,
            content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';

        if (viewportEl) {
            viewportEl.setAttribute('content', content);
        } else {
            viewportEl = document.createElement('meta');
            viewportEl.setAttribute('name', 'viewport');
            viewportEl.setAttribute('content', content);
            document.head.appendChild(viewportEl);
        }

    })();

    hotcss.px2rem = function( px , designWidth ){
        //棰勫垽浣犲皢浼氬湪JS涓敤鍒板昂瀵革紝鐗规彁渚涗竴涓柟娉曞姪浣犲湪JS涓皢px杞负rem銆傚氨鏄繖涔堣创蹇冦€�
        if( !designWidth ){
            //濡傛灉浣犲湪JS涓ぇ閲忕敤鍒版鏂规硶锛屽缓璁洿鎺ュ畾涔� hotcss.designWidth 鏉ュ畾涔夎璁″浘灏哄;
            //鍚﹀垯鍙互鍦ㄧ浜屼釜鍙傛暟鍛婅瘔鎴戜綘鐨勮璁″浘鏄澶с€�
            designWidth = parseInt(hotcss.designWidth , 10);
        }

        return parseInt(px,10)*320/designWidth/20;
    }

    hotcss.rem2px = function( rem , designWidth ){
        //鏂板涓€涓猺em2px鐨勬柟娉曘€傜敤娉曞拰px2rem涓€鑷淬€�
        if( !designWidth ){
            designWidth = parseInt(hotcss.designWidth , 10);
        }
        //rem鍙兘涓哄皬鏁帮紝杩欓噷涓嶅啀鍋氬鐞嗕簡
        return rem*20*designWidth/320;
    }

    hotcss.mresize = function(){
        //瀵癸紝杩欎釜灏辨槸鏍稿績鏂规硶浜嗭紝缁橦TML璁剧疆font-size銆�
        var innerWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth;

        if( hotcss.maxWidth && (innerWidth/hotcss.dpr > hotcss.maxWidth) ){
            innerWidth = hotcss.maxWidth*hotcss.dpr;
        }

        if( !innerWidth ){ return false;}

        document.documentElement.style.fontSize = ( innerWidth*20/320 ) + 'px';

        hotcss.callback && hotcss.callback();

    };

    hotcss.mresize(); 
    //鐩存帴璋冪敤涓€娆�

    window.addEventListener( 'resize' , function(){
        clearTimeout( hotcss.tid );
        hotcss.tid = setTimeout( hotcss.mresize , 33 );
    } , false ); 
    //缁戝畾resize鐨勬椂鍊欒皟鐢�

    window.addEventListener( 'load' , hotcss.mresize , false ); 
    //闃叉涓嶆槑鍘熷洜鐨刡ug銆俵oad涔嬪悗鍐嶈皟鐢ㄤ竴娆°€�


    setTimeout(function(){
        hotcss.mresize(); 
        //闃叉鏌愪簺鏈哄瀷鎬紓鐜拌薄锛屽紓姝ュ啀璋冪敤涓€娆�
    },333)

    window.hotcss = hotcss; 
    //鍛藉悕绌洪棿鏆撮湶缁欎綘锛屾帶鍒舵潈浜ょ粰浣狅紝鎯虫€庝箞璋冩€庝箞璋冦€�


})( window , document );