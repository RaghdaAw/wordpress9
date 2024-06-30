
    selector{​​
    --radius: 8px;
    --height: 320px;
    --active-height: 410px;
    --overlay: 0.75;
}​​
selector{​​
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.8s ease-in-out;
}​​
selector.loaded{​​
    opacity: 1;
    transform: translateX(0);
}​​
selector .swiper-wrapper{​​
    height: var(--active-height);
    align-items: center;
}​​
selector:not(.loaded) .swiper-wrapper{​​
    transition-duration: 0s !important;
}​​
selector .swiper-slide{​​
    display: flex;
    align-items: flex-end;
    border-radius: var(--radius);
    height: var(--height);
    box-shadow: 0 0 50px rgba(0,0,0,0.15);
}​​
selector.loaded .swiper-slide{​​
    transition: all 0.3s ease-in-out 0.2s;
}​​
selector .swiper-slide.swiper-slide-active{​​
    height: var(--active-height);
}​​
selector .swiper-slide:before{​​
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(0,0,0);
    background: linear-gradient(20deg, rgba(0,0,0,var(--overlay)) 0%, rgba(0,0,0,0) 100%);
    height: 100%;
    width: 100%;
    z-index: 1;
}​​
selector .elementor-testimonial__footer{​​
    display: block;
}​​
selector img{​​
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
}​​
selector .elementor-testimonial__cite{​​
    z-index: 2;
    position: relative;
}​​
selector .elementor-testimonial__name{​​
    margin-bottom: 5px;
}​​
selector .swiper-pagination,
selector .elementor-swiper-button{​​
    display: none;
}​​
selector .swiper-container{​​
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
}​​
@media (max-width: 1024px){​​
selector{​​
    --height: 180px;
    --active-height: 250px;
}​​
}​​
@media (max-width: 767px){​​
selector{​​
    --height: 80px;
    --active-height: 105px;
    width: 100% !important;
    max-width: var(--container-widget-width, 300px) !important;
}​​
selector .elementor-testimonial__cite{​​
    opacity: 0;
}​​
}​​
/* custom css for the testimonial widget */
<https://teams.microsoft.com/l/message/19:4ad45a4dde834b10bc1dc2036f4d63ad@thread.tacv2/1719758131020?tenantId=e3b461c3-cfd0-4566-b686-df4ec047ebd8&amp;groupId=4ee46d6c-8ec3-4dc4-a66b-858b20658070&amp;parentMessageId=1719758131020&amp;teamName=Word Press Project&amp;channelName=general chat&amp;createdTime=1719758131020&amp;allowXTenantAccess=false>​[4:36 PM] Marvel Tiyjudymijn javascript stukje
    <script>
var $ = jQuery
$(document).ready(function(){​​
$('.as-slider').each(function(){​​
var $this = $(this),
    currentSlide = 0,
    previousSlide = 0,
    slideNumber = $this.find('.as-side-slider .swiper-slide:not(.swiper-slide-duplicate)').length,
    barHTML = '',
    forward,
    textContainer = $this.find('.as-changing-widget')
for(var i=0; i<slideNumber;i++){​​
    barHTML += `<span class="dot"><span class="dot-number">${​​i+1}​​</span></span>`
}​​
$this.find('.as-bar .dot').remove()
$this.find('.as-bar').append(barHTML)
$this.find('.as-bar .dot').eq(0).addClass('active')
textContainer.each(function(){​​
    var texts = $(this).find('.elementor-widget').eq(0)
    texts.addClass('currentUp')
    $(this).css('--h', texts.height()+'px')
}​​)
setTimeout(function(){​​
    $this.addClass('loaded')
    if($this.find('.as-side-slider .swiper-container-initialized, .as-side-slider .swiper-initialized').length){​​
        $this.find('.as-side-slider').addClass('loaded')
    }​​
    var init = setInterval(function(){​​
        if($this.find('.as-side-slider .swiper-container-initialized, .as-side-slider .swiper-initialized').length){​​
            $this.find('.as-side-slider').addClass('loaded')
            clearInterval(init)
        }​​
    }​​,50)
}​​, 500)
var bgs = JSON.parse($this.attr('data-settings')).background_slideshow_gallery,
    bgHTML = '<div class="as-slider-background">'
if(bgs){​​
    bgs.forEach(function(background){​​
        bgHTML += `<img src="${​​background.url}​​"/>`
    }​​)
}​​
bgHTML += '</div>'
$this.find('.as-slider-background').remove()
$this.prepend(bgHTML)
var backgrounds = $this.find('.as-slider-background img')
backgrounds.eq(0).addClass('currentForward')
setInterval(function(){​​
    currentSlide = $this.find('.as-side-slider .swiper-slide-active').attr('data-swiper-slide-index')
    if(previousSlide != currentSlide) {​​
        if( previousSlide < currentSlide ){​​
            forward = true
        }​​
        if( previousSlide > currentSlide ){​​
            forward = false
        }​​
        if( previousSlide == slideNumber - 1 && currentSlide == 0 ){​​
            forward = true
        }​​
        if( previousSlide == 0 && currentSlide == slideNumber - 1 ){​​
            forward = false
        }​​
        textContainer.each(function(){​​
            var texts = $(this).find('.elementor-widget')
            $(this).css('--h', texts.eq(currentSlide).height()+'px')
            texts.removeClass('prev next currentUp currentDown')
            backgrounds.removeClass('prev currentBackward currentForward')
            backgrounds.eq(previousSlide).addClass('prev')
            if(forward) {​​
                texts.eq(previousSlide).addClass('prev')
                texts.eq(currentSlide).addClass('currentUp')
                backgrounds.eq(currentSlide).addClass('currentForward')
            }​​else{​​
                texts.eq(previousSlide).addClass('next')
                texts.eq(currentSlide).addClass('currentDown')
                backgrounds.eq(currentSlide).addClass('currentBackward')
            }​​
        }​​)
        $this.find('.as-bar .dot').removeClass('active')
        $this.find('.as-bar .dot').eq(currentSlide).addClass('active')
    }​​
    previousSlide = currentSlide
}​​, 500)
$this.find('.as-bar .dot').on('click', function(){​​
    var index = $(this).index()
    $this.find('.as-side-slider .swiper-pagination-bullet').eq(index).trigger('click')
    $this.find('.as-side-slider .swiper-container').trigger('mouseleave')
}​​)
$this.find('.as-slider-left').on('click', function(){​​
    $this.find('.as-side-slider .elementor-swiper-button-prev').trigger('click')
    $this.find('.as-side-slider .elementor-swiper').trigger('mouseleave')
}​​)
$this.find('.as-slider-right').on('click', function(){​​
    $this.find('.as-side-slider .elementor-swiper-button-next').trigger('click')
    $this.find('.as-side-slider .elementor-swiper').trigger('mouseleave')
}​​)
$this.find('.as-slider-left a, .as-slider-right a').on('click', function(e){​​
    e.preventDefault()
}​​)
}​​)
}​​)
$(window).on('resize', function(){​​

$('.as-slider').each(function(){​​
    var textContainer = $(this).find('.as-changing-widget')
    textContainer.each(function(){​​
        var texts = $(this).find('.elementor-widget.currentUp, .elementor-widget.currentDown')
        $(this).css('--h', texts.height()+'px')
    }​​)
}​​)
}​​)
</script>
<https://teams.microsoft.com/l/message/19:4ad45a4dde834b10bc1dc2036f4d63ad@thread.tacv2/1719758189838?tenantId=e3b461c3-cfd0-4566-b686-df4ec047ebd8&amp;groupId=4ee46d6c-8ec3-4dc4-a66b-858b20658070&amp;parentMessageId=1719758189838&amp;teamName=Word Press Project&amp;channelName=general chat&amp;createdTime=1719758189838&amp;allowXTenantAccess=false>