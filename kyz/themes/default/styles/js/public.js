/**
 * Created by Administrator on 2016/10/11.
 */
function loading (btn_sector, insert_sector,is_start, url, limit,siteId,count ){
    $(btn_sector).click(function () {

        var s = $(is_start).val();

        $.get(url, {ajax:true,start: s,limit:limit,siteId:siteId}, function (Data) {
            $(insert_sector).before(Data);
            var zs=count;
            $(is_start).val(++s);
            if (s * 4 > zs)
            { $(btn_sector).hide(); }
        });
    })
}