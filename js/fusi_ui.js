$(function(){
  listItemActive();
  
  itemAction();
  playControl();
})

function listItemActive(){
  $('.list-item a').click(function(e){
    e.preventDefault();
    var $parentListItem = $(this).closest('.list-item');
    $('.list-item').removeClass('active');
    $parentListItem.addClass('active');
    $('.player-wrap').addClass('active');
    itemPlayControl($parentListItem);
  });
  
}

function itemPlayControl($clickedListItem) {
  $clickedListItem.toggleClass('pause'); 
  $('.play-btn-list .play i').toggleClass('bi-play-fill bi-pause-fill'); 
}

function itemAction(){  
  $('.item-actions-btn').click(function(){
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
