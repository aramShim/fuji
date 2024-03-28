$(function(){
  listItemActive();
  
  itemAction();
  playControl();

  playRange();
  volumnBtn();

  for($i=1; $i < 3; $i++){    
    const wavesurfer = WaveSurfer.create({
      container: '#waveform'+$i,
      waveColor: '#ccc',
      progressColor: '#0cbe9a',
      url: 'audio/audio'+$i+'.mp3',
      hideScrollbar: true,
      height: 25,
      barWidth: 1,
      cursorWidth : 1,
      maxCanvasWidth : 610,

    })
  }

})

function volumnBtn(){
  $('.volumn-btn').click(function(){
    $(this).find('i').toggleClass('bi-volume-down-fill bi-volume-mute-fill');
  })
}
function playRange(){
  $('.playing_progress').click(function(){
    $(this).toggleClass('active');
  })
  $('.playing_progress').mouseover(function(){
    $(this).removeClass('active');
  })
}
function listItemActive(){
  $('.list-item a').click(function(e){
    e.preventDefault();
    var $parentListItem = $(this).closest('.list-item');
    $('.list-item').removeClass('active');
    $parentListItem.addClass('active');
    $parentListItem.addClass('play'); 
    
    $('.player-wrap').addClass('active');
    $('.play-btn-list .play i').toggleClass('bi-play-fill bi-pause-fill'); 

  });
}


function itemAction(){  
  $('.js-item-actions-btn').click(function(){
    var $parentItemActions = $(this).parents('.item-actions');
    $('.item-actions').not($parentItemActions).removeClass('open');
    $parentItemActions.toggleClass('open');    
  })
}

function playControl(){
  $('.play-btn-list .play').click(function(){
    const playBtn =  $(this).find('i');
    const listActive = $('.list-item.active');
    playBtn.toggleClass('bi-play-fill bi-pause-fill');
    
    if(playBtn.hasClass('bi-play-fill')){
      listActive.addClass('pause');
    }else {
      listActive.removeClass('pause');
    }
    
  })
}
