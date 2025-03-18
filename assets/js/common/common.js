$(function() {
    setInterval(function() {
        var dateInfo = new Date();
        var hour = String(dateInfo.getHours()).padStart(2, '0');  // 2자리로 맞추기
        var min = String(dateInfo.getMinutes()).padStart(2, '0'); // 2자리로 맞추기
        var sec = String(dateInfo.getSeconds()).padStart(2, '0'); // 2자리로 맞추기
        var year = dateInfo.getFullYear();
        var month = dateInfo.getMonth() + 1;
        var date = dateInfo.getDate();
        var daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        var dayOfweek = daysOfWeek[dateInfo.getDay()];

        $(".day").html(year + "년&nbsp;" + month + "월&nbsp;" + date + "일&nbsp;" + dayOfweek + "요일");
        $(".time").html(hour + ":" + min + ":" + sec);
    }, 1000);

    gsap.registerPlugin(ScrollToPlugin);

    $(".item-btn").on('click', function() {
        let target = $(this).data("target");

        gsap.to(window, {
            duration: 1.2,
            scrollTo: target,
            escape: "power2.inOut"
        });
    });
})