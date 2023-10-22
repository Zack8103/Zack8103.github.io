$(function() {
    const videoElement = $('#video').get(0);
    const videoElement2 = $('#video2').get(0);
    const maxScroll = $(document).height() - $(window).height();
    const videoOffset = $('#video').offset().top;
    const video2Offset = $('#video2').offset().top;
    const middleSectionOffset = videoOffset + $(window).height();

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();

        if (currentScrollPosition + $(window).height() >= videoOffset && currentScrollPosition < middleSectionOffset) {
            if (videoElement.duration) {
                const scrollProgress = (currentScrollPosition - videoOffset) / (middleSectionOffset - videoOffset);
                videoElement.currentTime = videoElement.duration * scrollProgress;
            } else {
                console.warn("Video duration is not available");
            }
        } else if (currentScrollPosition >= middleSectionOffset && videoElement.currentTime < videoElement.duration) {
            videoElement.currentTime = videoElement.duration;
        }

        if (currentScrollPosition + $(window).height() >= video2Offset) {
            if (videoElement2.duration) {
                videoElement2.currentTime = videoElement2.duration * ((currentScrollPosition - video2Offset) / (maxScroll - video2Offset));
            } else {
                console.warn("Video duration for the second video is not available");
            }
        }
    });
});